import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Calendar, 
  Users, 
  DollarSign, 
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Dashboard = () => {
  const revenueData = [
    { day: 'Seg', receitas: 420, despesas: 180, lucro: 240 },
    { day: 'Ter', receitas: 380, despesas: 160, lucro: 220 },
    { day: 'Qua', receitas: 510, despesas: 200, lucro: 310 },
    { day: 'Qui', receitas: 485, despesas: 190, lucro: 295 },
    { day: 'Sex', receitas: 620, despesas: 240, lucro: 380 },
    { day: 'Sáb', receitas: 890, despesas: 320, lucro: 570 },
    { day: 'Dom', receitas: 545, despesas: 210, lucro: 335 },
  ];

  // Mock data - in real app this would come from API
  const kpis = [
    {
      title: "Receita do Mês",
      value: "R$ 4.850",
      change: "+12%",
      trend: "up" as const,
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Lucro",
      value: "R$ 2.940",
      change: "+8%",
      trend: "up" as const,
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Taxa de Ocupação",
      value: "78%",
      change: "+5%",
      trend: "up" as const,
      icon: Calendar,
      color: "text-accent"
    },
    {
      title: "No-shows",
      value: "4",
      change: "-2",
      trend: "down" as const,
      icon: AlertCircle,
      color: "text-warning"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      time: "10:00",
      client: "João Silva",
      service: "Corte + Barba",
      professional: "Carlos",
      status: "confirmed" as const
    },
    {
      id: 2,
      time: "11:30",
      client: "Maria Santos",
      service: "Coloração",
      professional: "Ana",
      status: "pending" as const
    },
    {
      id: 3,
      time: "14:00",
      client: "Pedro Costa",
      service: "Corte Clássico",
      professional: "Carlos",
      status: "confirmed" as const
    },
    {
      id: 4,
      time: "15:30",
      client: "Sofia Ferreira",
      service: "Manicure + Pedicure",
      professional: "Rita",
      status: "confirmed" as const
    }
  ];

  const alerts = [
    {
      type: "warning",
      message: "5 clientes sem retorno há mais de 30 dias"
    },
    {
      type: "info",
      message: "Despesa recorrente: Aluguer (R$ 800) amanhã"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Visão geral do teu salão — Hoje, {new Date().toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover">
            <Calendar className="w-4 h-4 mr-2" />
            Nova Marcação
          </Button>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <Card key={index} className={`p-4 border-l-4 ${
                alert.type === 'warning' ? 'border-l-warning bg-warning/5' : 'border-l-info bg-info/5'
              }`}>
                <div className="flex items-center gap-3">
                  <AlertCircle className={`w-5 h-5 ${
                    alert.type === 'warning' ? 'text-warning' : 'text-info'
                  }`} />
                  <p className="text-sm font-medium">{alert.message}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-${kpi.color.replace('text-', '')}/10 flex items-center justify-center`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <Badge variant={kpi.trend === 'up' ? 'default' : 'secondary'} className={
                  kpi.trend === 'up' 
                    ? 'bg-success/10 text-success hover:bg-success/20' 
                    : 'bg-muted text-muted-foreground'
                }>
                  {kpi.trend === 'up' ? (
                    <ArrowUp className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDown className="w-3 h-3 mr-1" />
                  )}
                  {kpi.change}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{kpi.title}</p>
              <p className="font-heading text-3xl font-bold">{kpi.value}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-heading text-2xl font-bold">Marcações de Hoje</h2>
                <p className="text-sm text-muted-foreground">
                  {upcomingAppointments.length} marcações agendadas
                </p>
              </div>
              <Button variant="outline" size="sm">
                Ver todas
              </Button>
            </div>

            <div className="space-y-3">
              {upcomingAppointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
                      <Clock className="w-4 h-4 text-primary mb-1" />
                      <span className="text-sm font-semibold text-primary">{appointment.time}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{appointment.client}</p>
                      <p className="text-sm text-muted-foreground">{appointment.service}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Com {appointment.professional}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                    className={appointment.status === 'confirmed' 
                      ? 'bg-success/10 text-success hover:bg-success/20' 
                      : 'bg-warning/10 text-warning hover:bg-warning/20'
                    }
                  >
                    {appointment.status === 'confirmed' ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Confirmado
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Pendente
                      </>
                    )}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6">
            <h2 className="font-heading text-2xl font-bold mb-6">Estatísticas Rápidas</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Hoje</span>
                  <span className="font-semibold">8 marcações</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Esta Semana</span>
                  <span className="font-semibold">42 marcações</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '84%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Este Mês</span>
                  <span className="font-semibold">168 marcações</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: '93%' }} />
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Novos Clientes</span>
                  <span className="font-semibold text-accent">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Taxa Confirmação</span>
                  <span className="font-semibold text-success">96%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Ticket Médio</span>
                    <span className="font-semibold text-primary">R$ 28,90</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Revenue Chart */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-heading text-xl md:text-2xl font-bold mb-6">
              Receita vs. Despesas (Semana)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="receitas" stroke="hsl(var(--success))" strokeWidth={2} name="Receitas" />
                <Line type="monotone" dataKey="despesas" stroke="hsl(var(--error))" strokeWidth={2} name="Despesas" />
                <Line type="monotone" dataKey="lucro" stroke="hsl(var(--primary))" strokeWidth={3} name="Lucro" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h2 className="font-heading text-xl md:text-2xl font-bold mb-6">
              Comparação Diária
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="receitas" fill="hsl(var(--success))" name="Receitas" />
                <Bar dataKey="despesas" fill="hsl(var(--error))" name="Despesas" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
