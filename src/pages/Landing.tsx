import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  GitBranch,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Users2,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const heroStats = [
  { label: "Salões em operação", value: "+180" },
  { label: "Mensagens automatizadas/mês", value: "32k" },
  { label: "Redução média de no-shows", value: "−68%" },
];

const benefits = [
  {
    icon: Calendar,
    title: "+35% de marcações online",
    description: "Link próprio para Instagram, WhatsApp e Google Business em menos de 5 min.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmações automáticas",
    description: "WhatsApp, SMS e e-mail com um toque para confirmar ou reagendar.",
  },
  {
    icon: TrendingUp,
    title: "Lucro por profissional",
    description: "Receitas, custos e comissões lado a lado para cada colaborador.",
  },
];

const features = [
  { icon: Users2, text: "CRM completo com histórico e tags inteligentes" },
  { icon: Clock, text: "Agenda drag & drop com bloqueios e listas de espera" },
  { icon: GitBranch, text: "Automação de workflows (aniversário, inativos, campanhas)" },
  { icon: ShieldCheck, text: "Painel admin com controlo de acessos e auditoria" },
  { icon: BarChart3, text: "Dashboards financeiros, KPIs e previsão de caixa" },
  { icon: Sparkles, text: "Página de reservas com tema personalizável" },
];

const productPages = [
  {
    title: "Área de Trabalho",
    description: "Organiza tarefas, campanhas e comunicação num único painel colaborativo.",
    href: "/area-trabalho",
    tag: "Equipe",
  },
  {
    title: "Calendário Inteligente",
    description: "Confirmações automáticas, bloqueio de horários e integração com WhatsApp.",
    href: "/calendario",
    tag: "Agenda",
  },
  {
    title: "Gestão de Despesas",
    description: "Controla pagamentos recorrentes, recibos e impacto no fluxo de caixa.",
    href: "/despesas",
    tag: "Financeiro",
  },
  {
    title: "Painel Admin",
    description: "Consulta utilizadores, permissionamento e métricas globais num só lugar.",
    href: "/admin",
    tag: "Administração",
  },
  {
    title: "Serviços & Pacotes",
    description: "Define preços, cria add-ons e destaca serviços mais vendidos.",
    href: "/servicos",
    tag: "Catálogo",
  },
  {
    title: "Inventário em tempo real",
    description: "Alertas de stock, custos por serviço e reposição automática.",
    href: "/inventario",
    tag: "Operações",
  },
];

const testimonials = [
  {
    name: "Carlos Lima",
    role: "Founder @ The Barber Porto",
    content:
      "Automatizámos confirmações, e os no-shows caíram para 4%. A equipa ganhou confiança e eu ganho visibilidade em tempo real.",
    rating: 5,
  },
  {
    name: "Ana Ribeiro",
    role: "CEO @ Studio Aura Lisboa",
    content:
      "O painel admin dá-me controlo total: vejo faturação, permissões e fluxo de caixa em segundos. Não vivo mais sem.",
    rating: 5,
  },
  {
    name: "Miguel Santos",
    role: "Gestor @ Glow Bar Brasília",
    content:
      "Integrei pagamentos Pix, uso as mensagens prontas e consegui crescer 28% em 3 meses. Interface simples e linda.",
    rating: 5,
  },
];

const freePlanFeatures = [
  "1 membro da equipa",
  "25 marcações/mês",
  "Landing de reservas",
  "WhatsApp básico",
];

const proPlanFeatures = [
  "Até 10 membros (extra sob demanda)",
  "Marcações ilimitadas",
  "Automação avançada",
  "Painel admin, inventário e API",
];

