import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ShieldCheck,
  Users,
  Building2,
  Activity,
  RefreshCcw,
  Filter,
  BarChart3,
  Lock,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const userTable = [
  { id: 1, name: "Carla Mendes", email: "carla@studioaura.com", role: "Owner", tenant: "Studio Aura", status: "active" },
  { id: 2, name: "Rui Santos", email: "rui@thebarber.pt", role: "Manager", tenant: "The Barber Porto", status: "active" },
  { id: 3, name: "Helena Cruz", email: "helena@glowbar.com", role: "Finance", tenant: "Glow Bar Brasília", status: "pending" },
  { id: 4, name: "Tiago Prado", email: "tiago@luxcuts.com", role: "Admin", tenant: "Lux Cuts Lisboa", status: "blocked" },
];

const usageData = [
  { month: "Mai", ativos: 120, mensagens: 12 },
  { month: "Jun", ativos: 138, mensagens: 16 },
  { month: "Jul", ativos: 152, mensagens: 18 },
  { month: "Ago", ativos: 167, mensagens: 22 },
  { month: "Set", ativos: 180, mensagens: 24 },
  { month: "Out", ativos: 196, mensagens: 28 },
];

const revenueData = [
  { tier: "Grátis", saloes: 68 },
  { tier: "Pro", saloes: 102 },
  { tier: "Enterprise", saloes: 14 },
];

const auditLogs = [
  { id: 1, action: "Permissão atualizada", user: "Carlos Lima", target: "The Barber Porto", time: "Há 2h" },
  { id: 2, action: "Token revogado", user: "Helena Cruz", target: "Glow Bar Brasília", time: "Há 6h" },
  { id: 3, action: "Novo tenant criado", user: "API", target: "Studio Prisma", time: "Há 9h" },
];

const Admin = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Administração</p>
            <h1 className="font-heading text-4xl font-bold">Painel Admin</h1>
            <p className="text-muted-foreground">
              Consulta utilizadores, controlo de acessos, tenants e métricas globais da plataforma.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
            <Button className="gap-2 bg-primary hover:bg-primary-hover">
              <RefreshCcw className="w-4 h-4" />
              Atualizar agora
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Utilizadores activos</p>
                <p className="text-3xl font-bold">2.184</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tenants</p>
                <p className="text-3xl font-bold">284</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-warning/10 text-warning flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mensagens automáticas</p>
                <p className="text-3xl font-bold">31.9k</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-success/10 text-success flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Incidentes</p>
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-heading text-2xl">Utilizadores ativos</h2>
                <p className="text-sm text-muted-foreground">Média semanal</p>
              </div>
              <Badge className="bg-primary/10 text-primary">+18% vs mês anterior</Badge>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", borderRadius: "0.75rem" }} />
                <Line type="monotone" dataKey="ativos" stroke="hsl(var(--primary))" strokeWidth={3} name="Utilizadores" />
                <Line type="monotone" dataKey="mensagens" stroke="hsl(var(--accent))" strokeWidth={2} name="Campanhas" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-heading text-2xl">Distribuição de planos</h2>
                <p className="text-sm text-muted-foreground">Tenants por tier</p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <BarChart3 className="w-4 h-4" />
                Exportar
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="tier" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", borderRadius: "0.75rem" }} />
                <Bar dataKey="saloes" fill="hsl(var(--primary))" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-2xl">Utilizadores</h2>
              <Button size="sm">Criar utilizador</Button>
            </div>
            <div className="space-y-3">
              {userTable.map((user) => (
                <div key={user.id} className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 border rounded-xl">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{user.role}</Badge>
                    <Badge className="bg-secondary text-foreground">{user.tenant}</Badge>
                    <Badge
                      className={
                        user.status === "active"
                          ? "bg-success/10 text-success"
                          : user.status === "pending"
                            ? "bg-warning/10 text-warning"
                            : "bg-error/10 text-error"
                      }
                    >
                      {user.status === "active" && "Activo"}
                      {user.status === "pending" && "Pendente"}
                      {user.status === "blocked" && "Bloqueado"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-2xl">Logs e segurança</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <Lock className="w-4 h-4" />
                Gerir acessos
              </Button>
            </div>
            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 rounded-xl border flex flex-col gap-1">
                  <p className="font-semibold">{log.action}</p>
                  <p className="text-sm text-muted-foreground">
                    Por {log.user} · {log.target}
                  </p>
                  <span className="text-xs text-muted-foreground">{log.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
