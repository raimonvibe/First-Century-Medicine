import ch01 from "@/data/quizzes/chapter-01.json";
import ch02 from "@/data/quizzes/chapter-02.json";
import ch03 from "@/data/quizzes/chapter-03.json";
import ch04 from "@/data/quizzes/chapter-04.json";
import ch05 from "@/data/quizzes/chapter-05.json";
import ch06 from "@/data/quizzes/chapter-06.json";
import ch07 from "@/data/quizzes/chapter-07.json";
import ch08 from "@/data/quizzes/chapter-08.json";
import ch09 from "@/data/quizzes/chapter-09.json";
import ch10 from "@/data/quizzes/chapter-10.json";
import ch11 from "@/data/quizzes/chapter-11.json";
import ch12 from "@/data/quizzes/chapter-12.json";
import { chapters } from "@/lib/chapters";

// One quiz per numbered chapter. Each JSON file holds:
// { chapter, number, questions: [{ id, question, options[4], answer, explanation, link? }] }
const files = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10, ch11, ch12];

export const quizzes = files.map((file) => {
  const chapter = chapters.find((item) => item.slug === file.chapter);
  return {
    slug: file.chapter,
    number: file.number,
    title: chapter?.title ?? file.chapter,
    nav: chapter?.nav ?? file.chapter,
    href: chapter?.href ?? `/${file.chapter}`,
    questions: file.questions,
  };
});

export function getQuiz(slug) {
  return quizzes.find((quiz) => quiz.slug === slug) ?? null;
}

export function getNextQuiz(slug) {
  const index = quizzes.findIndex((quiz) => quiz.slug === slug);
  return index >= 0 && index < quizzes.length - 1 ? quizzes[index + 1] : null;
}
