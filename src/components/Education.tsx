import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationItems = [
    {
      title: "Ciências da Computação",
      institution: "Estácio Parangaba",
      period: "2023 – cursando",
      status: "Em andamento"
    },
    {
      title: "Dio Bootcamp Santander 2025 - Back-End com Java",
      institution: "Digital Innovation One",
      period: "jun/2025 – ago/2025",
      status: "Concluído"
    }
  ];

  return (
    <section id="formacao" className="py-20 bg-gradient-subtle relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Formação Acadêmica
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <Card key={index} className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 transform hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-2 font-medium">
                        {item.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                        <span className="text-primary font-medium">• {item.status}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;