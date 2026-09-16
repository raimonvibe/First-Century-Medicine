import Link from "next/link";
import { chapters, site } from "@/lib/chapters";
import { Ornament } from "@/components/Ornament";
import Quote from "@/components/Quote";

export default function Home() {
  const featured = chapters.filter((chapter) => chapter.group !== "Reference");
  const reference = chapters.filter((chapter) => chapter.group === "Reference");

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-20 pt-16 md:px-6 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-gold">
            First-century Mediterranean healing
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-olive md:text-7xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            A twelve-chapter course — plus timeline, glossary, and sources —
            on how people in Jesus’s world explained illness, mixed herbs,
            opened veins, set bones, washed for purity, and prayed for
            healing.
          </p>
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.22em] text-terracotta">
            {site.years}
          </p>
          <div className="mt-8">
            <Ornament />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/introduction"
              className="rounded-sm bg-olive px-6 py-3 font-sans text-sm uppercase tracking-[0.16em] text-cream hover:bg-wine"
            >
              Begin with the world
            </Link>
            <Link
              href="/herbs"
              className="rounded-sm border border-olive px-6 py-3 font-sans text-sm uppercase tracking-[0.16em] text-olive hover:border-terracotta hover:text-terracotta"
            >
              Open the herbal
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 md:px-6">
        <Quote cite="Sirach 38:1, 4 — still read in Second Temple Judaism">
          Honor physicians for their services, for the Lord created them. The
          Lord created medicines out of the earth, and the sensible will not
          despise them.
        </Quote>
        <p className="text-lg leading-relaxed text-ink-soft">
          This site follows that double vision. Greek physicians argued about
          humors. Roman writers described baths and surgery. Judean estates
          sold balsam to the empire. Households reached for garlic, oil, and
          honey. Priests inspected skin. Jesus healed in a landscape that
          already had doctors.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 pb-8 md:px-6">
        <p className="mb-6 text-center font-sans text-xs uppercase tracking-[0.28em] text-gold">
          The course
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((chapter) => (
            <Link
              key={chapter.slug}
              href={chapter.href}
              className="group border border-sand bg-cream/70 p-5 transition hover:border-gold hover:bg-parchment/80"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
                {chapter.number} · {chapter.group}
              </p>
              <h2 className="mt-2 font-display text-2xl text-olive group-hover:text-terracotta">
                {chapter.nav}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {chapter.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {reference.map((chapter) => (
            <Link
              key={chapter.slug}
              href={chapter.href}
              className="border border-olive/20 bg-olive px-5 py-6 text-cream"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
                {chapter.nav}
              </p>
              <p className="mt-2 font-display text-2xl">{chapter.title}</p>
              <p className="mt-2 text-sm text-parchment">{chapter.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
