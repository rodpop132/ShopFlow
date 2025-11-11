import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const settings = [
  { label: "Notificações WhatsApp", description: "Enviar confirmações automáticas e lembretes 24h antes", key: "whatsapp", enabled: true },
  { label: "E-mails transacionais", description: "Resumo diário de marcações e faturamento", key: "emails", enabled: true },
  { label: "Pagamentos online", description: "Permitir PIX e cartões no link de reserva", key: "payments", enabled: false },
];

const Definicoes = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Personaliza o SalãoPro</p>
            <h1 className="font-heading text-4xl font-bold">Definições</h1>
            <p className="text-muted-foreground">Dados do salão, preferências de notificações e integrações.</p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover">Guardar alterações</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6 space-y-4">
            <h2 className="font-heading text-2xl">Informações do salão</h2>
            <div className="space-y-3">
              <div>
                <Label htmlFor="business-name">Nome do salão</Label>
                <Input id="business-name" placeholder="Salão Brilho" defaultValue="SalãoPro Studio" />
              </div>
              <div>
                <Label htmlFor="business-phone">Telefone</Label>
                <Input id="business-phone" placeholder="+55 11 9 9999 0000" />
              </div>
              <div>
                <Label htmlFor="business-address">Morada</Label>
                <Textarea id="business-address" placeholder="Rua, número, cidade" />
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="font-heading text-2xl">Comunicação</h2>
            <div className="space-y-4">
              {settings.map((item) => (
                <div key={item.key} className="flex items-start justify-between gap-4 border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch defaultChecked={item.enabled} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Definicoes;
