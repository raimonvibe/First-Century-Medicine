import { Article } from "@/components/Article";
import { timeline } from "@/lib/timeline";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "A Medical Timeline",
  description:
    "From Egyptian pharmacy and Hippocrates to Celsus, Jesus, Dioscorides, and Galen: a timeline of medicine around the first century.",
  path: "/timeline",
});

export default function Page() {
  return (
    <Article slug="timeline">
      <p>
        Jesus’s lifetime sits in the middle of a long conversation, not at
        the invention of medicine and not at Galen’s later system. Scroll
        the century-marks as a single story of texts, trade, and bodies.
      </p>
      <ol className="relative mt-10 border-l border-gold pl-6 sm:pl-8">
        {timeline.map((event) => (
          <li key={event.year} className="mb-10">
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-terracotta" />
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
              {event.year}
            </p>
            <h2 className="!mt-1">{event.title}</h2>
            <p>{event.body}</p>
          </li>
        ))}
      </ol>
    </Article>
  );
}
