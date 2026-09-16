export const LANGUAGE_LABELS = {
  ar: "Arabic",
  ca: "Catalan",
  cs: "Czech",
  da: "Danish",
  de: "German",
  el: "Greek",
  en: "English",
  es: "Spanish",
  fi: "Finnish",
  fr: "French",
  he: "Hebrew",
  hi: "Hindi",
  hu: "Hungarian",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  nl: "Dutch",
  no: "Norwegian",
  pl: "Polish",
  pt: "Portuguese",
  ro: "Romanian",
  ru: "Russian",
  sv: "Swedish",
  th: "Thai",
  tr: "Turkish",
  uk: "Ukrainian",
  vi: "Vietnamese",
  zh: "Chinese",
};

export function getPlatform() {
  if (typeof navigator === "undefined") {
    return { ios: false, android: false, chrome: false };
  }
  const ua = navigator.userAgent || "";
  const ios =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(ua);
  const chrome = /Chrome|CriOS|Edg/i.test(ua) && !/OPR/i.test(ua);
  return { ios, android, chrome };
}

export function isSpeechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function langPrefix(code) {
  return (code || "en").toLowerCase().split("-")[0];
}

function voiceScore(voice, wanted) {
  const name = voice.name.toLowerCase();
  let score = 0;
  if (name.includes("compact")) score -= 12;
  if (name.includes("siri")) score += 10;
  if (name.includes("premium") || name.includes("enhanced") || name.includes("neural")) {
    score += 8;
  }
  if (voice.localService) score += 5;
  if (name.includes("google")) score += 3;
  if (voice.lang.toLowerCase() === wanted.toLowerCase()) score += 4;
  if (voice.default) score += 1;
  return score;
}

export function pickVoice(voices, lang) {
  const prefix = langPrefix(lang);
  const matches = voices.filter((voice) => langPrefix(voice.lang) === prefix);
  const pool = matches.length ? matches : voices.filter((voice) => langPrefix(voice.lang) === "en");
  if (!pool.length) return null;
  return [...pool].sort((a, b) => voiceScore(b, lang) - voiceScore(a, lang))[0];
}

export const OFFERED_LANGUAGE_CODES = [
  "ar",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  "en",
  "es",
  "fi",
  "fr",
  "he",
  "hi",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "nl",
  "no",
  "pl",
  "pt",
  "ro",
  "ru",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh",
];

export function languagesFromVoices(voices) {
  const seen = new Set();
  const list = [];
  for (const voice of voices) {
    const prefix = langPrefix(voice.lang);
    if (seen.has(prefix)) continue;
    seen.add(prefix);
    list.push({
      code: prefix,
      label: LANGUAGE_LABELS[prefix] || voice.lang,
      hasVoice: true,
    });
  }
  if (!seen.has("en")) list.unshift({ code: "en", label: "English", hasVoice: false });
  return list.sort((a, b) => a.label.localeCompare(b.label));
}

export function offeredLanguages(voices) {
  const installed = new Set(
    (voices || []).map((voice) => langPrefix(voice.lang)),
  );
  const list = OFFERED_LANGUAGE_CODES.map((code) => ({
    code,
    label: LANGUAGE_LABELS[code],
    hasVoice: installed.has(code),
  }));
  for (const voice of voices || []) {
    const code = langPrefix(voice.lang);
    if (!list.some((row) => row.code === code)) {
      list.push({
        code,
        label: LANGUAGE_LABELS[code] || voice.lang,
        hasVoice: true,
      });
    }
  }
  return list.sort((a, b) => a.label.localeCompare(b.label));
}

export function languageHasVoice(voices, lang) {
  const prefix = langPrefix(lang);
  return (voices || []).some((voice) => langPrefix(voice.lang) === prefix);
}

