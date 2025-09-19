import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Desenvolvi microsserviços .NET C#, Java, Springboot, NodeJS e tenho experiência em Frontend Web 
                utilizando Angular, VueJS, Typescript, JavaScript, PHP, Laravel e Python e FastAPI, HTML, CSS e 
                experiência em desenvolvimento com Banco de Dados PostgreSQL e MySQL e Metodologia de desenvolvimento Scrum.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-muted-foreground">
                Comprometido com o aprendizado contínuo e aplicação prática de conhecimentos em projetos web. 
                Busco oportunidades para crescer profissionalmente e contribuir com soluções tecnológicas inovadoras.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;