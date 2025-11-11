import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Mail, Lock, User, Building } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "@/lib/api";
import { slugify } from "@/lib/utils";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const persistSession = (token: string, tenantId?: number) => {
    localStorage.setItem("salaopro_token", token);
    if (tenantId) {
      localStorage.setItem("salaopro_tenant", tenantId.toString());
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("login-email") ?? "").trim();
    const password = String(formData.get("login-password") ?? "").trim();

    if (!email || !password) {
      setErrorMessage("Preenche email e password para continuar.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await api.loginUser({ email, password });
      const token = typeof response === "string" ? response : response?.token;

      if (!token) {
        throw new Error("Resposta de login inválida.");
      }

      persistSession(token);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível iniciar sessão.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const fullName = String(formData.get("signup-name") ?? "").trim();
    const businessName = String(formData.get("signup-business") ?? "").trim();
    const email = String(formData.get("signup-email") ?? "").trim();
    const password = String(formData.get("signup-password") ?? "").trim();

    if (!fullName || !businessName || !email || !password) {
      setErrorMessage("Preenche todos os campos para criares conta.");
      setIsLoading(false);
      return;
    }

    try {
      const slug =
        slugify(businessName) ||
        (typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `tenant-${Date.now()}`);

      const tenant = await api.createTenant({
        name: businessName,
        slug,
      });
      const tenantId =
        (tenant as { id?: number; tenant_id?: number }).id ??
        (tenant as { tenant_id?: number }).tenant_id;

      if (!tenantId) {
        throw new Error("Não foi possível criar o salão.");
      }

      const user = await api.registerUser({ name: fullName, email, password });
      const userId =
        (user as { id?: number; user_id?: number }).id ??
        (user as { user_id?: number }).user_id;

      if (!userId) {
        throw new Error("Não foi possível registar o utilizador.");
      }

      await api.addMember({ tenant_id: tenantId, user_id: userId, role: "owner" });

      const login = await api.loginUser({ email, password });
      const token = typeof login === "string" ? login : login?.token;

      if (!token) {
        throw new Error("Não foi possível obter o token de sessão.");
      }

      persistSession(token, tenantId);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Falha ao criar conta.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </Link>
          <h1 className="font-heading text-3xl font-bold mb-2">Bem-vindo ao SalãoPro</h1>
          <p className="text-muted-foreground">Agenda cheia, zero no-shows</p>
        </div>

        <Card className="p-8 backdrop-blur-sm bg-card/80">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Criar Conta</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="login-email"
                      name="login-email"
                      type="email"
                      placeholder="teu@email.com"
                      className="pl-10"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="login-password"
                      name="login-password"
                      type="password"
                      placeholder="********"
                      className="pl-10"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover"
                  disabled={isLoading}
                >
                  {isLoading ? "A entrar..." : "Entrar"}
                </Button>

                <div className="text-center">
                  <Button variant="link" className="text-sm text-muted-foreground">
                    Esqueceste a password?
                  </Button>
                </div>
              </form>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="signup-name"
                      name="signup-name"
                      type="text"
                      placeholder="O teu nome"
                      className="pl-10"
                      autoComplete="name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-business">Nome do Salão</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="signup-business"
                      name="signup-business"
                      type="text"
                      placeholder="Nome do teu salão"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="signup-email"
                      name="signup-email"
                      type="email"
                      placeholder="teu@email.com"
                      className="pl-10"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="signup-password"
                      name="signup-password"
                      type="password"
                      placeholder="********"
                      className="pl-10"
                      autoComplete="new-password"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover"
                  disabled={isLoading}
                >
                  {isLoading ? "A criar conta..." : "Criar Conta Grátis"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Ao criar conta, concordas com os{" "}
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Termos de Serviço
                  </Button>{" "}
                  e{" "}
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Política de Privacidade
                  </Button>
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        {errorMessage && (
          <p className="text-center text-sm text-error bg-error/10 border border-error/20 rounded-lg py-2 px-4 mt-4">
            {errorMessage}
          </p>
        )}

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/">
            <Button variant="ghost" className="text-muted-foreground">
              ← Voltar à página inicial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
