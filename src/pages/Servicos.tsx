import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Wand2, Scissors, Sparkles, Timer } from "lucide-react";

const services = [
  { id: 1, name: "Corte + Barba Premium", duration: 60, price: "R$ 120", category: "Barbearia", popular: true },
  { id: 2, name: "Coloração completa", duration: 90, price: "R$ 240", category: "Coloração", popular: false },
  { id: 3, name: "Escova + Tratamento", duration: 75, price: "R$ 160", category: "Cabelo", popular: true },
  { id: 4, name: "Manicure Gel", duration: 50, price: "R$ 90", category: "Estética", popular: false },
  { id: 5, name: "Day Spa Express", duration: 120, price: "R$ 320", category: "Wellness", popular: false },
];

const serviceStats = [
  { label: "Serviços activos", value: "18", icon: Scissors },
  { label: "Tempo médio", value: "54 min", icon: Timer },
  { label: "Ticket médio", value: "R$ 182", icon: Sparkles },
];

const Servicos = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Catálogo do salão</p>
            <h1 className="font-heading text-4xl font-bold">Serviços</h1>
            <p className="text-muted-foreground">
              Cria pacotes, controla duração, define preços por profissional e vende add-ons.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Importar menu</Button>
            <Button className="bg-primary hover:bg-primary-hover">
              <Plus className="w-4 h-4 mr-2" />
              Novo serviço
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {serviceStats.map((stat) => (
            <Card key={stat.label} className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <Card key={service.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Wand2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading text-xl">{service.name}</h2>
                    {service.popular && <Badge className="bg-primary/10 text-primary">Popular</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{service.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div>
                  <p className="text-xs uppercase tracking-wide">Duração</p>
                  <p className="font-semibold text-foreground">{service.duration} min</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide">Preço</p>
                  <p className="font-semibold text-success">{service.price}</p>
                </div>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Servicos;
