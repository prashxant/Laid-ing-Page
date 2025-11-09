'use client'
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState< "light" | "dark">("light")

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange =  (e : MediaQueryListEvent) =>{
      setSystemTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener('change',handleChange)

    return () => mediaQuery.removeEventListener('change',handleChange)
  },[])

  const SWITCH = () => {
    switch(theme){

      case "light":{
        setTheme("dark");
        return
      }

      case "dark":{
        setTheme("light")
        return
      }

      case "system":{
        setTheme(systemTheme === "light" ? "dark" : "light")
        return
      }
      default:{
        return;
      }
    }
  };

  return (
    <button
      onClick={SWITCH}
      className="size-4 relative flex items-center justify-center"
    >
      <Sun
        size={14}
        className="absolute inset-0 rotate-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0"
      />

      <Moon
        size={14}
        className="absolute inset-0 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};
