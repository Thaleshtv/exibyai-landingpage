"use client"

import { useFormContext } from "react-hook-form"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { FormField } from "./form-field"
import { maskCEP, maskPhone } from "@/lib/masks"
import { fetchAddressByCep } from "@/lib/api"
import type { RegisterFormData } from "@/lib/schemas/register-schema"
import { MapPin, Phone, Loader2 } from "lucide-react"

const brazilianStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
]

export function Step3Address() {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<RegisterFormData>()

  const [isLoadingCep, setIsLoadingCep] = useState(false)
  const zipCode = watch("zipCode")

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskCEP(e.target.value)
    setValue("zipCode", masked, { shouldValidate: true })

    const cleanCep = masked.replace(/\D/g, "")
    if (cleanCep.length === 8) {
      setIsLoadingCep(true)
      const address = await fetchAddressByCep(cleanCep)
      setIsLoadingCep(false)

      if (address) {
        setValue("street", address.logradouro, { shouldValidate: true })
        setValue("neighborhood", address.bairro, { shouldValidate: true })
        setValue("city", address.localidade, { shouldValidate: true })
        setValue("state", address.uf, { shouldValidate: true })
      }
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value)
    setValue("phone", masked, { shouldValidate: true })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Endereço</h2>
        <p className="text-muted-foreground mt-2">
          Informe o endereço para emissão de notas fiscais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="CEP" error={errors.zipCode?.message} required>
          <div className="relative">
            <Input
              value={zipCode || ""}
              onChange={handleCepChange}
              placeholder="00000-000"
              error={!!errors.zipCode}
            />
            {isLoadingCep && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-primary" />
            )}
          </div>
        </FormField>

        <FormField
          label="Rua"
          error={errors.street?.message}
          required
          className="md:col-span-2"
        >
          <Input
            {...register("street")}
            placeholder="Nome da rua"
            error={!!errors.street}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="Número" error={errors.number?.message} required>
          <Input
            {...register("number")}
            placeholder="123"
            error={!!errors.number}
          />
        </FormField>

        <FormField
          label="Complemento"
          error={errors.complement?.message}
          className="md:col-span-2"
        >
          <Input
            {...register("complement")}
            placeholder="Apto, sala, etc. (opcional)"
            error={!!errors.complement}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField label="Bairro" error={errors.neighborhood?.message} required>
          <Input
            {...register("neighborhood")}
            placeholder="Bairro"
            error={!!errors.neighborhood}
          />
        </FormField>

        <FormField label="Cidade" error={errors.city?.message} required>
          <Input
            {...register("city")}
            placeholder="Cidade"
            error={!!errors.city}
          />
        </FormField>

        <FormField label="Estado" error={errors.state?.message} required>
          <Input
            {...register("state")}
            placeholder="UF"
            maxLength={2}
            className="uppercase"
            error={!!errors.state}
            list="states"
          />
          <datalist id="states">
            {brazilianStates.map((state) => (
              <option key={state} value={state} />
            ))}
          </datalist>
        </FormField>
      </div>

      <FormField label="Telefone/WhatsApp" error={errors.phone?.message} required>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            {...register("phone")}
            onChange={handlePhoneChange}
            placeholder="(00) 00000-0000"
            className="pl-10"
            error={!!errors.phone}
          />
        </div>
      </FormField>
    </div>
  )
}
