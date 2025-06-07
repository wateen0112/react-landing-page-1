
import React from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageSelector } from "../ui/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
    <header className="z-10 sticky top-0 flex w-full flex-col items-center justify-center bg-background/80 backdrop-blur-md border-b border-border dark:border-border px-4 md:px-8 lg:px-[70px] py-4">
      <div className="flex w-full max-w-7xl items-center gap-5 flex-wrap justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa061aa695059547aff4e4a4872ddc48d6905f5a?placeholderIfAbsent=true"
            className="aspect-[1.46] object-contain w-[35px]"
            alt="Logo icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd787b1ba87b3802223764123ad90080fce3a563?placeholderIfAbsent=true"
            className="aspect-[5.56] object-contain w-[111px] dark:hidden"
            alt="Logo text"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd2afc07ebeffc326842ba2c0c5b75f2f324828?placeholderIfAbsent=true"
            className="aspect-[5.56] object-contain w-[111px] hidden dark:block"
            alt="Logo text dark"
          />
        </div>
        
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelector />
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
        
        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto`}>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto text-base font-medium">
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
              {t.header.home}
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors py-2">
              {t.header.service}
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors py-2">
              {t.header.feature}
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors py-2">
              {t.header.product}
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors py-2">
              {t.header.testimonial}
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors py-2">
              {t.header.faq}
            </a>
          </div>
          
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
            <div className="flex gap-3.5 text-sm font-medium">
              <button className="text-primary hover:bg-primary/10 transition-colors px-5 py-2.5 rounded-md">
                {t.header.login}
              </button>
              <button className="text-white bg-primary hover:bg-primary/90 transition-colors px-5 py-2.5 rounded-md">
                {t.header.signup}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
