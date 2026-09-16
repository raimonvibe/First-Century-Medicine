export const THEME_KEY = "fcm-theme";
export const THEME_COLORS = {
  light: "#fbf6ea",
  dark: "#17140f",
};

export function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function readTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* private mode */
  }
  return systemTheme();
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme] || THEME_COLORS.light);
}

export function persistTheme(theme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* private mode */
  }
  applyTheme(theme);
}
