import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VendedoresSection from "@/components/VendedoresSection";
import ClientesSection from "@/components/ClientesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO Meta tags dinâmicos
    document.title = "Atlântica Natural - Produtos Naturais Ozonizados | Mudança de Vida";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Descubra produtos naturais ozonizados e suplementos nutracêuticos da Atlântica Natural. Ozônio é vida! Seja vendedor ou cliente e transforme sua vida.'
      );
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Atlântica Natural - Produtos Naturais Ozonizados');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Produtos naturais ozonizados e suplementos nutracêuticos. Seja vendedor e tenha mudança de vida ou cliente e descubra o poder do ozônio natural.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VendedoresSection />
        <ClientesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
