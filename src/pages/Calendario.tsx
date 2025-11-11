import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Plus, CheckCircle2 } from "lucide-react";

const schedule = [
  {
    day: "Hoje",
    date: "Quarta, 12 Nov",
    slots: [
      { time: "09:00", client: "Mariana Lopes", service: "Coloração + Corte", professional: "Rita", status: "confirmed" },
      { time: "10:30", client: "Rui Santos", service: "Barba Premium", professional: "Carlos", status: "pending" },
      { time: "12:00", client: "Helena Cruz", service: "Manicure Gel", professional: "Ana", status: "confirmed" },
    ],
  },
  {
    day: "Amanhã",
    date: "Quinta, 13 Nov",
    slots: [
      { time: "09:30", client: "João Dias", service: "Corte Clássico", professional: "Miguel", status: "confirmed" },
      { time: "11:00", client: "Sara Lima", service: "Tratamento Capilar", professional: "Rita", status: "pending" },
    ],
  },
];

const quickActions = [
  { icon: Calendar, label: "Nova marcação" },
  { icon: Users, label: "Ver equipa" },
  { icon: Clock, label: "Configurar horários" },
];

const Calendario = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Agenda inteligente</p>
            <h1 className="font-heading text-4xl font-bold">Calendário</h1>
            <p className="text-muted-foreground">
              Arrasta e larga compromissos, confirmações automáticas e bloqueio de horários.
            </p>
          </div>
          <div className="flex gap-2">
            {quickActions.map((action) => (
              <Button key={action.label} variant="outline" className="gap-2">
                <action.icon className="w-4 h-4" />
                {action.label}
              </Button>
            ))}
            <Button className="bg-primary hover:bg-primary-hover">
              <Plus className="w-4 h-4 mr-2" />
              Criar Slot
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {schedule.map((day) => (
            <Card key={day.day} className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{day.date}</p>
                  <h2 className="font-heading text-2xl">{day.day}</h2>
                </div>
                <Badge variant="outline">{day.slots.length} compromissos</Badge>
              </div>
              <div className="space-y-4">
                {day.slots.map((slot, idx) => (
                  <div
                    key={`${slot.time}-${idx}`}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 border rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-semibold flex items-center justify-center">
                        {slot.time}
                      </div>
                      <div>
                        <p className="font-semibold">{slot.client}</p>
                        <p className="text-sm text-muted-foreground">{slot.service}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <span className="text-sm text-muted-foreground">com {slot.professional}</span>
                      <Badge
                        className={
                          slot.status === "confirmed"
                            ? "bg-success/10 text-success border-success/20"
                            : "bg-warning/10 text-warning border-warning/20"
                        }
                      >
                        {slot.status === "confirmed" ? "Confirmado" : "A confirmar"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-muted/60 border-dashed border-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl mb-2">Automatiza confirmações e evit a no-shows</h3>
              <p className="text-muted-foreground">
                Confirmações via WhatsApp, e-mail e SMS com apenas um clique e visão em tempo real dos clientes que já responderam.
              </p>
            </div>
            <Button className="gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Activar confirmações
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Calendario;
