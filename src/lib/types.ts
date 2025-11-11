export interface TenantPayload {
  name: string;
  slug: string;
}

export interface UserPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user_id?: number;
  [key: string]: unknown;
}

export interface MemberPayload {
  tenant_id: number;
  user_id: number;
  role: string;
}

export interface ServicePayload {
  tenant_id: number;
  name: string;
  duration_min: number;
  price: number;
}

export interface ClientPayload {
  tenant_id: number;
  name: string;
  phone?: string;
  email?: string;
}

export interface AppointmentPayload {
  tenant_id: number;
  client_id: number;
  staff_id: number;
  start_time: string;
  end_time: string;
}

export interface ExpensePayload {
  tenant_id: number;
  category: string;
  amount: number;
  note?: string;
}

export interface RevenuePayload {
  tenant_id: number;
  source: string;
  amount: number;
}
