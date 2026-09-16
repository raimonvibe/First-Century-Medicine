"use client";

import { useEffect, useState } from "react";
import { applyTheme, persistTheme, readTheme, THEME_KEY } from "@/lib/theme";

function SunMark() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <circle cx="10" cy="10" r="3.2" fill="currentColor" />
      <path
        d="M10 2.2v1.8M10 16v1.8M2.2 10h1.8M16 10h1.8M4.4 4.4l1.3 1.3M14.3 14.3l1.3 1.3M4.4 15.6l1.3-1.3M14.3 5.7l1.3-1.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LampMark() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        d="M14.8 2.8c1.1 1.5 1 3.1-.2 4.2-1-1.2-.8-2.7.2-4.2Z"
        fill="currentColor"
      />
      <path
        d="M3.6 11.4c0-2.2 2.5-3.7 6.4-3.7 2.1 0 3.6.5 4.8 1.3l1.8-.9.7 1.5-1.3.6c.5.6.8 1.4.8 2.3 0 2.1-2.6 3.3-6.8 3.3s-6.4-1.2-6.4-3.4Z"
        fill="currentColor"
      />
      <path
        d="M7.2 16.4h5.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      try {
        if (!window.localStorage.getItem(THEME_KEY)) {
          const next = media.matches ? "dark" : "light";
          setTheme(next);
          applyTheme(next);
        }
      } catch {
        /* ignore */
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const choose = (next) => {
    setTheme(next);
    persistTheme(next);
  };

  return (
    <div
      className="theme-switch"
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        aria-pressed={theme === "light"}
        aria-label="Day theme"
        title="Day — parchment and daylight"
        onClick={() => choose("light")}
      >
        <SunMark />
        <span>Day</span>
      </button>
      <button
        type="button"
        aria-pressed={theme === "dark"}
        aria-label="Night theme, oil lamp"
        title="Night — an oil lamp, the usual first-century light after sunset"
        onClick={() => choose("dark")}
      >
        <LampMark />
        <span>Night</span>
      </button>
    </div>
  );
}
