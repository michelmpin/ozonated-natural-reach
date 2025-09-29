import logoAtlantica from "@/assets/logo-atlantica.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logoAtlantica} alt="Atlântica Natural" className="h-12 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#vendedores" className="text-foreground hover:text-primary transition-colors font-medium">
            Para Vendedores
          </a>
          <a href="#clientes" className="text-foreground hover:text-primary transition-colors font-medium">
            Para Clientes
          </a>
          <a href="#produtos" className="text-foreground hover:text-primary transition-colors font-medium">
            Produtos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;