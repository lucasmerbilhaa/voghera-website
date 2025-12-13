import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import wineImage from "figma:asset/b121a0c9047011cd2a44012247e2b39736bc4661.png";

export function Products() {
  const { language } = useLanguage();
  const t = translations[language];

  const productImages = [
    wineImage,
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMG9pbCUyMGJvdHRsZXxlbnwxfHx8fDE3NjUyOTIwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1662013604686-a36ef8b2e4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2hlZXNlfGVufDF8fHx8MTc2NDg4MzY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1628838463043-b81a343794d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzY0ODYyNjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const productColors = [
    "var(--merlot-red)",
    "var(--eucalyptus-green)",
    "var(--soft-peach)",
    "var(--orchid-pink)"
  ];

  return (
    <section id="products" className="py-32 px-6 lg:px-12 bg-[var(--ivory-cream)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[var(--night-green)]">
            {t.products.title}
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.products.items.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white border border-[var(--eucalyptus-green)]/10 hover:border-[var(--eucalyptus-green)]/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={productImages[index]} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-10">
                {/* Decorative line */}
                <div className="w-12 h-px mb-6" style={{ backgroundColor: productColors[index] }} />
                
                <h3 className="text-[var(--night-green)] mb-4">{product.title}</h3>
                <p className="text-base text-[var(--eucalyptus-green)]">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}