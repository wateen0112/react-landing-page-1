
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useLanguage } from "@/contexts/LanguageContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full"
      aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
      <span className="sr-only">
        {theme === 'dark' ? t.theme.light : t.theme.dark}
      </span>
    </Button>
  );
};
