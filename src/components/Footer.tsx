import logoAtlantica from "@/assets/logo-atlantica.png";
import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <a href="https://atlanticanatural.com.br/"
                  target="_blank" 
                  rel="noopener noreferrer">
                <img src={logoAtlantica} alt="Atlântica Natural" className="h-12 w-auto" />
              </a>
            </div>
            <p className="text-white/80 max-w-md">
              Transformando vidas através de produtos naturais ozonizados e suplementos nutracêuticos. <br />
              <strong>Ozônio é vida!</strong>
            </p>
            <div className="flex items-center gap-2 mt-4 text-primary-light">
              <Leaf className="h-5 w-5" />
              <span className="text-sm">100% Natural & Ozonizado</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary-light">Para Consultores</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a 
                  href="https://cadastro.atlanticanatural.com.br/evyoliveira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                >
                  Cadastro
                </a>
              </li>
              <li><a href="https://www.youtube.com/@papocomgouveia"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors">Treinamentos</a></li>
              <li><span>Materiais de Apoio</span></li>
              <li><span>Suporte</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary-light">Para Clientes</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a 
                  href="https://loja.atlanticanatural.com.br/evyoliveira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary-light transition-colors"
                >
                  Loja Virtual
                </a>
              </li>
              <li>
                <a 
                  href="https://heyzine.com/flip-book/567390b294.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary-light transition-colors"
                >
                  Revista Digital
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1u6pkUVrBkDPzuOKN1u3ZHyfeS4Yk-1Kv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary-light transition-colors"
                >
                  Catálogo PDF
                </a>
              </li>
              <li><span>Produtos Naturais</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-red-400" /> por Michel Menezes 
            <span className="mx-2">•</span>
            Mudança de vida através do ozônio natural
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;