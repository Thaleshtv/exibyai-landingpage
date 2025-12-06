import axios from "axios"
import type { RegisterFormData } from "./schemas/register-schema"

const api = axios.create({
  baseURL: "https://xln707jl83.execute-api.us-east-1.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
})

export interface RegisterResponse {
  userId: string
  checkoutUrl: string
  checkoutId: string
  message: string
}

export interface RegisterPayload {
  name: string
  email: string
  document: string
  documentType: "CPF" | "CNPJ"
  address: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
    phone: string
  }
  businessName: string
  niche: string
  planId: string
  callbackUrls: {
    successUrl: string
    cancelUrl: string
    expiredUrl: string
  }
}

export async function registerUser(data: RegisterFormData): Promise<RegisterResponse> {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  const payload: RegisterPayload = {
    name: data.name,
    email: data.email,
    document: data.document.replace(/\D/g, ""),
    documentType: data.documentType,
    address: {
      street: data.street,
      number: data.number,
      complement: data.complement || undefined,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode.replace(/\D/g, ""),
      phone: data.phone.replace(/\D/g, ""),
    },
    businessName: data.businessName,
    niche: data.niche,
    planId: data.planId,
    callbackUrls: {
      successUrl: `${baseUrl}/cadastro/sucesso`,
      cancelUrl: `${baseUrl}/cadastro/cancelado`,
      expiredUrl: `${baseUrl}/cadastro/expirado`,
    },
  }

  const response = await api.post<RegisterResponse>("/auth/register", payload)
  return response.data
}

// Tipos de Plano
export interface Plan {
  planId: string
  name: string
  description: string
  price: number
  billingCycle: "MONTHLY"
  features: string[]
  limits: {
    imagesPerProduct: number
    products: number
  }
}

export interface PlansResponse {
  plans: Plan[]
}

export async function fetchPlans(): Promise<Plan[]> {
  const response = await api.get<PlansResponse>("/plans")
  return response.data.plans
}

export interface ViaCepResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  erro?: boolean
}

export async function fetchAddressByCep(cep: string): Promise<ViaCepResponse | null> {
  try {
    const cleanCep = cep.replace(/\D/g, "")
    if (cleanCep.length !== 8) return null

    const response = await axios.get<ViaCepResponse>(`https://viacep.com.br/ws/${cleanCep}/json/`)
    if (response.data.erro) return null
    return response.data
  } catch {
    return null
  }
}

export { api }