const Landing = () => {
  useScrollReveal();

  useEffect(() => {
    const heroElements = document.querySelectorAll(".hero-animate");
    heroElements.forEach((el, index) => {
      setTimeout(() => el.classList.add("revealed"), index * 120);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-heading text-xl font-bold">SalãoPro</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admin">
              <Button variant="ghost" className="hidden md:inline-flex">
                Painel Admin
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-primary hover:bg-primary-hover">Experimentar grátis</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 py-14 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 hero-animate">
            14 dias grátis · Sem cartão · Suporte humano
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight hero-animate">
            Agenda cheia, finanças claras e um painel admin que governa tudo.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 hero-animate max-w-3xl mx-auto">
            O software completo para salões, barbearias e estúdios de beleza que querem crescer com dados, automações
            e experiência premium — de Portugal ao Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate">
            <Link to="/auth" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 text-base md:text-lg shadow-glow">
                Começar agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="#pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-14 text-base md:text-lg">
                Ver planos
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 hero-animate">
            {heroStats.map((stat) => (
              <Card key={stat.label} className="p-6 bg-gradient-hero border-0">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Resultados comprovados no primeiro mês</h2>
          <p className="text-lg md:text-xl text-muted-foreground">Automatiza a operação e mantém a equipa produtiva.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="p-6 hover:shadow-xl transition-all scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Tudo o que precisas num único ecossistema</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Dados em tempo real, automação omnichannel e um painel admin seguro para governares todo o negócio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={feature.text} className="p-5 flex items-start gap-4 scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <feature.icon className="w-5 h-5" />
              </div>
              <p className="text-base font-semibold">{feature.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Product Pages */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Explora cada página do SalãoPro</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Salta directamente para as áreas que vais usar no dia a dia — da equipa ao financeiro.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {productPages.map((page, index) => (
            <Card key={page.title} className="p-6 flex flex-col gap-3 hover:shadow-lg transition-all scroll-reveal" style={{ transitionDelay: `${index * 70}ms` }}>
              <Badge className="w-fit bg-primary/10 text-primary">{page.tag}</Badge>
              <h3 className="font-heading text-2xl">{page.title}</h3>
              <p className="text-muted-foreground flex-1">{page.description}</p>
              <Link to={page.href}>
                <Button variant="ghost" className="p-0 text-primary hover:text-primary-hover">
                  Abrir página
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12 md:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Profissionais que já lideram com o SalãoPro</h2>
          <p className="text-lg md:text-xl text-muted-foreground">Histórias reais de Portugal e Brasil.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="p-6 scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">“{testimonial.content}”</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Planos transparentes</h2>
          <p className="text-lg md:text-xl text-muted-foreground">Testa grátis, crescer connosco é simples.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col">
            <div className="mb-6">
              <h3 className="font-heading text-2xl">Grátis</h3>
              <p className="text-muted-foreground">Ideal para começar agora mesmo.</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-4xl font-bold">R$ 0</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>
            <ul className="space-y-3 flex-1">
              {freePlanFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/auth" className="mt-6">
              <Button variant="outline" className="w-full">
                Começar grátis
              </Button>
            </Link>
          </Card>
          <Card className="p-6 border-2 border-primary bg-gradient-hero flex flex-col">
            <Badge className="w-fit mb-4">Mais escolhido</Badge>
            <div className="mb-6">
              <h3 className="font-heading text-2xl">Pro</h3>
              <p className="text-muted-foreground">Para salões que querem crescer com dados.</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-4xl font-bold">R$ 89</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>
            <ul className="space-y-3 flex-1">
              {proPlanFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/auth" className="mt-6">
              <Button className="w-full bg-primary hover:bg-primary-hover">
                Assinar Pro
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 gradient-primary text-white border-0 shadow-glow text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Começa hoje, grátis durante 14 dias</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Junta-te a centenas de salões que já transformaram a operação. Sem cartão, cancela quando quiseres.
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 h-12 md:h-14">
              Experimentar 14 dias grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </Card>
      </section>

      <footer className="border-t border-border mt-10">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-heading text-xl font-bold">SalãoPro</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SalãoPro · Feito em Portugal e Brasil.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
