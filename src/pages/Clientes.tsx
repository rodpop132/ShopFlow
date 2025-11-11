import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, Phone, Mail, Star } from "lucide-react";

const Clientes = () => {
  const clients = [
    { id: 1, name: "João Silva", phone: "+351 912 345 678", email: "joao@email.com", visits: 12, spent: "R$ 340", tags: ["VIP", "Fiel"], lastVisit: "Há 3 dias" },
    { id: 2, name: "Maria Santos", phone: "+351 913 456 789", email: "maria@email.com", visits: 8, spent: "R$ 280", tags: ["Fiel"], lastVisit: "Há 1 semana" },
    { id: 3, name: "Pedro Costa", phone: "+351 914 567 890", email: "pedro@email.com", visits: 5, spent: "R$ 145", tags: ["Novo"], lastVisit: "Há 2 semanas" },
    { id: 4, name: "Ana Ferreira", phone: "+351 915 678 901", email: "ana@email.com", visits: 15, spent: "R$ 420", tags: ["VIP"], lastVisit: "Ontem" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Clientes</h1>
            <p className="text-muted-foreground">
              Gere a tua base de clientes e histórico
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover">
            <Plus className="w-4 h-4 mr-2" />
            Novo Cliente
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Procurar por nome, telefone ou email..."
              className="pl-10"
            />
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground mb-1">Total Clientes</p>
            <p className="text-3xl font-bold">142</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground mb-1">Novos (30d)</p>
            <p className="text-3xl font-bold text-success">+12</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground mb-1">Taxa Retorno</p>
            <p className="text-3xl font-bold text-primary">84%</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground mb-1">LTV Médio</p>
            <p className="text-3xl font-bold">R$ 285</p>
          </Card>
        </div>

        {/* Clients List */}
        <div className="grid gap-4">
          {clients.map((client) => (
            <Card key={client.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{client.name}</h3>
                      <div className="flex gap-1">
                        {client.tags.map(tag => (
                          <Badge key={tag} variant={tag === 'VIP' ? 'default' : 'secondary'} className={tag === 'VIP' ? 'bg-primary/10 text-primary' : ''}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {client.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {client.email}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <p className="text-muted-foreground">Visitas</p>
                      <p className="font-semibold">{client.visits}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Gasto Total</p>
                      <p className="font-semibold text-success">{client.spent}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{client.lastVisit}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Clientes;
