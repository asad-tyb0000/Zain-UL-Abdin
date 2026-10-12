"use client";

import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button className="icon-btn" onClick={toggle} aria-label="Toggle dark mode" title="Toggle theme">
      <SunIcon className="show-dark" size={18} />
      <MoonIcon className="show-light" size={18} />
    </button>
  );
}
