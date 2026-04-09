"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`transition-colors duration-300 cursor-pointer ${className}`}
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {resolvedTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
