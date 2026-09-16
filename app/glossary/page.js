import { Article } from "@/components/Article";
import { glossary } from "@/lib/glossary";

export const metadata = {
  title: "Glossary",
  description:
    "Humors, venesection, mikveh, materia medica, and other first-century medical terms.",
};

export default function Page() {
  return (
    <Article slug="glossary">
      <p>
        A short lexicon for reading the chapters — and the ancient writers
        behind them — without stopping to hunt a footnote.
      </p>
      <dl className="mt-8 divide-y divide-sand border-y border-sand">
        {glossary.map((entry) => (
          <div key={entry.term} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr]">
            <dt className="font-display text-xl text-olive">{entry.term}</dt>
            <dd className="text-ink-soft">{entry.body}</dd>
          </div>
        ))}
      </dl>
    </Article>
  );
}
