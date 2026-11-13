// Quiz progress and best scores, kept in localStorage under one key.
// Shape: { [chapterSlug]: { current: { position, answers[], finished } | null,
//                            best, last, attempts } }
// Components read it with useSyncExternalStore, so the server render (and
// the first client render) see "no progress" and then update without a
// hydration mismatch.

const KEY = "fcm-quiz-v1";
const EVENT = "fcm-quiz-change";

// Private mode or blocked storage: keep progress for this page view only.
let memory = "{}";

function readRaw() {
  try {
    return window.localStorage.getItem(KEY) ?? memory;
  } catch {
    return memory;
  }
}

function writeRaw(value) {
  memory = value;
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* private mode: memory copy only */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function subscribeQuizzes(callback) {
  const onStorage = (event) => {
    if (event.key === null || event.key === KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(EVENT, callback);
  };
}

export function getQuizSnapshot() {
  return readRaw();
}

export function getQuizServerSnapshot() {
  return null;
}

export function parseQuizStore(raw) {
  if (!raw) return {};
  try {
    const value = JSON.parse(raw);
    return value && typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}

export function updateQuizRecord(slug, update) {
  const all = parseQuizStore(readRaw());
  all[slug] = update(all[slug] ?? {});
  writeRaw(JSON.stringify(all));
}

export function resetAllQuizzes() {
  writeRaw("{}");
}

export function quizStatus(record, total) {
  if (!record) return { state: "new" };
  const best = typeof record.best === "number" ? record.best : null;
  const current = record.current;
  if (best === total) return { state: "perfect", best };
  if (current && !current.finished && current.answers?.length > 0) {
    return { state: "progress", best, answered: current.answers.length };
  }
  if (best !== null) return { state: "scored", best };
  return { state: "new" };
}
