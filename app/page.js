import Link from "next/link";
import { chapters, site } from "@/lib/chapters";
import { Ornament } from "@/components/Ornament";
import Quote from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  path: "/",
  type: "website",
  absolute: true,
});

export default function Home() {
  const featured = chapters.filter((chapter) => chapter.group !== "Reference");
  const reference = chapters.filter((chapter) => chapter.group === "Reference");

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:pb-20 sm:pt-16 md:px-6 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.32em]">
            First-century Mediterranean healing
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-olive sm:text-5xl md:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.22em] text-terracotta">
            {site.years}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/introduction"
              className="rounded-sm bg-grove px-6 py-3 text-center font-sans text-sm uppercase tracking-[0.16em] text-foam hover:bg-wine"
            >
              Begin with the world
            </Link>
            <Link
              href="/herbs"
              className="rounded-sm border border-olive px-6 py-3 text-center font-sans text-sm uppercase tracking-[0.16em] text-olive hover:border-terracotta hover:text-terracotta"
            >
              Open the herbal
            </Link>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft sm:mt-10 sm:text-lg md:text-xl">
            A twelve-chapter course — plus timeline, words, and sources —
            on how people in Jesus’s world explained illness, mixed herbs,
            opened veins, set bones, washed for purity, and prayed for
            healing.
          </p>
          <div className="mt-8">
            <Ornament />
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
              <h2 className="mt-2 font-display text-xl text-olive group-hover:text-terracotta sm:text-2xl">
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
              className="border border-olive/20 bg-grove px-5 py-6 text-foam"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
                {chapter.nav}
              </p>
              <p className="mt-2 font-display text-xl sm:text-2xl">{chapter.title}</p>
              <p className="mt-2 text-sm text-foam/80">{chapter.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