export function chunkText(text, max = 160) {
  const parts = text.match(/[^.!?…;:]+[.!?…;:]?\s*/g) || [text];
  const chunks = [];
  let buffer = "";

  const pushWords = (value) => {
    const words = value.split(/\s+/);
    let line = "";
    for (const word of words) {
      if (!word) continue;
      const next = line ? `${line} ${word}` : word;
      if (next.length <= max) line = next;
      else {
        if (line) chunks.push(line);
        line = word.length > max ? word.slice(0, max) : word;
      }
    }
    if (line) chunks.push(line);
  };

  for (const part of parts) {
    const piece = part.trim();
    if (!piece) continue;
    const combined = buffer ? `${buffer} ${piece}` : piece;
    if (combined.length <= max) {
      buffer = combined;
    } else {
      if (buffer) chunks.push(buffer);
      buffer = "";
      if (piece.length <= max) buffer = piece;
      else pushWords(piece);
    }
  }
  if (buffer) chunks.push(buffer);
  return chunks;
}

export function extractSpeechBlocks() {
  if (typeof document === "undefined") return [];
  const roots = [
    ...document.querySelectorAll("[data-speech-include]"),
    document.querySelector("main"),
  ].filter(Boolean);

  const selector = "h1, h2, h3, p, li, dt, dd, blockquote, article";
  const nodes = roots.flatMap((root) => {
    if (root.matches?.(selector)) return [root, ...root.querySelectorAll(selector)];
    return [...root.querySelectorAll(selector)];
  });
  const blocks = [];
  const seen = new Set();

  for (const el of nodes) {
    if (seen.has(el)) continue;
    seen.add(el);
    if (el.closest("[data-speech-player], nav, [aria-hidden='true']")) continue;
    if (nodes.some((other) => other !== el && other.contains(el))) continue;
    const text = (el.innerText || "").replace(/\s+/g, " ").trim();
    if (text.length < 2) continue;
    blocks.push({ el, text });
  }
  return blocks;
}

export function speechChunkLimit() {
  const { ios, android, chrome } = getPlatform();
  if (chrome && !ios && !android) return 140;
  return 170;
}

export function blocksToChunks(blocks) {
  const max = speechChunkLimit();
  const chunks = [];
  blocks.forEach((block, blockIndex) => {
    chunkText(block.text, max).forEach((text) => {
      chunks.push({ text, el: block.el, blockIndex });
    });
  });
  return chunks;
}

export function primeSpeechEngine() {
  if (!isSpeechSupported()) return;
  try {
    window.speechSynthesis.resume();
  } catch {
    /* Android/iOS may no-op resume */
  }
  const utterance = new SpeechSynthesisUtterance(".");
  utterance.volume = 0.01;
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
}

function withTimeout(promise, ms, label = "timeout") {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(label)), ms);
    }),
  ]);
}

async function translateWithNative(text, target) {
  if (typeof window === "undefined") return null;
  const TranslatorAPI = window.Translator;
  if (!TranslatorAPI?.create) return null;
  try {
    if (typeof TranslatorAPI.availability === "function") {
      const status = await Promise.race([
        TranslatorAPI.availability({
          sourceLanguage: "en",
          targetLanguage: target,
        }),
        new Promise((resolve) => setTimeout(() => resolve("unavailable"), 700)),
      ]);
      if (status !== "available") return null;
    }
    const translator = await withTimeout(
      TranslatorAPI.create({
        sourceLanguage: "en",
        targetLanguage: target,
      }),
      1800,
    );
    return await withTimeout(translator.translate(text), 2500);
  } catch {
    return null;
  }
}

async function translateWithMemory(text, target) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${target}`;
  const response = await withTimeout(fetch(url), 5000);
  if (!response.ok) throw new Error("translate failed");
  const data = await response.json();
  const translated = data?.responseData?.translatedText;
  if (!translated || /INVALID/.test(translated)) throw new Error("empty translation");
  return translated;
}

const translationCache = new Map();

export function peekTranslation(text, target) {
  if (!target || target === "en") return text;
  return translationCache.get(`${target}:${text}`) || null;
}

export async function translateChunk(text, target) {
  if (!target || target === "en") return text;
  const key = `${target}:${text}`;
  if (translationCache.has(key)) return translationCache.get(key);

  let translated = await translateWithNative(text, target);
  if (!translated) {
    translated = await translateWithMemory(text, target);
  }
  translationCache.set(key, translated);
  return translated;
}
