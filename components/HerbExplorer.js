"use client";

import { useMemo, useState } from "react";
import { herbs } from "@/lib/herbs";

const filters = [
  { id: "all", label: "All" },
  { id: "biblical", label: "Named in Scripture" },
  { id: "local", label: "Local to the land" },
  { id: "imported", label: "Imported luxuries" },
];

const conditionFilters = [
  "wounds",
  "digestion",
  "respiratory",
  "pain",
  "skin",
  "sleep",
  "infection",
];

export default function HerbExplorer() {
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState("all");
  const [condition, setCondition] = useState("all");
  const [openId, setOpenId] = useState("balm-of-gilead");

  const results = useMemo(() => {
    return herbs.filter((herb) => {
      const haystack = `${herb.name} ${herb.latin} ${herb.summary} ${herb.uses}`.toLowerCase();
      const matchesQuery = haystack.includes(query.trim().toLowerCase());
      const matchesOrigin =
        origin === "all" ||
        (origin === "biblical" && herb.biblical) ||
        (origin === "local" &&
          (herb.availability === "local" || herb.availability === "local luxury")) ||
        (origin === "imported" &&
          (herb.availability === "imported" || herb.availability === "regional"));
      const matchesCondition =
        condition === "all" || herb.conditions.includes(condition);
      return matchesQuery && matchesOrigin && matchesCondition;
    });
  }, [query, origin, condition]);

  return (
    <div>
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="mb-1 block font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
            Search the materia medica
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Myrrh, cough, Gilead…"
            className="w-full rounded-sm border border-sand bg-cream px-3 py-2 font-sans text-sm text-ink outline-none focus:border-terracotta"
          />
        </label>
        <p className="self-end font-sans text-xs text-ink-soft md:text-right">
          {results.length} of {herbs.length} remedies
        </p>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setOrigin(filter.id)}
            className={`rounded-full border px-3 py-1 font-sans text-xs ${
              origin === filter.id
                ? "border-olive bg-grove text-foam"
                : "border-sand text-ink-soft hover:border-gold"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCondition("all")}
          className={`rounded-full border px-3 py-1 font-sans text-xs ${
            condition === "all"
              ? "border-terracotta bg-terracotta text-foam"
              : "border-sand text-ink-soft"
          }`}
        >
          Any use
        </button>
        {conditionFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCondition(item)}
            className={`rounded-full border px-3 py-1 font-sans text-xs capitalize ${
              condition === item
                ? "border-terracotta bg-terracotta text-foam"
                : "border-sand text-ink-soft"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {results.map((herb) => {
          const expanded = openId === herb.id;
          return (
            <article
              key={herb.id}
              className="border border-sand bg-cream/80"
            >
              <button
                type="button"
              className="flex w-full items-start justify-between gap-3 px-3 py-4 text-left sm:gap-4 sm:px-4"
              onClick={() => setOpenId(expanded ? "" : herb.id)}
              aria-expanded={expanded}
            >
              <span className="block min-w-0">
                <span className="block font-display text-xl text-olive sm:text-2xl">
                  {herb.name}
                </span>
                  <span className="block font-sans text-xs italic text-ink-soft">
                    {herb.latin} · {herb.availability}
                    {herb.biblical ? " · biblical" : ""}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                    {herb.summary}
                  </span>
                </span>
                <span className="shrink-0 font-sans text-gold">{expanded ? "–" : "+"}</span>
              </button>
              {expanded ? (
                <div className="space-y-3 border-t border-sand px-4 py-4 text-sm leading-relaxed">
                  <p>
                    <strong className="font-sans text-xs uppercase tracking-widest text-terracotta">
                      Period uses.{" "}
                    </strong>
                    {herb.uses}
                  </p>
                  <p>
                    <strong className="font-sans text-xs uppercase tracking-widest text-terracotta">
                      What we can say now.{" "}
                    </strong>
                    {herb.properties}
                  </p>
                  <p className="text-ink-soft">{herb.note}</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-gold">
                    Humoral labels: {herb.humoral.join(" · ")} · Conditions:{" "}
                    {herb.conditions.join(", ")}
                  </p>
                </div>
              ) : null}
            </article>
          );
        })}
        {results.length === 0 ? (
          <p className="py-8 text-center text-ink-soft">
            No remedy matches those filters. Clear the search or choose “All.”
          </p>
        ) : null}
      </div>
    </div>
  );
}
