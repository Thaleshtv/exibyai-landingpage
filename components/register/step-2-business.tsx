"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { FormField } from "./form-field"
import type { RegisterFormData } from "@/lib/schemas/register-schema"
import { Store, Tag } from "lucide-react"

const nicheOptions = [
  { value: "moda_feminina", label: "Moda Feminina" },
  { value: "moda_masculina", label: "Moda Masculina" },
  { value: "moda_infantil", label: "Moda Infantil" },
  { value: "calcados", label: "Calçados" },
  { value: "acessorios", label: "Acessórios" },
  { value: "outros", label: "Outros" },
]

export function Step2Business() {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormData>()

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Store className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Sobre seu Negócio</h2>
        <p className="text-muted-foreground mt-2">
          Conte-nos sobre sua loja para personalizar sua experiência
        </p>
      </div>

      <FormField
        label="Nome da loja/empresa"
        error={errors.businessName?.message}
        required
      >
        <div className="relative">
          <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            {...register("businessName")}
            placeholder="Nome que aparecerá para seus clientes"
            className="pl-10"
            error={!!errors.businessName}
          />
        </div>
      </FormField>

      <FormField label="Nicho de mercado" error={errors.niche?.message} required>
        <div className="relative">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
          <Select
            {...register("niche")}
            className="pl-10"
            error={!!errors.niche}
          >
            <option value="">Selecione seu nicho</option>
            {nicheOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      </FormField>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Dica:</strong> O nicho ajuda a IA
          a sugerir categorias e organizar seus produtos de forma mais
          inteligente.
        </p>
      </div>
    </div>
  )
}
