// ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ variant = "fixed", className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const base =
    "rounded-full transition-colors duration-300 focus:outline-none";

  const fixedClasses =
    // hidden on mobile, fixed button on desktop (unchanged behavior)
    "hidden md:flex fixed top-5 right-5 z-50 p-2";

  const inlineClasses =
    // visible on mobile, inline button (sits next to hamburger)
    "md:hidden inline-flex p-2 z-50";

  return (
    <button
      onClick={toggleTheme}
      className={cn(base, variant === "fixed" ? fixedClasses : inlineClasses, className)}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
