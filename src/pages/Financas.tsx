import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Plus, Download } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Financas = () => {
  const monthlyData = [
    { month: 'Jan', receitas: 4200, despesas: 2800, lucro: 1400 },
    { month: 'Fev', receitas: 3800, despesas: 2600, lucro: 1200 },
    { month: 'Mar', receitas: 5100, despesas: 3200, lucro: 1900 },
    { month: 'Abr', receitas: 4850, despesas: 2940, lucro: 1910 },
    { month: 'Mai', receitas: 5200, despesas: 3100, lucro: 2100 },
    { month: 'Jun', receitas: 4900, despesas: 2950, lucro: 1950 },
  ];

  const expenses = [
    { id: 1, description: "Aluguer do espaço", amount: "€800", category: "Fixo", date: "01/06/2025" },
    { id: 2, description: "Produtos (shampoo, gel)", amount: "€240", category: "Variável", date: "03/06/2025" },
    { id: 3, description: "Eletricidade + Água", amount: "€120", category: "Fixo", date: "05/06/2025" },
    { id: 4, description: "Marketing Instagram", amount: "€80", category: "Marketing", date: "10/06/2025" },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Finanças</h1>
            <p className="text-muted-foreground">
              Receitas, despesas e lucro em tempo real
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button className="bg-primary hover:bg-primary-hover">
              <Plus className="w-4 h-4 mr-2" />
              Nova Despesa
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Receita (Mês)</p>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <p className="text-3xl font-bold mb-1">€4.900</p>
            <p className="text-sm text-success">+8% vs. mês anterior</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Despesas (Mês)</p>
              <TrendingDown className="w-5 h-5 text-error" />
            </div>
            <p className="text-3xl font-bold mb-1">€2.950</p>
            <p className="text-sm text-muted-foreground">+3% vs. mês anterior</p>
          </Card>

          <Card className="p-6 bg-gradient-primary text-white border-0">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-white/90">Lucro (Mês)</p>
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <p className="text-3xl font-bold mb-1">€1.950</p>
            <p className="text-sm text-white/90">+14% vs. mês anterior</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Margem Lucro</p>
            </div>
            <p className="text-3xl font-bold mb-1">39.8%</p>
            <p className="text-sm text-success">+2.1% vs. mês anterior</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-heading text-xl font-bold mb-4">Evolução Mensal</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
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
            <h2 className="font-heading text-xl font-bold mb-4">Comparação Trimestral</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
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

        {/* Expenses List */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl font-bold">Despesas Recentes</h2>
            <Tabs defaultValue="all" className="w-auto">
              <TabsList>
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="fixed">Fixas</TabsTrigger>
                <TabsTrigger value="variable">Variáveis</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-3">
            {expenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div>
                  <p className="font-semibold">{expense.description}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {expense.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{expense.date}</span>
                  </div>
                </div>
                <p className="text-lg font-bold text-error">{expense.amount}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Financas;
