
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // Check if theme is saved in localStorage
      const savedTheme = localStorage.getItem("theme");
      // Check user's system preference if no saved theme
      if (!savedTheme) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return (savedTheme as Theme) || "light";
    }
    return "light"; // Default theme
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Update localStorage when theme changes
      localStorage.setItem("theme", theme);
      
      // Update document class for CSS
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
 