import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Scissors,
  DollarSign,
  MessageSquare,
  Package,
  Settings,
  Sparkles,
  X,
  Menu,
  ClipboardList,
  TrendingDown
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    {
      title: "Principal",
      items: [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: ClipboardList, label: "Área de Trabalho", href: "/area-trabalho" },
        { icon: Calendar, label: "Calendário", href: "/calendario" },
        { icon: Users, label: "Clientes", href: "/clientes" },
        { icon: Scissors, label: "Serviços", href: "/servicos" },
      ]
    },
    {
      title: "Gestão",
      items: [
        { icon: DollarSign, label: "Finanças", href: "/financas" },
        { icon: TrendingDown, label: "Despesas", href: "/despesas" },
        { icon: MessageSquare, label: "Mensagens", href: "/mensagens" },
        { icon: Package, label: "Inventário", href: "/inventario" },
      ]
    },
    {
      title: "Configurações",
      items: [
        { icon: Settings, label: "Definições", href: "/definicoes" },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-card shadow-lg"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-40 h-screen bg-card border-r border-border
          transition-all duration-300 ease-in-out
          ${collapsed ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:sticky
          ${collapsed ? 'w-64' : 'w-0 md:w-64'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-border">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-bold">SalãoPro</span>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-3 py-4">
            <div className="space-y-6">
              {navigation.map((section, idx) => (
                <div key={idx}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                    {section.title}
                  </p>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        activeClassName="bg-primary/10 text-primary font-medium hover:bg-primary/15"
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span>{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                  {idx < navigation.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* User Section */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                CS
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Carlos Silva</p>
                <p className="text-xs text-muted-foreground truncate">Barber Shop Porto</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {collapsed && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setCollapsed(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
