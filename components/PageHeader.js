import Link from "next/link";
import { getChapter, getNeighbors } from "@/lib/chapters";
import { Ornament } from "@/components/Ornament";

export default function PageHeader({ slug }) {
  const chapter = getChapter(slug);
  if (!chapter) return null;

  return (
    <header className="mx-auto max-w-3xl px-4 pb-8 pt-12 text-center md:px-6 md:pt-16">
      <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold">
        Chapter {chapter.number}
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-olive md:text-5xl">
        {chapter.title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {chapter.summary}
      </p>
      <div className="mt-8">
        <Ornament />
      </div>
    </header>
  );
}

export function ChapterNav({ slug }) {
  const { prev, next } = getNeighbors(slug);

  return (
    <nav
      aria-label="Adjacent chapters"
      className="mx-auto mt-16 flex max-w-3xl flex-col gap-4 border-t border-sand px-4 py-10 sm:flex-row sm:justify-between md:px-6"
    >
      {prev ? (
        <Link href={prev.href} className="group max-w-xs">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
            Previous
          </p>
          <p className="font-display text-xl text-olive group-hover:text-terracotta">
            {prev.nav}
          </p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="group max-w-xs sm:text-right">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
            Next
          </p>
          <p className="font-display text-xl text-olive group-hover:text-terracotta">
            {next.nav}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
