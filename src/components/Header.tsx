import { Wine, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/7784ba63921f07a5e67082d85db446a1971c5d96.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--ivory-cream)]/95 backdrop-blur-sm border-b border-[var(--eucalyptus-green)]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="Voghera" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#about" className="button-text text-sm text-[var(--night-green)] hover:text-[var(--eucalyptus-green)] transition-colors">
              {t.nav.about}
            </a>
            <a href="#products" className="button-text text-sm text-[var(--night-green)] hover:text-[var(--eucalyptus-green)] transition-colors">
              {t.nav.products}
            </a>
            <a href="#contact" className="button-text text-sm text-[var(--night-green)] hover:text-[var(--eucalyptus-green)] transition-colors">
              {t.nav.contact}
            </a>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[var(--eucalyptus-green)]/20">
              <Globe strokeWidth={1} size={16} className="text-[var(--eucalyptus-green)] hover:text-[var(--night-green)] transition-colors" />
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="button-text text-sm text-[var(--night-green)] hover:text-[var(--eucalyptus-green)] transition-colors"
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--night-green)] hover:text-[var(--eucalyptus-green)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X strokeWidth={1} size={24} /> : <Menu strokeWidth={1} size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pt-6 border-t border-[var(--eucalyptus-green)]/10 flex flex-col gap-6">
            <a href="#about" className="button-text text-sm text-[var(--night-green)]" onClick={() => setIsMenuOpen(false)}>
              {t.nav.about}
            </a>
            <a href="#products" className="button-text text-sm text-[var(--night-green)]" onClick={() => setIsMenuOpen(false)}>
              {t.nav.products}
            </a>
            <a href="#contact" className="button-text text-sm text-[var(--night-green)]" onClick={() => setIsMenuOpen(false)}>
              {t.nav.contact}
            </a>
            
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-2 pt-4 border-t border-[var(--eucalyptus-green)]/10">
              <Globe strokeWidth={1} size={16} className="text-[var(--eucalyptus-green)] hover:text-[var(--night-green)] transition-colors" />
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="button-text text-sm text-[var(--night-green)]"
              >
                {language === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}