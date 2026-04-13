"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { ENABLE_THEME_SWITCHING } from "@/config/features";

type Theme = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolvedTheme: "dark",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  const applyTheme = useCallback((t: Theme) => {
    if (!ENABLE_THEME_SWITCHING) {
      setResolvedTheme("dark");
      document.documentElement.classList.add("dark");
      return;
    }
    const resolved = t === "system" ? getSystemTheme() : t;
    setResolvedTheme(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  const setTheme = useCallback(
    (t: Theme) => {
      if (!ENABLE_THEME_SWITCHING) return;
      setThemeState(t);
      if (t === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", t);
      }
      applyTheme(t);
    },
    [applyTheme],
  );

  useEffect(() => {
    if (!ENABLE_THEME_SWITCHING) {
      document.documentElement.classList.add("dark");
      return;
    }
    const stored = localStorage.getItem("theme");
    const initial: Theme =
      stored === "light" || stored === "dark" ? stored : "system";
    setThemeState(initial);
    applyTheme(initial);
  }, [applyTheme]);

  useEffect(() => {
    if (!ENABLE_THEME_SWITCHING) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") applyTheme("system");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
