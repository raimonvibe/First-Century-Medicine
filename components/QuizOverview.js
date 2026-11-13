"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { OliveMark } from "@/components/Ornament";
import {
  getQuizServerSnapshot,
  getQuizSnapshot,
  parseQuizStore,
  quizStatus,
  resetAllQuizzes,
  subscribeQuizzes,
} from "@/lib/quizStore";

function StatusBadge({ status, total }) {
  if (status.state === "perfect") {
    return (
      <span className="quiz-badge" data-state="perfect">
        <OliveMark className="h-5 w-5" />
        Completed · {total}/{total}
      </span>
    );
  }
  if (status.state === "progress") {
    return (
      <span className="quiz-badge" data-state="progress">
        <span aria-hidden="true">◔</span>
        In progress · {status.answered} of {total} answered
        {status.best !== null ? ` · best ${status.best}/${total}` : ""}
      </span>
    );
  }
  if (status.state === "scored") {
    return (
      <span className="quiz-badge" data-state="scored">
        <span aria-hidden="true">◑</span>
        Best score · {status.best}/{total}
      </span>
    );
  }
  return (
    <span className="quiz-badge" data-state="new">
      <span aria-hidden="true">○</span>
      Not started
    </span>
  );
}

export default function QuizOverview({ quizzes }) {
  const raw = useSyncExternalStore(subscribeQuizzes, getQuizSnapshot, getQuizServerSnapshot);
  const store = useMemo(() => parseQuizStore(raw), [raw]);

  const rows = quizzes.map((quiz) => ({
    quiz,
    status: quizStatus(store[quiz.slug], quiz.questions.length),
  }));
  const perfect = rows.filter((row) => row.status.state === "perfect").length;
  const started = rows.filter((row) => row.status.state !== "new").length;
  const points = rows.reduce((sum, row) => sum + (row.status.best ?? 0), 0);
  const maxPoints = quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0);

  const reset = () => {
    if (window.confirm("Clear all quiz progress and best scores on this device?")) {
      resetAllQuizzes();
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-6 md:px-6">
      <div className="quiz-summary" aria-live="polite">
        <p>
          <strong>{perfect}</strong> of {quizzes.length} chapters completed with every answer right ·{" "}
          <strong>{points}</strong> of {maxPoints} best-score points
        </p>
        {started > 0 ? (
          <button type="button" className="quiz-reset" onClick={reset}>
            Reset progress
          </button>
        ) : null}
      </div>

      <ul className="quiz-grid">
        {rows.map(({ quiz, status }) => (
          <li key={quiz.slug} className="quiz-tile" data-state={status.state}>
            <p className="quiz-kicker">Chapter {quiz.number}</p>
            <h2 className="quiz-tile-title">
              <Link href={`${quiz.href}#quiz`} className="quiz-tile-link">
                {quiz.title}
              </Link>
            </h2>
            <StatusBadge status={status} total={quiz.questions.length} />
            <p className="quiz-tile-meta">
              {quiz.questions.length} questions ·{" "}
              {status.state === "new"
                ? "Start quiz"
                : status.state === "progress"
                  ? "Continue"
                  : "Try again"}
              <span aria-hidden="true"> →</span>
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 font-sans text-xs leading-relaxed text-ink-soft">
        Progress is saved in this browser only. Nothing is sent anywhere.
      </p>
    </div>
  );
}
