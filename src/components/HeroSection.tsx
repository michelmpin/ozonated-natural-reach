import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transforme Sua Vida com o Poder do 
          <span className="bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent block mt-2">
            Ozônio Natural
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          Descubra produtos naturais ozonizados que promovem saúde, bem-estar e 
          <strong> mudança de vida real</strong>. Porque <strong>ozônio é vida</strong>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => document.getElementById('vendedores')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto text-lg py-6 px-8"
          >
            🚀 Seja um Consultor
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto text-lg py-6 px-8 border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm"
          >
            🌿 Conheça os Produtos
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;