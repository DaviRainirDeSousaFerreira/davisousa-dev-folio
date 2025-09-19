import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      skills: [".NET C#", "Java", "JavaScript", "TypeScript", "Python", "PHP"],
      color: "bg-purple-primary/20 text-purple-primary border-purple-primary/30"
    },
    {
      title: "Backend & APIs",
      skills: ["Spring Boot", "NodeJS", "FastAPI", "Laravel"],
      color: "bg-blue-primary/20 text-blue-primary border-blue-primary/30"
    },
    {
      title: "Frontend",
      skills: ["Angular", "VueJS", "HTML", "CSS"],
      color: "bg-primary/20 text-primary border-primary/30"
    },
    {
      title: "Banco de Dados",
      skills: ["PostgreSQL", "MySQL"],
      color: "bg-secondary/40 text-secondary-foreground border-secondary/50"
    },
    {
      title: "Ferramentas & Metodologias",
      skills: ["Git/GitHub", "Scrum"],
      color: "bg-accent/40 text-accent-foreground border-accent/50"
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gradient-subtle relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`px-4 py-2 text-sm font-medium ${category.color} 
                        hover:shadow-glow transition-all duration-300 transform hover:scale-105
                        cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;