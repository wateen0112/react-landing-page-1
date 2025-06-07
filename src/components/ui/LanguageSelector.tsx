
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { Globe } from "lucide-react";

export const LanguageSelector: React.FC = () => {
  const { language, changeLanguage, languages, t } = useLanguage();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-10 h-10 rounded-full"
          aria-label={t.language.select}
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t.language.select}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            className={language === lang.code ? "bg-accent text-accent-foreground" : ""}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
