import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, TrendingUp, Users, Clock, Sparkles, ArrowRight, Star, X, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const Landing = () => {
  useScrollReveal();

  useEffect(() => {
    // Add revealed class to hero elements immediately
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, idx) => {
      setTimeout(() => el.classList.add('revealed'), idx * 100);
    });
  }, []);
  const benefits = [
    {
      icon: Calendar,
      title: "+30% marcações online",
      description: "Link direto partilhável no Instagram, Google Maps e WhatsApp"
    },
    {
      icon: CheckCircle,
      title: "−60% no-shows",
      description: "Lembretes automáticos por WhatsApp com confirmação 1-toque"
    },
    {
      icon: TrendingUp,
      title: "Lucro por profissional",
      description: "Vê receitas, despesas, comissões e lucro real de cada um"
    }
  ];

  const features = [
    { icon: Calendar, text: "Calendário inteligente com drag & drop" },
    { icon: Users, text: "CRM completo de clientes" },
    { icon: TrendingUp, text: "Dashboard financeiro em tempo real" },
    { icon: Clock, text: "Lembretes automáticos WhatsApp" },
    { icon: Sparkles, text: "Página de reservas personalizável" },
    { icon: CheckCircle, text: "Sistema de fidelização incluído" }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Dono, Barber Shop Porto",
      content: "Reduzi os no-shows de 30% para menos de 5%. O WhatsApp automático faz toda a diferença.",
      rating: 5
    },
    {
      name: "Ana Martins",
      role: "Gestora, Salão Lisboa",
      content: "Finalmente consigo ver o lucro real. Antes só via faturação, agora sei exatamente quanto ganho.",
      rating: 5
    },
    {
      name: "Miguel Costa",
      role: "Barbeiro, Coimbra",
      content: "80% das marcações vêm do link no Instagram. Já não atendo telefone para agendar!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-bold">SalãoPro</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-primary hover:bg-primary-hover">
                Experimentar grátis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 scroll-reveal hero-animate text-sm md:text-base">
            ✨ Experimentar 14 dias grátis — sem cartão
          </Badge>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight scroll-reveal hero-animate">
            Agenda cheia,
            <br />
            zero no-shows
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto scroll-reveal hero-animate">
            Marcações, lembretes WhatsApp e finanças claras num único painel.
            Feito para salões e barbearias em Portugal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 scroll-reveal hero-animate">
            <Link to="/auth" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-base md:text-lg px-6 md:px-8 h-12 md:h-14 shadow-glow">
                Experimentar 14 dias grátis
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </Link>
            <a href="#pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 h-12 md:h-14">
                Ver planos
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs md:text-sm text-muted-foreground scroll-reveal hero-animate">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
              <span>Sem cartão necessário</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
              <span>Configuração em 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-reveal">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Resultados reais dos nossos clientes
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Salões como o teu já transformaram o negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-all hover:scale-105 bg-gradient-hero backdrop-blur-sm border-2 scroll-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-reveal">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tudo o que precisas, num só lugar
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Feito especificamente para salões e barbearias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 md:p-6 rounded-2xl hover:bg-muted/50 transition-all hover:scale-105 scroll-reveal">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-lg font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12 md:py-20 bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-reveal">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Adorado por profissionais
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Vê o que dizem salões e barbearias em Portugal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-all hover:scale-105 scroll-reveal">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-foreground/90">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-reveal">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Planos simples e transparentes
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Experimenta 14 dias grátis. Sem cartão necessário.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all scroll-reveal">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2">Grátis</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-bold">€0</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Perfeito para começar e testar
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Até 3 membros da equipa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm">50 marcações/mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Lembretes básicos WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dashboard básico</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Relatórios avançados</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Templates personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Sistema de fidelização</span>
                </li>
              </ul>

              <Link to="/auth" className="block">
                <Button variant="outline" className="w-full">
                  Começar Grátis
                </Button>
              </Link>
            </Card>

            {/* Pro Plan */}
            <Card className="p-6 md:p-8 border-2 border-primary relative hover:shadow-xl transition-all scroll-reveal bg-gradient-hero">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                Mais Popular
              </Badge>
              
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-bold">€47,99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Para salões que querem crescer
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Até 10 membros da equipa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Marcações ilimitadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Templates WhatsApp personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Relatórios de lucro avançados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Sistema de comissões</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Fidelização e vouchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Inventário incluído</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Suporte prioritário</span>
                </li>
              </ul>

              <Link to="/auth" className="block">
                <Button className="w-full bg-primary hover:bg-primary-hover shadow-glow">
                  Experimentar 14 dias grátis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 scroll-reveal">
            Todos os planos incluem 14 dias de teste grátis. Cancela quando quiseres.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-primary text-white border-0 shadow-glow scroll-reveal">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Começa hoje, grátis durante 14 dias
            </h2>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Junta-te a centenas de salões que já transformaram o negócio.
              Sem cartão necessário, sem compromisso.
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14 bg-white text-primary hover:bg-white/90">
                Experimentar 14 dias grátis
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold">SalãoPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 SalãoPro. Feito com ❤️ em Portugal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
