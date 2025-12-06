import axios from "axios"
import type { RegisterFormData } from "./schemas/register-schema"

const api = axios.create({
  baseURL: "https://api.exiby.com.br",
  headers: {
    "Content-Type": "application/json",
  },
})

export interface RegisterResponse {
  userId: string
  asaasPaymentId: string
  paymentStatus: "PENDING" | "CONFIRMED" | "RECEIVED"
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
  planId?: string
  payment: {
    creditCard: {
      holderName: string
      number: string
      expiryMonth: string
      expiryYear: string
      ccv: string
    }
  }
}

export async function registerUser(data: RegisterFormData): Promise<RegisterResponse> {
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
    planId: "pro",
    payment: {
      creditCard: {
        holderName: data.cardHolderName,
        number: data.cardNumber.replace(/\D/g, ""),
        expiryMonth: data.cardExpiry.split("/")[0],
        expiryYear: `20${data.cardExpiry.split("/")[1]}`,
        ccv: data.cardCvv,
      },
    },
  }

  const response = await api.post<RegisterResponse>("/auth/register", payload)
  return response.data
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
