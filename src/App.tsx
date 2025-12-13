import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/favicon.png';
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}