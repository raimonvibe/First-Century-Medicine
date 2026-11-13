import QuizOverview from "@/components/QuizOverview";
import { Ornament } from "@/components/Ornament";
import { quizzes } from "@/lib/quizzes";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Chapter Quizzes",
  description:
    "Five questions for each of the twelve chapters on first-century medicine: physicians, Judea, the humors, bloodletting, baths, herbs, oils, food, surgery, faith, and cases.",
  path: "/quizzes",
});

export default function Page() {
  return (
    <>
      <header className="mx-auto max-w-3xl px-4 pb-8 pt-8 text-center sm:pt-12 md:px-6 md:pt-16">
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.28em]">
          Test yourself
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-olive sm:text-4xl md:text-5xl">
          Chapter Quizzes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Five questions per chapter, drawn only from that chapter. Answer
          all five correctly to earn the olive sprig.
        </p>
        <div className="mt-8">
          <Ornament />
        </div>
      </header>
      <QuizOverview quizzes={quizzes} />
    </>
  );
}
