
import React from "react";
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3044cd0b6de95b334a5f24088c0411ef8a8331a7?placeholderIfAbsent=true"
              className="w-[43px]"
              alt="Footer logo icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd2afc07ebeffc326842ba2c0c5b75f2f324828?placeholderIfAbsent=true"
              className="w-[138px]"
              alt="Footer logo text"
            />
          </div>
          <div className="text-sm opacity-80 space-y-2">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.rights}</p>
          </div>
          <div className="flex gap-4">
            <a 
              href="#" 
              aria-label="Instagram" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              aria-label="Facebook" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">
            {t.footer.company}
          </h3>
          <nav className="space-y-3">
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.aboutUs}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.blog}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.contactUs}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.pricing}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.testimonials}
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">
            {t.footer.support}
          </h3>
          <nav className="space-y-3">
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.helpCenter}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.legal}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
              {t.footer.status}
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">
            {t.footer.stayUpdated}
          </h3>
          <form className="mt-4">
            <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
              <input 
                type="email" 
                placeholder={t.footer.emailPlaceholder}
                className="bg-transparent p-3 flex-1 text-sm outline-none"
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="bg-primary p-3 text-white" 
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
