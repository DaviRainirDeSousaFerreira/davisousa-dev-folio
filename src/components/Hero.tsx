import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Davi Rainir de Sousa Ferreira
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Desenvolvedor Back-End & Front-End
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Especialista em desenvolvimento de microsserviços e aplicações web modernas, 
            com foco em tecnologias inovadoras e experiência do usuário excepcional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
            >
              Conhecer Mais
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300"
            >
              Entrar em Contato
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;