
import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { fr } from "../locales/fr";
import { es } from "../locales/es";

export type Language = "en" | "fr" | "es";

export type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  t: Translations;
  changeLanguage: (lang: Language) => void;
  languages: { code: Language; name: string }[];
}

const translations: Record<Language, Translations> = {
  en,
  fr,
  es,
};

const availableLanguages = [
  { code: "en" as Language, name: "English" },
  { code: "fr" as Language, name: "Français" },
  { code: "es" as Language, name: "Español" },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en";
  });

  const [t, setT] = useState<Translations>(translations[language]);

  useEffect(() => {
    // Update translations when language changes
    setT(translations[language]);
    // Save language preference
    localStorage.setItem("language", language);
    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage, languages: availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
