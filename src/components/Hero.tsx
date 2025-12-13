import { ArrowDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Voghera_Hero.webm" type="video/webm" />
        </video>
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Decorative line top */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent z-10" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-white mb-8 drop-shadow-lg">
          {t.hero.title[0]} <br />
          {t.hero.title[1]}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl max-w-2xl mx-auto mb-12 text-white/90 drop-shadow-md">
          {t.hero.subtitle[0]} <br />
          {t.hero.subtitle[1]}
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-px bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-[var(--orchid-pink)]" />
          <div className="w-16 h-px bg-white/40" />
        </div>

        {/* CTA */}
        <a 
          href="#products" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--night-green)] hover:bg-[var(--ivory-cream)] transition-all button-text text-sm shadow-lg"
        >
          {language === 'en' ? 'Explore Products' : 'Explorar Productos'}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <ArrowDown strokeWidth={1} size={24} className="text-white/70 hover:text-white transition-colors" />
      </div>
    </section>
  );
}