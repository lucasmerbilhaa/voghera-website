import logo from "figma:asset/cfac489c8985e69795602eb0a0bb35776e75421d.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[var(--night-green)] text-[var(--ivory-cream)] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <img src={logo} alt="Voghera" className="h-10 mb-4" />
            <p className="text-sm text-[var(--ivory-cream)]/70">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="button-text text-sm text-[var(--ivory-cream)] mb-4">
              {language === 'en' ? 'Links' : 'Enlaces'}
            </h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-sm text-[var(--ivory-cream)]/70 hover:text-[var(--ivory-cream)] transition-colors">
                {t.nav.about}
              </a>
              <a href="#products" className="block text-sm text-[var(--ivory-cream)]/70 hover:text-[var(--ivory-cream)] transition-colors">
                {t.nav.products}
              </a>
              <a href="#contact" className="block text-sm text-[var(--ivory-cream)]/70 hover:text-[var(--ivory-cream)] transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="button-text text-sm text-[var(--ivory-cream)] mb-4">
              {t.contact.sectionLabel}
            </h4>
            <div className="space-y-2 text-sm text-[var(--ivory-cream)]/70">
              <a href="mailto:hello@voghera.com" className="block hover:text-[var(--ivory-cream)] transition-colors">
                hello@voghera.com
              </a>
              <p className="text-sm">{t.contact.locationValue}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--ivory-cream)]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--ivory-cream)]/50">
              © 2025 Voghera. {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-[var(--ivory-cream)]/50 hover:text-[var(--ivory-cream)] transition-colors">
                {language === 'en' ? 'Privacy' : 'Privacidad'}
              </a>
              <a href="#" className="text-sm text-[var(--ivory-cream)]/50 hover:text-[var(--ivory-cream)] transition-colors">
                {language === 'en' ? 'Terms' : 'Términos'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}