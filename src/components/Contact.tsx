import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `Olá! Sou ${formData.name}.

E-mail: ${formData.email}

Mensagem: ${formData.message}`;
    
    // WhatsApp number
    const phoneNumber = "5585998006527";
    
    // Try different WhatsApp URLs
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    if (isMobile) {
      // Use WhatsApp app protocol for mobile
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    } else {
      // Use web.whatsapp.com for desktop
      whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    }
    
    // Try to open WhatsApp
    try {
      window.location.href = whatsappUrl;
    } catch (error) {
      // Fallback to wa.me if the above fails
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }
    
    // Show success message
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será redirecionado para enviar a mensagem via WhatsApp.",
    });
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(85) 9 9800-6527",
      href: "tel:+5585998006527"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "davirainirdesousaferreira@gmail.com",
      href: "mailto:davirainirdesousaferreira@gmail.com"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Av. Imperador, 1295 - Fortaleza/CE",
      href: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre oportunidades e projetos interessantes
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 transform hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                            <info.icon className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground font-medium">
                              {info.label}
                            </p>
                            <a 
                              href={info.href}
                              className="text-foreground hover:text-primary transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Enviar Mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Sua mensagem"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="mr-2" size={18} />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;