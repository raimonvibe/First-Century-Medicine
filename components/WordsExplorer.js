"use client";

import { useMemo, useState } from "react";
import { glossary, glossaryLetter } from "@/lib/glossary";

const kinds = [
  { id: "all", label: "All" },
  { id: "abbreviation", label: "Abbreviations" },
  { id: "term", label: "Words" },
];

export default function WordsExplorer() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const [letter, setLetter] = useState("all");

  const letters = useMemo(() => {
    return [...new Set(glossary.map((entry) => glossaryLetter(entry.term)))].sort();
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary
      .filter((entry) => {
        const hay = `${entry.term} ${entry.also?.join(" ") ?? ""} ${entry.body}`.toLowerCase();
        const matchesQuery = !q || hay.includes(q);
        const matchesKind = kind === "all" || entry.kind === kind;
        const matchesLetter =
          letter === "all" || glossaryLetter(entry.term) === letter;
        return matchesQuery && matchesKind && matchesLetter;
      })
      .sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
  }, [query, kind, letter]);

  return (
    <div>
      <label className="block">
        <span className="mb-1 block font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
          Search words and abbreviations
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Mikveh, AD, venesection…"
          className="w-full rounded-sm border border-sand bg-cream px-3 py-2 font-sans text-sm text-ink outline-none focus:border-terracotta"
        />
      </label>

      <div className="mt-4 flex flex-wrap gap-2">
        {kinds.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setKind(item.id)}
            className={`rounded-full border px-3 py-1 font-sans text-xs ${
              kind === item.id
                ? "border-olive bg-olive text-cream"
                : "border-sand text-ink-soft hover:border-gold"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        <button
          type="button"
          onClick={() => setLetter("all")}
          className={`min-w-8 rounded-sm px-2 py-1 font-sans text-xs ${
            letter === "all" ? "bg-terracotta text-cream" : "text-ink-soft hover:bg-parchment"
          }`}
        >
          All
        </button>
        {letters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLetter(item)}
            className={`min-w-8 rounded-sm px-2 py-1 font-sans text-xs ${
              letter === item ? "bg-terracotta text-cream" : "text-ink-soft hover:bg-parchment"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-4 font-sans text-xs text-ink-soft">
        {results.length} of {glossary.length} entries
      </p>

      <dl className="mt-4 divide-y divide-sand border-y border-sand">
        {results.map((entry) => (
          <div
            key={entry.term}
            className="grid gap-2 py-5 md:grid-cols-[14rem_1fr]"
          >
            <dt>
              <span className="font-display text-xl text-olive">{entry.term}</span>
              <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.18em] text-gold">
                {entry.kind === "abbreviation" ? "Abbreviation" : "Word"}
              </span>
            </dt>
            <dd>
              <p className="text-ink-soft">{entry.body}</p>
              {entry.also?.length ? (
                <p className="mt-2 font-sans text-xs text-ink-soft">
                  Also: {entry.also.join(" · ")}
                </p>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
      {results.length === 0 ? (
        <p className="py-8 text-center text-ink-soft">
          No match. Try another spelling, or choose “All.”
        </p>
      ) : null}
    </div>
  );
}
