import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Send, Clock, CheckCircle, Plus } from "lucide-react";

const Mensagens = () => {
  const templates = [
    {
      id: 1,
      name: "Confirmação",
      message: "Olá {nome}, a tua marcação {data} às {hora} está confirmada! [Confirmar] • [Reagendar]",
      usage: 240,
      status: "active"
    },
    {
      id: 2,
      name: "Lembrete 24h",
      message: "Até amanhã {nome}! Não te esqueças da tua marcação às {hora}. [Reagendar]",
      usage: 186,
      status: "active"
    },
    {
      id: 3,
      name: "Pós-atendimento",
      message: "Gostaste do resultado {nome}? Deixa ⭐⭐⭐⭐⭐ e guarda o teu voucher −10%",
      usage: 142,
      status: "active"
    },
    {
      id: 4,
      name: "Reativação 30d",
      message: "{nome}, já passou um tempo! Agenda em 10s: {link}",
      usage: 58,
      status: "active"
    }
  ];

  const campaigns = [
    { id: 1, name: "Promoção Junho", sent: 85, opened: 68, clicked: 42, status: "completed" },
    { id: 2, name: "Clientes Inativos", sent: 120, opened: 94, clicked: 51, status: "active" },
    { id: 3, name: "Aniversariantes", sent: 12, opened: 11, clicked: 9, status: "scheduled" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Mensagens</h1>
            <p className="text-muted-foreground">
              WhatsApp, SMS e campanhas automáticas
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover">
            <Plus className="w-4 h-4 mr-2" />
            Nova Campanha
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Send className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">Enviadas (Mês)</p>
            </div>
            <p className="text-3xl font-bold">1.248</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <p className="text-sm text-muted-foreground">Taxa Entrega</p>
            </div>
            <p className="text-3xl font-bold text-success">98.5%</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-accent" />
              <p className="text-sm text-muted-foreground">Taxa Abertura</p>
            </div>
            <p className="text-3xl font-bold text-accent">82%</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-warning" />
              <p className="text-sm text-muted-foreground">Custo Médio</p>
            </div>
            <p className="text-3xl font-bold">€0.04</p>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="templates" className="space-y-6">
          <TabsList>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>

          {/* Templates */}
          <TabsContent value="templates" className="space-y-4">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold mb-1">Templates Automáticos</p>
                  <p className="text-sm text-muted-foreground">
                    Estes templates são enviados automaticamente com base nas marcações.
                    Usa variáveis como {'{nome}'}, {'{data}'}, {'{hora}'} para personalizar.
                  </p>
                </div>
              </div>
            </Card>

            {templates.map((template) => (
              <Card key={template.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{template.name}</h3>
                      <Badge className="bg-success/10 text-success">
                        {template.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{template.message}</p>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>Usado {template.usage}× este mês</span>
                  <span>Taxa confirmação: 96%</span>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Campaigns */}
          <TabsContent value="campaigns" className="space-y-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg">{campaign.name}</h3>
                    <Badge variant={
                      campaign.status === 'completed' ? 'secondary' :
                      campaign.status === 'active' ? 'default' : 'outline'
                    }>
                      {campaign.status === 'completed' ? 'Concluída' :
                       campaign.status === 'active' ? 'Ativa' : 'Agendada'}
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Enviadas</p>
                    <p className="text-2xl font-bold">{campaign.sent}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Abertas</p>
                    <p className="text-2xl font-bold text-success">{campaign.opened}</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((campaign.opened / campaign.sent) * 100)}% taxa
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Clicadas</p>
                    <p className="text-2xl font-bold text-primary">{campaign.clicked}</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((campaign.clicked / campaign.sent) * 100)}% taxa
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* History */}
          <TabsContent value="history">
            <Card className="p-12 text-center">
              <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Histórico de Mensagens</h3>
              <p className="text-muted-foreground">
                Aqui verás todas as mensagens enviadas nos últimos 90 dias
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Mensagens;
