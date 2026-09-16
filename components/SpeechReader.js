"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  blocksToChunks,
  extractSpeechBlocks,
  getPlatform,
  isSpeechSupported,
  languageHasVoice,
  langPrefix,
  offeredLanguages,
  peekTranslation,
  pickVoice,
  primeSpeechEngine,
  translateChunk,
} from "@/lib/speech";

function clearHighlight() {
  document.querySelectorAll(".speech-current").forEach((node) => {
    node.classList.remove("speech-current");
  });
}

function highlight(el) {
  clearHighlight();
  if (!el) return;
  el.classList.add("speech-current");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "center",
  });
}

export default function SpeechReader() {
  const pathname = usePathname();
  const [supported, setSupported] = useState(true);
  const [status, setStatus] = useState("idle");
  const [lang, setLang] = useState("en");
  const [rate, setRate] = useState(1);
  const [languages, setLanguages] = useState(() => offeredLanguages([]));
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [platform, setPlatform] = useState({
    ios: false,
    android: false,
    chrome: false,
  });

  const chunksRef = useRef([]);
  const indexRef = useRef(0);
  const runIdRef = useRef(0);
  const pausedRef = useRef(false);
  const langRef = useRef("en");
  const rateRef = useRef(1);
  const voicesRef = useRef([]);
  const platformRef = useRef(platform);
  const watchdogRef = useRef(0);

  langRef.current = lang;
  rateRef.current = rate;
  platformRef.current = platform;

  const stopEngine = useCallback((resetIndex) => {
    pausedRef.current = true;
    runIdRef.current += 1;
    window.clearTimeout(watchdogRef.current);
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    clearHighlight();
    setStatus("idle");
    setMessage("");
    if (resetIndex) {
      indexRef.current = 0;
      setProgress({ current: 0, total: chunksRef.current.length });
    }
  }, []);

  const speakFrom = useCallback(async (index, run) => {
    if (run !== runIdRef.current) return;
    const chunks = chunksRef.current;
    if (index >= chunks.length) {
      setStatus("idle");
      clearHighlight();
      indexRef.current = 0;
      return;
    }

    const chunk = chunks[index];
    indexRef.current = index;
    setProgress({ current: index + 1, total: chunks.length });
    highlight(chunk.el);

    let text = chunk.text;
    if (langRef.current !== "en") {
      const cached = peekTranslation(chunk.text, langRef.current);
      if (cached) {
        text = cached;
      } else {
        setStatus("translating");
        try {
          text = await translateChunk(chunk.text, langRef.current);
          setMessage("");
        } catch {
          setMessage(
            "Translation unavailable for this passage — reading English.",
          );
          text = chunk.text;
        }
        if (run !== runIdRef.current || pausedRef.current) return;
      }
    }

    setStatus("playing");
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickVoice(voicesRef.current, langRef.current);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = langRef.current;
    }
    utterance.rate = rateRef.current;

    const delay = platformRef.current.ios ? 130 : 50;
    const next = () => {
      if (run !== runIdRef.current || pausedRef.current) return;
      window.setTimeout(() => {
        speakFrom(index + 1, run);
      }, delay);
    };

    window.clearTimeout(watchdogRef.current);
    const expected =
      Math.ceil((text.length / (14 * Math.max(rateRef.current, 0.5))) * 1000) +
      2500;
    watchdogRef.current = window.setTimeout(() => {
      if (run !== runIdRef.current || pausedRef.current) return;
      if (!window.speechSynthesis.speaking) next();
    }, expected);

    utterance.onend = () => {
      window.clearTimeout(watchdogRef.current);
      next();
    };
    utterance.onerror = (event) => {
      if (event.error === "interrupted" || event.error === "canceled") return;
      window.clearTimeout(watchdogRef.current);
      next();
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const play = useCallback(
    (fromPause) => {
      if (!isSpeechSupported()) return;
      pausedRef.current = false;

      if (!fromPause) {
        const chunks = blocksToChunks(extractSpeechBlocks());
        chunksRef.current = chunks;
        indexRef.current = 0;
        if (!chunks.length) {
          setMessage("No readable text on this page.");
          return;
        }
      }

      const run = ++runIdRef.current;
      primeSpeechEngine();
      setStatus(langRef.current === "en" ? "playing" : "translating");
      speakFrom(indexRef.current, run);
    },
    [speakFrom],
  );

  const pause = useCallback(() => {
    pausedRef.current = true;
    runIdRef.current += 1;
    window.clearTimeout(watchdogRef.current);
    window.speechSynthesis.cancel();
    setStatus("paused");
  }, []);

  const skip = useCallback(() => {
    if (status === "idle") return;
    pausedRef.current = false;
    runIdRef.current += 1;
    window.clearTimeout(watchdogRef.current);
    window.speechSynthesis.cancel();
    indexRef.current += 1;
    primeSpeechEngine();
    const run = runIdRef.current;
    setStatus(langRef.current === "en" ? "playing" : "translating");
    speakFrom(indexRef.current, run);
  }, [speakFrom, status]);

  const changeLanguage = useCallback(
    (nextLang) => {
      const next = langPrefix(nextLang);
      langRef.current = next;
      setLang(next);
      if (!languageHasVoice(voicesRef.current, next) && next !== "en") {
        setMessage(
          "No installed voice for this language. Add one in device settings; the English voice will try the translation until then.",
        );
      } else {
        setMessage("");
      }
      if (status === "playing" || status === "translating") {
        pausedRef.current = false;
        runIdRef.current += 1;
        window.clearTimeout(watchdogRef.current);
        window.speechSynthesis.cancel();
        primeSpeechEngine();
        const run = runIdRef.current;
        setStatus(next === "en" ? "playing" : "translating");
        speakFrom(indexRef.current, run);
      }
    },
    [speakFrom, status],
  );

  useEffect(() => {
    const found = getPlatform();
    platformRef.current = found;
    setPlatform(found);
    if (!isSpeechSupported()) {
      setSupported(false);
      return;
    }
    const loadVoices = () => {
      const list = window.speechSynthesis.getVoices();
      voicesRef.current = list;
      setLanguages(offeredLanguages(list));
    };
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    const poll = window.setInterval(loadVoices, 300);
    const stopPoll = window.setTimeout(() => window.clearInterval(poll), 5000);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.clearInterval(poll);
      window.clearTimeout(stopPoll);
    };
  }, []);

  useEffect(() => {
    stopEngine(true);
  }, [pathname, stopEngine]);

  useEffect(() => {
    if (lang === "en") return;
    const chunks = blocksToChunks(extractSpeechBlocks()).slice(0, 8);
    chunks.forEach((chunk) => {
      translateChunk(chunk.text, lang).catch(() => {});
    });
  }, [lang, pathname]);

  useEffect(() => {
    if (status !== "playing") return;
    const { ios, android, chrome } = platformRef.current;
    if (ios || android || !chrome) return;
    const id = window.setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 11000);
    return () => window.clearInterval(id);
  }, [status]);

  useEffect(() => {
    return () => {
      window.clearTimeout(watchdogRef.current);
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      clearHighlight();
    };
  }, []);

  const busy = status === "playing" || status === "translating";

  return (
    <div
      data-speech-player="true"
      className="speech-dock"
      role="region"
      aria-label="Page reader"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:px-6">
        <div className="flex flex-wrap items-center gap-2">
          {!supported ? (
            <p className="font-sans text-sm text-ink-soft">
              This browser cannot read pages aloud. On iPhone use Safari; on
              Android use Chrome.
            </p>
          ) : (
            <>
              {status === "paused" ? (
                <button
                  type="button"
                  className="speech-btn speech-btn-primary"
                  onClick={() => play(true)}
                >
                  Resume
                </button>
              ) : (
                <button
                  type="button"
                  className="speech-btn speech-btn-primary"
                  onClick={() => (busy ? pause() : play(false))}
                >
                  {status === "translating"
                    ? "Translating…"
                    : status === "playing"
                      ? "Pause"
                      : "Listen"}
                </button>
              )}
              <button
                type="button"
                className="speech-btn"
                onClick={() => stopEngine(true)}
                disabled={status === "idle"}
              >
                Stop
              </button>
              <button
                type="button"
                className="speech-btn"
                onClick={skip}
                disabled={status === "idle"}
              >
                Next
              </button>
              <label className="speech-field">
                <span>Language</span>
                <select
                  value={lang}
                  onChange={(event) => changeLanguage(event.target.value)}
                >
                  {languages.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="speech-field">
                <span>Speed</span>
                <select
                  value={String(rate)}
                  onChange={(event) => setRate(Number(event.target.value))}
                >
                  <option value="0.8">0.8×</option>
                  <option value="1">1×</option>
                  <option value="1.15">1.15×</option>
                  <option value="1.3">1.3×</option>
                </select>
              </label>
              <button
                type="button"
                className="speech-btn"
                onClick={() => setShowHelp((value) => !value)}
                aria-expanded={showHelp}
              >
                iPhone / Android
              </button>
            </>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 font-sans text-xs text-ink-soft">
          <p aria-live="polite">
            {status === "idle"
              ? "Reads this page with your device voices — not Apple Speak Screen."
              : status === "translating"
                ? "Translating the next passage…"
                : status === "paused"
                  ? `Paused at passage ${progress.current} of ${progress.total}`
                  : `Passage ${progress.current} of ${progress.total}`}
          </p>
          {message ? <p className="text-wine">{message}</p> : null}
        </div>
        {showHelp ? (
          <div className="border border-sand bg-cream px-3 py-3 font-sans text-xs leading-relaxed text-ink-soft">
            {platform.ios ? (
              <p>
                iPhone: this full-width bar uses Safari’s Web Speech API and
                Siri voices, so you do not get the round Speak Screen bubble.
                Use Safari, not Chrome. Install extra languages in Settings →
                Accessibility → Spoken Content → Voices (prefer Enhanced, not
                Compact). The first tap must start listening. Pause remembers
                your place, because iOS pause is unreliable.
              </p>
            ) : platform.android ? (
              <p>
                Android: Chrome or Samsung Internet speaks through the system
                text-to-speech engine. Pause is stop-and-hold, because Android
                treats pause as cancel. Add voices in Settings → Accessibility
                → Text-to-speech output.
              </p>
            ) : (
              <p>
                Desktop browsers speak through installed voices. Chrome is
                limited to short passages, so this player feeds the page in
                small chunks. On iPhone use Safari with this bar — not the
                floating Speak Screen control. On Android use Chrome.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
