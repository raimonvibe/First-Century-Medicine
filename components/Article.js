import PageHeader, { ChapterNav } from "@/components/PageHeader";
import ChapterQuiz from "@/components/ChapterQuiz";
import { getNextQuiz, getQuiz } from "@/lib/quizzes";

export function Article({ slug, children }) {
  const quiz = getQuiz(slug);
  const next = quiz ? getNextQuiz(slug) : null;

  return (
    <>
      <PageHeader slug={slug} />
      <article
        id="content"
        className="prose-page mx-auto w-full min-w-0 max-w-3xl px-4 pb-4 md:px-6"
      >
        {children}
      </article>
      {quiz ? (
        <ChapterQuiz
          quiz={quiz}
          next={next ? { href: next.href, nav: next.nav } : null}
        />
      ) : null}
      <ChapterNav slug={slug} />
    </>
  );
}
