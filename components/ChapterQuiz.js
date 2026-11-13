"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { OliveMark } from "@/components/Ornament";
import {
  getQuizServerSnapshot,
  getQuizSnapshot,
  parseQuizStore,
  subscribeQuizzes,
  updateQuizRecord,
} from "@/lib/quizStore";

const LETTERS = ["A", "B", "C", "D"];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
      <path d="M5.5 10.4 8.6 13.4 14.6 6.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
      <path d="M6.6 6.6 13.4 13.4M13.4 6.6 6.6 13.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function scoreMessage(score, total) {
  if (score === total) return "Every answer right. Celsus would approve.";
  if (score >= total - 1) return "Nearly all right. One more look and you have it.";
  if (score >= Math.ceil(total / 2)) return "A fair grasp. The review below shows what to reread.";
  return "Worth another read. The review below points to each section.";
}

export default function ChapterQuiz({ quiz, next }) {
  const raw = useSyncExternalStore(subscribeQuizzes, getQuizSnapshot, getQuizServerSnapshot);
  const record = useMemo(() => parseQuizStore(raw)[quiz.slug] ?? {}, [raw, quiz.slug]);
  const total = quiz.questions.length;
  const current = record.current ?? { position: 0, answers: [], finished: false };
  const position = Math.min(current.position ?? 0, total - 1);
  const answers = current.answers ?? [];
  const finished = Boolean(current.finished) && answers.length === total;
  const question = quiz.questions[position];
  const chosen = answers[position];
  const answered = typeof chosen === "number";
  const correct = answered && chosen === question.answer;
  const score = answers.reduce(
    (sum, answer, index) => sum + (answer === quiz.questions[index]?.answer ? 1 : 0),
    0,
  );

  const optionRefs = useRef([]);
  const nextRef = useRef(null);
  const headingRef = useRef(null);
  const resultRef = useRef(null);
  // Only move focus after the reader acts, never on first load.
  const [focusTarget, setFocusTarget] = useState(null);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (!focusTarget) return;
    const target = {
      next: nextRef.current,
      question: headingRef.current,
      result: resultRef.current,
    }[focusTarget];
    target?.focus({ preventScroll: false });
  }, [focusTarget, position, finished]);

  const choose = (index) => {
    if (answered || finished) return;
    const isRight = index === question.answer;
    updateQuizRecord(quiz.slug, (prev) => {
      const cur = prev.current ?? { position: 0, answers: [], finished: false };
      const nextAnswers = [...(cur.answers ?? [])];
      nextAnswers[position] = index;
      return { ...prev, current: { ...cur, position, answers: nextAnswers, finished: false } };
    });
    setAnnouncement(
      `${isRight ? "Correct." : `Incorrect. The answer is ${LETTERS[question.answer]}: ${question.options[question.answer]}.`} ${question.explanation}`,
    );
    setFocusTarget("next");
  };

  const goNext = () => {
    if (!answered) return;
    if (position + 1 < total) {
      updateQuizRecord(quiz.slug, (prev) => ({
        ...prev,
        current: { ...(prev.current ?? {}), position: position + 1 },
      }));
      setAnnouncement("");
      setFocusTarget("question");
      return;
    }
    updateQuizRecord(quiz.slug, (prev) => ({
      ...prev,
      current: { ...(prev.current ?? {}), finished: true },
      last: score,
      best: Math.max(score, typeof prev.best === "number" ? prev.best : 0),
      attempts: (prev.attempts ?? 0) + 1,
    }));
    setAnnouncement(`Quiz complete. You scored ${score} out of ${total}.`);
    setFocusTarget("result");
  };

  const restart = () => {
    updateQuizRecord(quiz.slug, (prev) => ({
      ...prev,
      current: { position: 0, answers: [], finished: false },
    }));
    setAnnouncement("Quiz restarted. Question 1.");
    setFocusTarget("question");
  };

  const onOptionKeyDown = (event, index) => {
    const keys = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: question.options.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const count = question.options.length;
    const target = (keys[event.key] + count) % count;
    optionRefs.current[target]?.focus();
  };

  const missed = finished
    ? quiz.questions
        .map((item, index) => ({ item, index, given: answers[index] }))
        .filter(({ item, given }) => given !== item.answer)
    : [];
  const best = typeof record.best === "number" ? record.best : null;

  return (
    <section
      id="quiz"
      aria-labelledby={`quiz-title-${quiz.slug}`}
      className="quiz-anchor mx-auto mt-14 w-full max-w-[680px] px-4 md:px-0"
    >
      <div className="quiz-card">
        <header className="quiz-head">
          <p className="quiz-kicker">Chapter {quiz.number} · Quiz</p>
          <h2 id={`quiz-title-${quiz.slug}`} className="quiz-title">
            Check your understanding
          </h2>
          {best !== null ? (
            <p className="quiz-best">
              {best === total ? <OliveMark className="h-5 w-5" /> : null}
              Best score: {best} of {total}
            </p>
          ) : null}
        </header>

        <div role="status" aria-live="polite" className="sr-only">
          {announcement}
        </div>

        {!finished ? (
          <div>
            <p className="quiz-progress">
              Question {position + 1} of {total}
            </p>
            <div
              className="quiz-bar"
              role="progressbar"
              aria-label="Quiz progress"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={answers.filter((a) => typeof a === "number").length}
            >
              <span
                style={{ width: `${(answers.filter((a) => typeof a === "number").length / total) * 100}%` }}
              />
            </div>

            <h3 ref={headingRef} tabIndex={-1} className="quiz-question" id={`q-${question.id}`}>
              {question.question}
            </h3>

            <ol className="quiz-options" aria-labelledby={`q-${question.id}`}>
              {question.options.map((option, index) => {
                const isChosen = chosen === index;
                const isAnswer = index === question.answer;
                let state = "idle";
                if (answered && isAnswer) state = "right";
                else if (answered && isChosen) state = "wrong";
                else if (answered) state = "muted";
                return (
                  <li key={index}>
                    <button
                      ref={(el) => {
                        optionRefs.current[index] = el;
                      }}
                      type="button"
                      className="quiz-option"
                      data-state={state}
                      aria-disabled={answered || undefined}
                      aria-pressed={answered ? isChosen : undefined}
                      onClick={() => choose(index)}
                      onKeyDown={(event) => onOptionKeyDown(event, index)}
                    >
                      <span className="quiz-letter" aria-hidden="true">
                        {LETTERS[index]}
                      </span>
                      <span className="quiz-option-text">{option}</span>
                      {state === "right" ? (
                        <span className="quiz-tag">
                          <CheckIcon />
                          <span>{isChosen ? "Correct" : "Answer"}</span>
                        </span>
                      ) : null}
                      {state === "wrong" ? (
                        <span className="quiz-tag">
                          <CrossIcon />
                          <span>Your answer</span>
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ol>
            {!answered ? (
              <p className="quiz-hint">
                Choose an answer. Arrow keys move between options; Enter selects.
              </p>
            ) : (
              <div className="quiz-feedback" data-correct={correct}>
                <p className="quiz-verdict">
                  {correct ? <CheckIcon /> : <CrossIcon />}
                  {correct
                    ? "Correct."
                    : `Not quite. The answer is ${LETTERS[question.answer]}.`}
                </p>
                <p className="quiz-explanation">{question.explanation}</p>
                {question.link ? (
                  <p className="quiz-source">
                    <a href={question.link}>Reread this section</a>
                  </p>
                ) : null}
                <button ref={nextRef} type="button" className="quiz-primary" onClick={goNext}>
                  {position + 1 < total ? "Next question" : "See your score"}
                  <span aria-hidden="true"> →</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="quiz-result">
              {score === total ? <OliveMark className="h-12 w-12 shrink-0" /> : null}
              <div>
                <h3 ref={resultRef} tabIndex={-1} className="quiz-score">
                  You scored {score} of {total}
                </h3>
                <p className="quiz-message">{scoreMessage(score, total)}</p>
              </div>
            </div>

            {missed.length > 0 ? (
              <div className="quiz-review">
                <h3 className="quiz-review-title">Review: questions you missed</h3>
                <ol>
                  {missed.map(({ item, index, given }) => (
                    <li key={item.id}>
                      <p className="quiz-review-q">
                        <span className="text-gold">Q{index + 1}.</span> {item.question}
                      </p>
                      <p className="quiz-review-line" data-kind="wrong">
                        <CrossIcon />
                        <span>
                          Your answer: {typeof given === "number" ? item.options[given] : "none"}
                        </span>
                      </p>
                      <p className="quiz-review-line" data-kind="right">
                        <CheckIcon />
                        <span>Correct: {item.options[item.answer]}</span>
                      </p>
                      <p className="quiz-explanation">{item.explanation}</p>
                      {item.link ? (
                        <p className="quiz-source">
                          <a href={item.link}>Reread this section</a>
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            <div className="quiz-actions">
              <button type="button" className="quiz-secondary" onClick={restart}>
                Try again
              </button>
              {next ? (
                <Link href={next.href} className="quiz-primary">
                  Next chapter: {next.nav}
                  <span aria-hidden="true"> →</span>
                </Link>
              ) : (
                <Link href="/quizzes" className="quiz-primary">
                  All quizzes
                  <span aria-hidden="true"> →</span>
                </Link>
              )}
            </div>
          </div>
        )}

        <p className="quiz-foot">
          These questions test the history in this chapter, not medical
          knowledge. <Link href="/quizzes">All quizzes</Link>
        </p>
      </div>
    </section>
  );
}
