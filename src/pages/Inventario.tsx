import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, AlertTriangle, Droplets, RefreshCcw, Plus } from "lucide-react";

const stock = [
  { id: 1, name: "Shampoo Reconstrução 1L", category: "Cabelo", qty: 6, min: 4, status: "ok" },
  { id: 2, name: "Lâminas Premium", category: "Barbearia", qty: 12, min: 20, status: "low" },
  { id: 3, name: "Removedor esmalte 500ml", category: "Estética", qty: 2, min: 6, status: "critical" },
  { id: 4, name: "Creme Modelador 250g", category: "Retail", qty: 18, min: 8, status: "ok" },
  { id: 5, name: "Toalhas descartáveis", category: "Operacional", qty: 40, min: 25, status: "ok" },
];

const statusBadge = {
  ok: "bg-success/10 text-success border-success/20",
  low: "bg-warning/10 text-warning border-warning/20",
  critical: "bg-error/10 text-error border-error/20",
} as const;

const Inventario = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Reposição inteligente</p>
            <h1 className="font-heading text-4xl font-bold">Inventário</h1>
            <p className="text-muted-foreground">
              Recebe alertas automáticos, controla fornecedores e acompanha o custo por serviço.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <RefreshCcw className="w-4 h-4" />
              Sincronizar
            </Button>
            <Button className="bg-primary hover:bg-primary-hover gap-2">
              <Plus className="w-4 h-4" />
              Adicionar item
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Custo mensal estimado</p>
            <p className="text-3xl font-bold">R$ 2.430</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Itens abaixo do mínimo</p>
            <p className="text-3xl font-bold text-warning">6</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Margem média por serviço</p>
            <p className="text-3xl font-bold text-success">62%</p>
          </Card>
        </div>

        <div className="grid gap-4">
          {stock.map((item) => (
            <Card
              key={item.id}
              className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-border/70"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                  {item.status === "critical" ? <AlertTriangle className="w-5 h-5 text-error" /> : <Package className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="font-heading text-xl">{item.name}</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Droplets className="w-4 h-4" />
                    {item.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Stock</p>
                  <p className="text-xl font-bold">{item.qty} unid.</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Mínimo</p>
                  <p className="text-xl font-semibold">{item.min}</p>
                </div>
                <Badge className={statusBadge[item.status]}>
                  {item.status === "ok" && "Em dia"}
                  {item.status === "low" && "Repor em breve"}
                  {item.status === "critical" && "Urgente"}
                </Badge>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inventario;
