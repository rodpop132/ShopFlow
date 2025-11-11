import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Plus, Filter, ReceiptText } from "lucide-react";

const expenseCategories = ["Fixo", "Operacional", "Marketing", "Produtos"];

const expenseList = [
  { id: 1, description: "Aluguer do espaço", category: "Fixo", date: "10/11/2025", amount: "R$ 4.000" },
  { id: 2, description: "Campanha Instagram Black Friday", category: "Marketing", date: "08/11/2025", amount: "R$ 850" },
  { id: 3, description: "Pix fornecedores produtos", category: "Produtos", date: "07/11/2025", amount: "R$ 1.230" },
  { id: 4, description: "Contas de água + energia", category: "Operacional", date: "05/11/2025", amount: "R$ 640" },
];

const Despesas = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Fluxo de caixa</p>
            <h1 className="font-heading text-4xl font-bold">Despesas</h1>
            <p className="text-muted-foreground">Controle pagamentos recorrentes, regista comprovativos e acompanha o impacto no lucro.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
            <Button className="bg-primary hover:bg-primary-hover gap-2">
              <Plus className="w-4 h-4" />
              Nova despesa
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Total gasto (Mês)</p>
            <p className="text-3xl font-bold">R$ 6.720</p>
            <p className="text-sm text-warning">+12% vs mês passado</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Fixas vs Variáveis</p>
            <p className="text-3xl font-bold">62% / 38%</p>
          </Card>
          <Card className="p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-error/10 rounded-xl flex items-center justify-center text-error">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Margem após despesas</p>
              <p className="text-2xl font-bold">41%</p>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="all" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <TabsList className="flex flex-wrap">
                <TabsTrigger value="all">Todas</TabsTrigger>
                {expenseCategories.map((category) => (
                  <TabsTrigger key={category} value={category.toLowerCase()}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="flex gap-2">
                <Input placeholder="Pesquisar por descrição..." />
              </div>
            </div>

            <TabsContent value="all" className="space-y-3">
              {expenseList.map((expense) => (
                <div
                  key={expense.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border rounded-xl"
                >
                  <div>
                    <p className="font-semibold">{expense.description}</p>
                    <p className="text-sm text-muted-foreground">{expense.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-secondary text-foreground border-border">{expense.category}</Badge>
                    <p className="text-lg font-bold text-error">{expense.amount}</p>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                      <ReceiptText className="w-4 h-4" />
                      Recibo
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
            {expenseCategories.map((category) => (
              <TabsContent key={category} value={category.toLowerCase()}>
                <p className="text-sm text-muted-foreground">
                  Filtração aplicada para <span className="font-semibold">{category}</span>. Em breve conectaremos à API real.
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Despesas;
