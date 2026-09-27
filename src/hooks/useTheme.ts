import { useEffect, useState } from "react";
import type { Theme } from "../types";

const storageKey = "mf-theme";

function initialTheme(): Theme {
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") return stored;
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#1d1e1c" : "#f5f4f0");
  }, [theme]);

  return { theme, toggleTheme: () => setTheme((current) => current === "dark" ? "light" : "dark") };
}
