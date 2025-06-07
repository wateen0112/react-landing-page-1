
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="landing-section flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-secondary/30 dark:bg-transparent pt-16 pb-20">
      {/* Added data-aos="fade-right" */}
      <div data-aos="fade-right" className="flex flex-col items-start flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
          {t.hero.title}{" "}
          <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          {t.hero.description}
        </p>
        <button className="primary-button">
          {t.hero.register}
        </button>
      </div>
      {/* Added data-aos="fade-left" */}
      <div data-aos="fade-left" className="flex-1 flex justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed1ec1a9da607435157d673910cf7026d0de4399?placeholderIfAbsent=true"
          className="w-full max-w-md object-contain"
          alt="Hero illustration"
        />
      </div>
      <div className="absolute z-0 flex gap-2 left-1/2 -translate-x-1/2 bottom-4">
        <div className="bg-primary w-2.5 h-2.5 rounded-full" />
        <div className="bg-primary/30 w-2.5 h-2.5 rounded-full" />
        <div className="bg-primary/30 w-2.5 h-2.5 rounded-full" />
      </div>
    </section>
  );
};
