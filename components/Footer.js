import Link from "next/link";
import { chapters, site } from "@/lib/chapters";
import { OliveMark, Ornament } from "@/components/Ornament";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sand bg-grove text-foam">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <OliveMark className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
            <div className="min-w-0">
              <p className="font-display text-xl sm:text-2xl">{site.name}</p>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.12em] text-sage sm:text-xs sm:tracking-[0.2em]">
                {site.tagline} · {site.years}
              </p>
            </div>
          </div>
          <p className="max-w-md font-sans text-sm leading-relaxed text-foam/80">
            Historical education only. These pages describe first-century
            practices. They are not medical advice, and none of the treatments
            should be tried.
          </p>
        </div>
        <div className="my-8">
          <Ornament className="text-gold/70" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {chapters.map((chapter) => (
            <Link
              key={chapter.slug}
              href={chapter.href}
              className="font-sans text-sm text-sage hover:text-foam"
            >
              {chapter.nav}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
