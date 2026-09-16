(function () {
  try {
    var stored = localStorage.getItem("fcm-theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", theme);
    var color = theme === "dark" ? "#17140f" : "#fbf6ea";
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", color);
  } catch (error) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
