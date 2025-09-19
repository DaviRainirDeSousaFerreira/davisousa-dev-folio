import { Briefcase, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const responsibilities = [
    "Desenvolvi microserviços",
    "Experiência em Frontend Web", 
    "Experiência em Banco de Dados",
    "Colaborei em projetos de equipe",
    "Versionamento com Git/GitHub em projetos colaborativos",
    "Implementei soluções responsivas, melhorando a experiência do usuário"
  ];

  return (
    <section id="experiencia" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Experiência
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Briefcase className="text-white" size={28} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Desenvolvedor Full Stack
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    Brainup
                  </p>
                  <p className="text-muted-foreground mb-4">
                    2023 – 2025
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="flex-shrink-0 text-primary mt-0.5" size={20} />
                    <p className="text-muted-foreground">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;