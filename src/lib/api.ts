import type {
  AppointmentPayload,
  ClientPayload,
  ExpensePayload,
  LoginPayload,
  LoginResponse,
  MemberPayload,
  RevenuePayload,
  ServicePayload,
  TenantPayload,
  UserPayload,
} from "./types";

type RequestOptions = {
  method?: string;
  body?: unknown;
  query?: Record<string, string | number | undefined>;
  headers?: Record<string, string>;
};

const DEFAULT_BASE_URL = "http://104.234.236.68:30067";

const getBaseUrl = () => {
  const fromEnv = import.meta.env?.VITE_API_URL as string | undefined;
  const base = (fromEnv && fromEnv.trim()) || DEFAULT_BASE_URL;
  return base.endsWith("/") ? base.slice(0, -1) : base;
};

const buildUrl = (path: string, query?: RequestOptions["query"]) => {
  const url = new URL(`${getBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
};

const parseJson = async (response: Response) => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, query, headers = {} } = options;
  const token = typeof window !== "undefined" ? localStorage.getItem("salaopro_token") : null;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: headers.Authorization ?? `Bearer ${token}` } : {}),
      ...headers,
    },
  };

  if (body !== undefined) {
    fetchOptions.body = typeof body === "string" ? body : JSON.stringify(body);
  }

  const response = await fetch(buildUrl(path, query), fetchOptions);
  const data = await parseJson(response);

  if (!response.ok) {
    const message =
      (data && typeof data === "object" && "detail" in data && (data as { detail?: string }).detail) ||
      response.statusText ||
      "Erro ao comunicar com o servidor.";
    throw new Error(message);
  }

  return data as T;
}

export const api = {
  health: () => request<{ status: string }>("/health"),

  createTenant: (payload: TenantPayload) => request("/tenants", { method: "POST", body: payload }),
  listTenants: () => request("/tenants"),

  registerUser: (payload: UserPayload) => request("/users/register", { method: "POST", body: payload }),
  loginUser: (payload: LoginPayload) => request<LoginResponse>("/users/login", { method: "POST", query: payload }),

  addMember: (payload: MemberPayload) => request("/members", { method: "POST", body: payload }),
  listMembers: (tenantId: number | string) => request("/members", { query: { tenant_id: tenantId } }),

  createService: (payload: ServicePayload) => request("/services", { method: "POST", body: payload }),
  listServices: (tenantId: number | string) => request("/services", { query: { tenant_id: tenantId } }),

  createClient: (payload: ClientPayload) => request("/clients", { method: "POST", body: payload }),
  listClients: (tenantId: number | string) => request("/clients", { query: { tenant_id: tenantId } }),

  createAppointment: (payload: AppointmentPayload) => request("/appointments", { method: "POST", body: payload }),
  listAppointments: (tenantId: number | string) => request("/appointments", { query: { tenant_id: tenantId } }),

  createExpense: (payload: ExpensePayload) => request("/expenses", { method: "POST", body: payload }),
  listExpenses: (tenantId: number | string) => request("/expenses", { query: { tenant_id: tenantId } }),

  createRevenue: (payload: RevenuePayload) => request("/revenues", { method: "POST", body: payload }),
  listRevenues: (tenantId: number | string) => request("/revenues", { query: { tenant_id: tenantId } }),

  getDashboard: (tenantId: number | string) => request(`/dashboard/${tenantId}`),
};
