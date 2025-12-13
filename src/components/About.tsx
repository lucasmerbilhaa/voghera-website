import { Globe2, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-[var(--mellow-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[var(--night-green)] mb-8">
            {t.about.title[0]}<br />{t.about.title[1]}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[var(--eucalyptus-green)] mb-2">
            {t.about.description1}
          </p>
          <p className="text-lg max-w-3xl mx-auto text-[var(--eucalyptus-green)]">
            {t.about.description2}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {t.about.values.map((value, index) => {
            const icons = [Heart, Globe2, Sparkles];
            const Icon = icons[index];
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border border-[var(--eucalyptus-green)]/20 rounded-full transition-all duration-300 group-hover:border-[#092A1F] group-hover:bg-[#092A1F]/10">
                  <Icon strokeWidth={1} size={32} className="text-[var(--eucalyptus-green)] group-hover:text-[#092A1F] transition-colors duration-300" />
                </div>
                <h4 className="text-[var(--night-green)] mb-4">{value.title}</h4>
                <p className="text-base text-[var(--eucalyptus-green)]">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}