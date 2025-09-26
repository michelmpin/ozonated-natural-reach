import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import vendedoresSuccess from "@/assets/vendedores-success.jpg";
import { DollarSign, Users, TrendingUp, Gift } from "lucide-react";

const VendedoresSection = () => {
  return (
    <section id="vendedores" className="py-20 bg-gradient-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sua <span className="text-secondary-dark">Mudança de Vida</span> Começa Aqui
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Junte-se a milhares de consultores que transformaram suas vidas vendendo produtos que realmente funcionam. 
            O ozônio é vida, e essa é sua oportunidade de prosperar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={vendedoresSuccess} 
              alt="Vendedores de sucesso da Atlântica Natural" 
              className="rounded-2xl shadow-strong w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <DollarSign className="h-8 w-8 text-secondary-dark" />
                  Renda Extra Garantida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comissões atrativas e sistema de bonificação que premia seu esforço e dedicação.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-8 w-8 text-secondary-dark" />
                  Comunidade de Sucesso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Faça parte de uma rede de consultores apoiados por treinamentos e materiais exclusivos.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <TrendingUp className="h-8 w-8 text-secondary-dark" />
                  Crescimento Constante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Produtos naturais em alta demanda com mercado em expansão constante.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-white">
            <Gift className="h-8 w-8 text-secondary-dark" />
            Assista ao Vídeo e Descubra Como Começar
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Veja depoimentos reais de consultores que alcançaram a liberdade financeira com a Atlântica Natural
          </p>
          
          <div className="mb-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SgNvnZgFnp0"
              title="Consultores Atlântica Natural - Mudança de Vida"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg max-w-2xl mx-auto"
            ></iframe>
          </div>

          <Button 
            variant="vendedor" 
            size="lg"
            asChild
            className="text-xl py-6 px-12"
          >
            <a 
              href="https://cadastro.atlanticanatural.com.br/evyoliveira" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🚀 QUERO SER CONSULTOR AGORA
            </a>
          </Button>
          
          <p className="mt-4 text-sm opacity-80">
            Cadastro gratuito • Suporte completo • Comece hoje mesmo
          </p>
        </div>
      </div>
    </section>
  );
};

export default VendedoresSection;