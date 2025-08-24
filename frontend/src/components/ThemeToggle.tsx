"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-md border border-[color:var(--border)] px-3 py-2 text-sm font-medium hover:bg-[color:var(--muted)] transition"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
