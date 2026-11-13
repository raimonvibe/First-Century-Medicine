"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { placeCategories, places } from "@/lib/places";

const PlacesLeaflet = dynamic(() => import("@/components/PlacesLeaflet"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-parchment font-sans text-sm text-ink-soft">
      Unrolling the map…
    </div>
  ),
});

const categoryLabel = Object.fromEntries(
  placeCategories.map((category) => [category.id, category.label]),
);

export default function PlacesExplorer() {
  const [active, setActive] = useState(
    () => new Set(placeCategories.map((category) => category.id)),
  );
  const [selectedId, setSelectedId] = useState(null);
  const [focus, setFocus] = useState(null);
  const mapBox = useRef(null);

  // Keep the map exactly one screen tall below the sticky header.
  useEffect(() => {
    const header = document.querySelector("body > header");
    if (!header) return;
    const root = document.documentElement;
    const update = () =>
      root.style.setProperty("--site-header-h", `${header.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--site-header-h");
    };
  }, []);

  const visible = useMemo(
    () => places.filter((place) => active.has(place.category)),
    [active],
  );

  const toggle = (id) => {
    setActive((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const showOnMap = (id) => {
    setSelectedId(id);
    // A fresh object each click, so clicking the same place flies again.
    setFocus((current) => ({ id, n: (current?.n ?? 0) + 1 }));
    // On phones the list sits below the map: bring the whole map into view,
    // just under the sticky header and above the read-aloud dock.
    const box = mapBox.current;
    if (!box) return;
    const styles = getComputedStyle(document.documentElement);
    const header = parseFloat(styles.getPropertyValue("--site-header-h")) || 0;
    const dock = parseFloat(styles.getPropertyValue("--speech-dock-height")) || 0;
    const rect = box.getBoundingClientRect();
    if (rect.top < header - 1 || rect.bottom > window.innerHeight - dock + 1) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({
        top: window.scrollY + rect.top - header,
        behavior: reduce ? "auto" : "smooth",
      });
    }
  };

  return (
    <section aria-labelledby="map-heading" className="fcm-map-page">
      <div className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-10">
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.28em]">
          Atlas
        </p>
        <h1
          id="map-heading"
          className="mt-2 font-display text-3xl font-semibold leading-tight text-olive sm:text-4xl md:text-5xl"
        >
          A Map of Ancient Medicine
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Where the physicians lived, where the remedies grew, and where
          people went to be healed. Every place links to the chapter that
          tells its story.
        </p>
      </div>

      <div
        className="fcm-chips mx-auto mt-4 flex max-w-6xl gap-2 overflow-x-auto px-4 pb-2 md:flex-wrap md:px-6"
        role="group"
        aria-label="Filter places by category"
      >
        {placeCategories.map((category) => {
          const on = active.has(category.id);
          const count = places.filter((p) => p.category === category.id).length;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(category.id)}
              className="fcm-chip"
              data-category={category.id}
            >
              <span className="fcm-chip-dot" aria-hidden="true" />
              {category.label}
              <span className="fcm-chip-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="fcm-map-layout mx-auto max-w-6xl md:px-6">
        <div
          ref={mapBox}
          className="fcm-map-frame scroll-mt-[var(--site-header-h,3.5rem)]"
        >
          <PlacesLeaflet
            places={visible}
            allPlaces={places}
            selectedId={selectedId}
            focus={focus}
            onSelect={setSelectedId}
          />
        </div>

        <aside className="fcm-place-list" aria-labelledby="place-list-heading">
          <h2
            id="place-list-heading"
            className="px-4 pb-2 pt-4 font-display text-xl font-semibold text-olive md:px-3"
          >
            Places{" "}
            <span className="font-sans text-sm font-normal text-ink-soft">
              ({visible.length} of {places.length})
            </span>
          </h2>
          <p className="sr-only" aria-live="polite">
            Showing {visible.length} of {places.length} places.
          </p>
          {visible.length === 0 ? (
            <p className="px-4 py-6 font-sans text-sm text-ink-soft md:px-3">
              No category selected. Turn on a filter above to see places.
            </p>
          ) : (
            <ul className="divide-y divide-sand/70">
              {visible.map((place) => (
                <li key={place.id}>
                  <article
                    className={`fcm-place ${
                      place.id === selectedId ? "is-selected" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="fcm-place-button"
                      onClick={() => showOnMap(place.id)}
                      aria-label={`Show ${place.name} on the map`}
                    >
                      <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
                        {categoryLabel[place.category]} · {place.region}
                      </span>
                      <span className="mt-0.5 block font-display text-lg font-semibold text-olive">
                        {place.name}
                      </span>
                    </button>
                    <p className="px-4 font-sans text-sm leading-relaxed text-ink-soft md:px-3">
                      {place.description}
                    </p>
                    <Link
                      href={place.chapter}
                      className="fcm-place-link"
                    >
                      Read the chapter
                      <span className="sr-only">: {place.chapterTitle}</span>
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>

      <p className="mx-auto max-w-6xl px-4 pt-4 font-sans text-xs leading-relaxed text-ink-soft md:px-6">
        Base map: the{" "}
        <a
          href="https://imperium.ahlfeldt.se/"
          className="underline decoration-sand underline-offset-2 hover:text-terracotta"
          target="_blank"
          rel="noopener"
        >
          Digital Atlas of the Roman Empire
        </a>{" "}
        by Johan Åhlfeldt (University of Gothenburg), licensed{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          className="underline decoration-sand underline-offset-2 hover:text-terracotta"
          target="_blank"
          rel="noopener"
        >
          CC BY-SA 3.0
        </a>
        . If those tiles cannot load, OpenStreetMap is shown instead. Places
        are approximate.
      </p>
    </section>
  );
}
