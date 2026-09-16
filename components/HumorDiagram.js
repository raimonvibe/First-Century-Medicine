"use client";

import { useState } from "react";
import { humors } from "@/lib/humors";

export default function HumorDiagram() {
  const [active, setActive] = useState("blood");
  const selected = humors.find((humor) => humor.id === active) ?? humors[0];

  return (
    <div className="my-10">
      <div className="grid grid-cols-2 overflow-hidden border border-sand">
        {humors.map((humor) => (
          <button
            key={humor.id}
            type="button"
            onClick={() => setActive(humor.id)}
            className={`min-h-24 px-3 py-4 text-left transition sm:min-h-28 sm:px-4 sm:py-5 ${
              active === humor.id ? "text-foam" : "text-foam/80"
            }`}
            style={{ background: humor.color }}
            aria-pressed={active === humor.id}
          >
            <span className="block font-sans text-[10px] uppercase tracking-[0.12em] opacity-80 sm:tracking-[0.2em]">
              {humor.qualities.join(" · ")}
            </span>
            <span className="block font-display text-xl sm:text-2xl">{humor.name}</span>
            <span className="block font-sans text-xs">{humor.temperament}</span>
          </button>
        ))}
      </div>
      <div className="border border-t-0 border-sand bg-parchment/60 px-4 py-5 sm:px-5">
        <p className="font-display text-xl text-olive sm:text-2xl">
          {selected.name}{" "}
          <span className="text-lg italic text-ink-soft">({selected.greek})</span>
        </p>
        <dl className="mt-3 grid gap-2 font-sans text-sm sm:grid-cols-2">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-gold">
              Season / element
            </dt>
            <dd>
              {selected.season} · {selected.element}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-gold">
              Temperament
            </dt>
            <dd>{selected.character}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-gold">
              When in excess
            </dt>
            <dd>{selected.excess}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.18em] text-gold">
              Typical response
            </dt>
            <dd>{selected.treatments}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
