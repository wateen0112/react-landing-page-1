
import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CallToAction: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section data-aos="fade-up"  className="landing-section flex flex-col items-center justify-center text-center bg-secondary/30 dark:bg-secondary/5 py-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground max-w-3xl mx-auto">
        {t.callToAction.title}
      </h2>
      <button className="primary-button mt-8 inline-flex items-center gap-2">
        <span>{t.callToAction.getDemo}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
};
