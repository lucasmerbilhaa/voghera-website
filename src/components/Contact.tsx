import { Mail } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    // Create email body with all information
    const subject = `Contact from ${name}${company ? ` - ${company}` : ""}`;
    const body = `Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ""}
Message:
${message}`;

    // Open email client with pre-filled information
    window.location.href = `mailto:hello@voghera.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Update button state
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-[var(--mellow-cream)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div>
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-[var(--night-green)] mb-6">{t.contact.title}</h2>
              <p className="text-lg mb-12 text-[var(--eucalyptus-green)]">
                {t.contact.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Mail strokeWidth={1} size={20} className="text-[var(--eucalyptus-green)] hover:text-[var(--night-green)] transition-colors" />
                </div>
                <div>
                  <p className="button-text text-xs text-[var(--eucalyptus-green)] mb-1">{t.contact.email}</p>
                  <a href="mailto:hello@voghera.com" className="text-[var(--night-green)] hover:text-[var(--eucalyptus-green)] transition-colors">
                    hello@voghera.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white border border-[var(--eucalyptus-green)]/10 p-8 lg:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="button-text text-xs text-[var(--eucalyptus-green)] mb-2 block">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-[var(--eucalyptus-green)]/20 focus:border-[var(--eucalyptus-green)] focus:outline-none transition-colors bg-transparent"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="button-text text-xs text-[var(--eucalyptus-green)] mb-2 block">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[var(--eucalyptus-green)]/20 focus:border-[var(--eucalyptus-green)] focus:outline-none transition-colors bg-transparent"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="company" className="button-text text-xs text-[var(--eucalyptus-green)] mb-2 block">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-[var(--eucalyptus-green)]/20 focus:border-[var(--eucalyptus-green)] focus:outline-none transition-colors bg-transparent"
                  placeholder={t.contact.form.companyPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="button-text text-xs text-[var(--eucalyptus-green)] mb-2 block">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-[var(--eucalyptus-green)]/20 focus:border-[var(--eucalyptus-green)] focus:outline-none transition-colors bg-transparent resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full px-8 py-4 transition-colors button-text text-sm ${
                  submitted
                    ? 'bg-[var(--eucalyptus-green)]/30 text-[var(--eucalyptus-green)] cursor-not-allowed'
                    : 'bg-[var(--night-green)] text-[var(--ivory-cream)] hover:bg-[var(--eucalyptus-green)]'
                }`}
              >
                {submitted ? (language === 'en' ? 'Message sent!' : '¡Mensaje enviado!') : t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}