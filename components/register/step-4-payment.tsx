"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormField } from "./form-field"
import { maskCardNumber, maskCardExpiry, maskCVV } from "@/lib/masks"
import type { RegisterFormData } from "@/lib/schemas/register-schema"
import { CreditCard, Lock, ShieldCheck } from "lucide-react"

export function Step4Payment() {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<RegisterFormData>()

  const cardNumber = watch("cardNumber")

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskCardNumber(e.target.value)
    setValue("cardNumber", masked, { shouldValidate: true })
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskCardExpiry(e.target.value)
    setValue("cardExpiry", masked, { shouldValidate: true })
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskCVV(e.target.value)
    setValue("cardCvv", masked, { shouldValidate: true })
  }

  // Detectar bandeira do cartão
  const getCardBrand = () => {
    const cleanNumber = cardNumber?.replace(/\D/g, "") || ""
    if (cleanNumber.startsWith("4")) return "Visa"
    if (/^5[1-5]/.test(cleanNumber)) return "Mastercard"
    if (/^3[47]/.test(cleanNumber)) return "Amex"
    if (/^6(?:011|5)/.test(cleanNumber)) return "Discover"
    if (/^(?:2131|1800|35)/.test(cleanNumber)) return "JCB"
    return null
  }

  const cardBrand = getCardBrand()

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Pagamento</h2>
        <p className="text-muted-foreground mt-2">
          Finalize seu cadastro com segurança
        </p>
      </div>

      {/* Plano Info */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-foreground">Plano Pro</h3>
            <p className="text-sm text-muted-foreground">
              Acesso completo a todas as funcionalidades
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">R$ 49,90</p>
            <p className="text-xs text-muted-foreground">/mês</p>
          </div>
        </div>
      </div>

      <FormField
        label="Nome no cartão"
        error={errors.cardHolderName?.message}
        required
      >
        <Input
          {...register("cardHolderName")}
          placeholder="Como está impresso no cartão"
          className="uppercase"
          error={!!errors.cardHolderName}
        />
      </FormField>

      <FormField
        label="Número do cartão"
        error={errors.cardNumber?.message}
        required
      >
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            value={cardNumber || ""}
            onChange={handleCardNumberChange}
            placeholder="0000 0000 0000 0000"
            className="pl-10"
            error={!!errors.cardNumber}
          />
          {cardBrand && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">
              {cardBrand}
            </span>
          )}
        </div>
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Validade" error={errors.cardExpiry?.message} required>
          <Input
            {...register("cardExpiry")}
            onChange={handleExpiryChange}
            placeholder="MM/AA"
            error={!!errors.cardExpiry}
          />
        </FormField>

        <FormField label="CVV" error={errors.cardCvv?.message} required>
          <div className="relative">
            <Input
              {...register("cardCvv")}
              onChange={handleCvvChange}
              placeholder="000"
              type="password"
              error={!!errors.cardCvv}
            />
            <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </FormField>
      </div>

      {/* Security badges */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span>Pagamento seguro</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Lock className="w-4 h-4 text-green-600" />
          <span>Dados criptografados</span>
        </div>
      </div>
    </div>
  )
}
