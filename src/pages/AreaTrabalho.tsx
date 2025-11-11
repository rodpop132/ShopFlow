import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, ClipboardList, MessageSquare, Plus } from "lucide-react";

const tasks = [
  {
    title: "Campanha Black Friday",
    owner: "Rita",
    role: "Marketing",
    status: "Em progresso",
    checklist: ["Criar cupom PIX", "Segmentar clientes VIP", "Mensagens WhatsApp"],
  },
  {
    title: "Formação da equipa",
    owner: "Carlos",
    role: "Gestor",
    status: "Planeado",
    checklist: ["Escolher datas", "Enviar convites", "Criar plano de aula"],
  },
];

const alerts = [
  { type: "warning", text: "Entrega de produtos em 2 dias úteis" },
  { type: "info", text: "5 clientes aguardam resposta no WhatsApp" },
];

const AreaTrabalho = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Organização diária</p>
            <h1 className="font-heading text-4xl font-bold">Área de Trabalho</h1>
            <p className="text-muted-foreground">Planos, tarefas da equipa e comunicação centralizada.</p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover gap-2">
            <Plus className="w-4 h-4" />
            Nova tarefa
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Tarefas activas</p>
            <p className="text-3xl font-bold">12</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Mensagens por responder</p>
            <p className="text-3xl font-bold text-warning">5</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Objectivos concluídos</p>
            <p className="text-3xl font-bold text-success">78%</p>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-2xl">Tarefas da semana</h2>
            </div>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.title} className="p-4 border rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.role}</p>
                    </div>
                    <Badge className="bg-secondary text-foreground">{task.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {task.owner[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{task.owner}</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {task.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-2xl">Alertas & comunicação</h2>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, idx) => (
                <div key={`${alert.text}-${idx}`} className="p-3 rounded-xl bg-muted flex items-center gap-3">
                  <Badge variant="outline" className="uppercase text-xs">
                    {alert.type}
                  </Badge>
                  <span className="text-sm">{alert.text}</span>
                </div>
              ))}
            </div>
            <Button variant="outline">Ver conversações</Button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AreaTrabalho;
