"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";

// Free tile sources, no API key needed.
// DARE: Digital Atlas of the Roman Empire, Johan Åhlfeldt, hosted by the
// University of Gothenburg. Native tiles stop at zoom 11. Licence CC BY-SA 3.0.
const BASES = {
  dare: {
    url: "https://dh.gu.se/tiles/imperium/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://imperium.ahlfeldt.se/" target="_blank" rel="noopener">Digital Atlas of the Roman Empire</a> (Johan Åhlfeldt, Univ. of Gothenburg), <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener">CC BY-SA 3.0</a>',
    maxNativeZoom: 11,
  },
  osm: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    maxNativeZoom: 19,
  },
};

const BOUNDS_PADDING = [24, 24];

function boundsOf(places) {
  return L.latLngBounds(places.map((place) => [place.lat, place.lng]));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Show every given place (or all places when the filter is empty).
export function fitPlaces(map, places, { animate = true } = {}) {
  if (!map || places.length === 0) return;
  map.closePopup();
  map.fitBounds(boundsOf(places), {
    padding: BOUNDS_PADDING,
    maxZoom: 8,
    animate: animate && !prefersReducedMotion(),
  });
}

function escapeHtml(text) {
  return text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

// The label lives inside the icon so it survives Leaflet swapping the icon
// element when a pin is selected.
function olivePin(selected, label) {
  return L.divIcon({
    className: `fcm-pin${selected ? " is-selected" : ""}`,
    html: `<span class="sr-only">${escapeHtml(label)}</span><svg viewBox="0 0 30 40" width="30" height="40" aria-hidden="true" focusable="false">
      <path class="fcm-pin-body" d="M15 1.5C7.5 1.5 1.5 7.4 1.5 14.8c0 9.6 11.6 22 12.5 23a1.4 1.4 0 0 0 2 0c.9-1 12.5-13.4 12.5-23C28.5 7.4 22.5 1.5 15 1.5Z"/>
      <path class="fcm-pin-leaf" d="M15 22c3.6-2.7 6-6.2 6-10-3.6.9-5.4 3.6-6 10Zm0 0c-3.6-2.7-6-6.2-6-10 3.6.9 5.4 3.6 6 10Z"/>
    </svg>`,
    iconSize: [44, 44],
    iconAnchor: [22, 42],
    popupAnchor: [0, -38],
  });
}

function popupMaxWidth() {
  if (typeof window === "undefined") return 280;
  // Leaves room for the zoom buttons (60px) and the popup padding on phones.
  return Math.max(200, Math.min(300, window.innerWidth - 120));
}

// Fits all places on first render and flies to a place when asked.
function MapController({ places, focus, markers, onReady }) {
  const map = useMap();
  const fitted = useRef(false);

  useEffect(() => {
    onReady(map);
  }, [map, onReady]);

  // The frame's height is set by CSS variables that arrive after mount, so
  // re-measure on every resize. Keep refitting all places until the reader
  // has touched the map.
  useEffect(() => {
    if (places.length === 0) return;
    const container = map.getContainer();
    const bounds = boundsOf(places);
    // Pinching or panning can never lose the region: the map stays within
    // a margin around all places and can't zoom out much past them.
    map.setMaxBounds(bounds.pad(0.6));
    const limitZoom = () => {
      const fitZoom = map.getBoundsZoom(bounds, false, L.point(48, 48));
      map.setMinZoom(Math.max(2, fitZoom - 1));
    };
    const fit = () => {
      limitZoom();
      map.fitBounds(bounds, { padding: BOUNDS_PADDING, animate: false });
    };
    const touched = () => {
      fitted.current = true;
    };
    const events = ["pointerdown", "wheel", "keydown", "touchstart"];
    events.forEach((name) =>
      container.addEventListener(name, touched, { passive: true }),
    );
    fit();
    const observer = new ResizeObserver(() => {
      map.invalidateSize({ pan: false });
      limitZoom();
      if (!fitted.current) fit();
    });
    observer.observe(container);
    return () => {
      observer.disconnect();
      events.forEach((name) => container.removeEventListener(name, touched));
    };
  }, [map, places]);

  useEffect(() => {
    if (!focus) return;
    const marker = markers.current.get(focus.id);
    if (!marker) return;
    fitted.current = true;
    const reduce = prefersReducedMotion();
    const target = marker.getLatLng();
    const zoom = marker.options.flyZoom || 7;
    const open = () => marker.openPopup();
    if (reduce) {
      map.setView(target, zoom, { animate: false });
      open();
    } else {
      map.once("moveend", open);
      map.flyTo(target, zoom, { duration: 0.8 });
    }
    return () => map.off("moveend", open);
  }, [focus, map, markers]);

  return null;
}

// Reports how many of the shown places are on screen, and whether the
// selected one is, so the page can offer a way back.
function ViewWatcher({ places, selectedId, onChange }) {
  const map = useMap();
  const report = () => {
    const view = map.getBounds();
    const inView = places.filter((place) => view.contains([place.lat, place.lng])).length;
    const selected = places.find((place) => place.id === selectedId);
    onChange({
      inView,
      selectedOut: selected && !view.contains([selected.lat, selected.lng]) ? selected : null,
    });
  };
  useMapEvents({ moveend: report, zoomend: report, resize: report });

  // A filter change that leaves nothing on screen: show the new set.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const view = map.getBounds();
    if (places.length && !places.some((place) => view.contains([place.lat, place.lng]))) {
      fitPlaces(map, places);
    } else {
      report();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- report reads the latest props
  }, [map, places, selectedId]);

  return null;
}

// Scroll wheel only zooms after the map is clicked or focused,
// so desktop page scrolling never gets captured by the map.
function WheelGuard() {
  const map = useMap();
  useEffect(() => {
    const on = () => map.scrollWheelZoom.enable();
    const off = () => map.scrollWheelZoom.disable();
    const container = map.getContainer();
    map.on("click focus", on);
    container.addEventListener("mouseleave", off);
    return () => {
      map.off("click focus", on);
      container.removeEventListener("mouseleave", off);
    };
  }, [map]);
  return null;
}

export default function PlacesLeaflet({
  places,
  allPlaces,
  selectedId,
  focus,
  onSelect,
}) {
  const markers = useRef(new Map());
  const mapRef = useRef(null);
  const [base, setBase] = useState("dare");
  // This component only renders in the browser (ssr: false), so window exists.
  const [touch] = useState(
    () => window.matchMedia("(pointer: coarse)").matches,
  );
  const [hint, setHint] = useState(false);
  const [view, setView] = useState({ inView: 1, selectedOut: null });
  const tileStats = useRef({ loaded: 0, failed: 0 });

  // Touch: one finger scrolls the page, two fingers pan and zoom the map
  // (dragging is off, so Leaflet's pinch handler moves the map instead).
  useEffect(() => {
    if (!touch) return;
    const map = mapRef.current;
    if (!map) return;
    const container = map.getContainer();
    let timer;
    const onTouchMove = (event) => {
      if (event.touches.length !== 1) {
        setHint(false);
        return;
      }
      setHint(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setHint(false), 1400);
    };
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      container.removeEventListener("touchmove", onTouchMove);
      window.clearTimeout(timer);
    };
  }, [touch]);

  const visible = useMemo(() => new Set(places.map((place) => place.id)), [places]);

  useEffect(() => {
    if (!selectedId || visible.has(selectedId)) return;
    mapRef.current?.closePopup();
  }, [selectedId, visible]);

  const tileHandlers = useMemo(
    () => ({
      tileload: () => {
        tileStats.current.loaded += 1;
      },
      tileerror: () => {
        tileStats.current.failed += 1;
        const { loaded, failed } = tileStats.current;
        // DARE unreachable: fall back to OpenStreetMap.
        if (base === "dare" && loaded === 0 && failed >= 4) setBase("osm");
      },
    }),
    [base],
  );

  const tiles = BASES[base];
  const maxWidth = popupMaxWidth();

  return (
    <div className="fcm-map relative h-full w-full" data-base={base}>
      <MapContainer
        center={[35, 25]}
        zoom={5}
        minZoom={3}
        maxZoom={13}
        scrollWheelZoom={false}
        maxBoundsViscosity={0.9}
        bounceAtZoomLimits={false}
        className="h-full w-full"
        aria-label="Map of places in first-century medicine"
        keyboard
        dragging={!touch}
      >
        <TileLayer
          key={base}
          url={tiles.url}
          attribution={tiles.attribution}
          maxNativeZoom={tiles.maxNativeZoom}
          maxZoom={13}
          eventHandlers={tileHandlers}
        />
        <MapController
          places={allPlaces}
          focus={focus}
          markers={markers}
          onReady={(map) => {
            mapRef.current = map;
          }}
        />
        <WheelGuard />
        <ViewWatcher places={places} selectedId={selectedId} onChange={setView} />
        {allPlaces.map((place) =>
          visible.has(place.id) ? (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={olivePin(
                place.id === selectedId,
                `${place.name}, ${place.region}${place.id === selectedId ? ", selected" : ""}. Press Enter for details.`,
              )}
              title={place.name}
              flyZoom={place.zoom}
              keyboard
              ref={(marker) => {
                if (marker) {
                  markers.current.set(place.id, marker);
                } else {
                  markers.current.delete(place.id);
                }
              }}
              eventHandlers={{
                click: () => onSelect(place.id),
                popupopen: () => onSelect(place.id),
              }}
            >
              <Popup maxWidth={maxWidth} minWidth={Math.min(220, maxWidth)} autoPanPaddingTopLeft={[60, 64]}
                autoPanPaddingBottomRight={[16, 16]}>
                <div className="fcm-popup">
                  <p className="fcm-popup-kicker">{place.region}</p>
                  <h3 className="fcm-popup-title">{place.name}</h3>
                  <p className="fcm-popup-body">{place.description}</p>
                  <Link href={place.chapter} className="fcm-popup-link">
                    Read the chapter
                    <span className="sr-only">: {place.chapterTitle}</span>
                    <span aria-hidden="true"> →</span>
                  </Link>
                </div>
              </Popup>
            </Marker>
          ) : null,
        )}
      </MapContainer>
      <button
        type="button"
        className="fcm-map-reset"
        onClick={() => fitPlaces(mapRef.current, places.length ? places : allPlaces)}
        aria-label="Show all places on the map"
        title="Show all places"
      >
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M3 7.5V3h4.5M12.5 3H17v4.5M17 12.5V17h-4.5M7.5 17H3v-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="10" r="2.2" fill="currentColor" />
        </svg>
        <span className="fcm-map-reset-label">Show all</span>
      </button>
      {places.length > 0 && view.inView === 0 ? (
        <div className="fcm-map-lost" role="status">
          <span>No places in view.</span>
          <button type="button" onClick={() => fitPlaces(mapRef.current, places)}>
            Show all places
          </button>
        </div>
      ) : view.selectedOut ? (
        <div className="fcm-map-lost" role="status">
          <button
            type="button"
            onClick={() => {
              const marker = markers.current.get(view.selectedOut.id);
              const map = mapRef.current;
              if (!marker || !map) return;
              map.setView(marker.getLatLng(), Math.max(map.getZoom(), view.selectedOut.zoom || 7), {
                animate: !prefersReducedMotion(),
              });
              marker.openPopup();
            }}
          >
            Back to {view.selectedOut.name}
          </button>
        </div>
      ) : null}
      {touch ? (
        <p
          className={`fcm-map-hint ${hint ? "is-visible" : ""}`}
          aria-hidden="true"
        >
          Use two fingers to move the map
        </p>
      ) : null}
    </div>
  );
}
