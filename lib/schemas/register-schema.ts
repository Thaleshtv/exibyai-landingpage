import { z } from "zod"

// Validação de CPF
function isValidCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, "")
  if (cleaned.length !== 11) return false
  if (/^(\d)\1+$/.test(cleaned)) return false

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned[i]) * (10 - i)
  }
  let remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleaned[9])) return false

  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned[i]) * (11 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  return remainder === parseInt(cleaned[10])
}

// Validação de CNPJ
function isValidCNPJ(cnpj: string): boolean {
  const cleaned = cnpj.replace(/\D/g, "")
  if (cleaned.length !== 14) return false
  if (/^(\d)\1+$/.test(cleaned)) return false

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  let sum = 0
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleaned[i]) * weights1[i]
  }
  let remainder = sum % 11
  const digit1 = remainder < 2 ? 0 : 11 - remainder

  if (digit1 !== parseInt(cleaned[12])) return false

  sum = 0
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleaned[i]) * weights2[i]
  }
  remainder = sum % 11
  const digit2 = remainder < 2 ? 0 : 11 - remainder

  return digit2 === parseInt(cleaned[13])
}

// Validação de cartão Luhn
function isValidCardNumber(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\D/g, "")
  if (cleaned.length < 13 || cleaned.length > 19) return false

  let sum = 0
  let isEven = false

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i])

    if (isEven) {
      digit *= 2
      if (digit > 9) digit -= 9
    }

    sum += digit
    isEven = !isEven
  }

  return sum % 10 === 0
}

// Step 1: Dados Pessoais
export const step1Schema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  email: z.string().email("Email inválido"),
  documentType: z.enum(["CPF", "CNPJ"], {
    required_error: "Selecione o tipo de documento",
  }),
  document: z.string().min(1, "Documento é obrigatório"),
})

export const step1SchemaRefined = step1Schema.refine(
  (data) => {
    const cleaned = data.document.replace(/\D/g, "")
    if (data.documentType === "CPF") {
      return isValidCPF(cleaned)
    }
    return isValidCNPJ(cleaned)
  },
  {
    message: "Documento inválido",
    path: ["document"],
  }
)

// Step 2: Sobre o Negócio
export const step2Schema = z.object({
  businessName: z
    .string()
    .min(2, "Nome da loja deve ter pelo menos 2 caracteres"),
  niche: z.enum(
    [
      "moda_feminina",
      "moda_masculina",
      "moda_infantil",
      "calcados",
      "acessorios",
      "outros",
    ],
    { required_error: "Selecione um nicho" }
  ),
})

// Step 3: Endereço
export const step3Schema = z.object({
  zipCode: z
    .string()
    .min(8, "CEP inválido")
    .regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
  street: z.string().min(3, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().min(2, "Bairro é obrigatório"),
  city: z.string().min(2, "Cidade é obrigatória"),
  state: z
    .string()
    .length(2, "Estado deve ter 2 caracteres")
    .regex(/^[A-Z]{2}$/, "Estado inválido"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .regex(/^\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4}$/, "Telefone inválido"),
})

// Step 4: Pagamento
export const step4Schema = z.object({
  cardHolderName: z
    .string()
    .min(3, "Nome do titular é obrigatório")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  cardNumber: z.string().min(13, "Número do cartão inválido"),
  cardExpiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Validade inválida (MM/AA)"),
  cardCvv: z
    .string()
    .min(3, "CVV inválido")
    .max(4, "CVV inválido")
    .regex(/^\d+$/, "CVV deve conter apenas números"),
})

export const step4SchemaRefined = step4Schema.refine(
  (data) => isValidCardNumber(data.cardNumber),
  {
    message: "Número do cartão inválido",
    path: ["cardNumber"],
  }
)

// Schema completo
export const registerSchema = z
  .object({
    ...step1Schema.shape,
    ...step2Schema.shape,
    ...step3Schema.shape,
    ...step4Schema.shape,
  })
  .refine(
    (data) => {
      const cleaned = data.document.replace(/\D/g, "")
      if (data.documentType === "CPF") {
        return isValidCPF(cleaned)
      }
      return isValidCNPJ(cleaned)
    },
    {
      message: "Documento inválido",
      path: ["document"],
    }
  )
  .refine((data) => isValidCardNumber(data.cardNumber), {
    message: "Número do cartão inválido",
    path: ["cardNumber"],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type Step4Data = z.infer<typeof step4Schema>
