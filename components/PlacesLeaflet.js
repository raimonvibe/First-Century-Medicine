"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

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

function olivePin(selected) {
  return L.divIcon({
    className: `fcm-pin${selected ? " is-selected" : ""}`,
    html: `<svg viewBox="0 0 30 40" width="30" height="40" aria-hidden="true" focusable="false">
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
    const bounds = L.latLngBounds(places.map((place) => [place.lat, place.lng]));
    const fit = () => map.fitBounds(bounds, { padding: BOUNDS_PADDING, animate: false });
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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
        worldCopyJump
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
        {allPlaces.map((place) =>
          visible.has(place.id) ? (
            <Marker
              key={place.id}
              position={[place.lat, place.lng]}
              icon={olivePin(place.id === selectedId)}
              title={place.name}
              flyZoom={place.zoom}
              keyboard
              ref={(marker) => {
                if (marker) {
                  markers.current.set(place.id, marker);
                  marker
                    .getElement()
                    ?.setAttribute(
                      "aria-label",
                      `${place.name}, ${place.region}. Press Enter for details.`,
                    );
                } else {
                  markers.current.delete(place.id);
                }
              }}
              eventHandlers={{
                click: () => onSelect(place.id),
                popupopen: () => onSelect(place.id),
              }}
            >
              <Popup maxWidth={maxWidth} minWidth={Math.min(220, maxWidth)} autoPanPaddingTopLeft={[60, 16]}
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
