"use client";

import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      <FaMoon className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <FaSun className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
