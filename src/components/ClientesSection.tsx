import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import produtosNaturais from "@/assets/produtos-naturais.jpg";
import { Leaf, Shield, Heart, Download, Eye, ShoppingCart } from "lucide-react";

const ClientesSection = () => {
  return (
    <section id="clientes" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Produtos Naturais que <span className="text-primary">Transformam Vidas</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Descubra o poder dos produtos ozonizados e suplementos nutracêuticos. 
            Saúde natural, eficácia comprovada. <strong>Ozônio é vida!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Leaf className="h-8 w-8" />
                  100% Natural
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Produtos desenvolvidos com ingredientes naturais e tecnologia de ozônio para máxima eficácia.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Shield className="h-8 w-8" />
                  Qualidade Garantida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigoroso controle de qualidade e certificações que garantem a pureza de nossos produtos.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Heart className="h-8 w-8" />
                  Bem-estar Completo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Suplementos nutracêuticos que promovem saúde integral e qualidade de vida superior.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <img 
              src={produtosNaturais} 
              alt="Produtos naturais ozonizados Atlântica Natural" 
              className="rounded-2xl shadow-strong w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card id="produtos" className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Baixe o Catálogo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Acesse nosso catálogo completo com todos os produtos e informações detalhadas.
              </p>
              <Button 
                variant="cliente" 
                asChild
                className="w-full"
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1u6pkUVrBkDPzuOKN1u3ZHyfeS4Yk-1Kv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  📥 Download PDF
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-secondary">Revista Virtual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Navegue pela nossa revista digital interativa e explore nossos produtos.
              </p>
              <Button 
                variant="secondary" 
                asChild
                className="w-full"
              >
                <a 
                  href="https://heyzine.com/flip-book/567390b294.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  📖 Ver Revista
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-success">Loja Virtual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Compre agora mesmo nossos produtos com entrega rápida e segura.
              </p>
              <Button 
                variant="success" 
                asChild
                className="w-full"
              >
                <a 
                  href="https://loja.atlanticanatural.com.br/evyoliveira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  🛒 Comprar Agora
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            🌿 Transforme Sua Saúde Hoje Mesmo
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Produtos naturais ozonizados para uma vida mais saudável e equilibrada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="flex-1"
            >
              <a 
                href="https://heyzine.com/flip-book/567390b294.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Produtos
              </a>
            </Button>
            <Button 
              variant="default" 
              size="lg"
              asChild
              className="flex-1"
            >
              <a 
                href="https://loja.atlanticanatural.com.br/evyoliveira" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Comprar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;