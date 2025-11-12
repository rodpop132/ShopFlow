import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Financas from "./pages/Financas";
import Mensagens from "./pages/Mensagens";
import Calendario from "./pages/Calendario";
import Servicos from "./pages/Servicos";
import Inventario from "./pages/Inventario";
import Definicoes from "./pages/Definicoes";
import Despesas from "./pages/Despesas";
import AreaTrabalho from "./pages/AreaTrabalho";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/financas" element={<Financas />} />
          <Route path="/mensagens" element={<Mensagens />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/definicoes" element={<Definicoes />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="/area-trabalho" element={<AreaTrabalho />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
