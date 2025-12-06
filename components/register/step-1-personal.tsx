"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { FormField } from "./form-field"
import { maskDocument } from "@/lib/masks"
import type { RegisterFormData } from "@/lib/schemas/register-schema"
import { User, Mail, FileText } from "lucide-react"

export function Step1Personal() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<RegisterFormData>()

  const documentType = watch("documentType")

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskDocument(e.target.value, documentType || "CPF")
    setValue("document", masked, { shouldValidate: true })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Seus Dados</h2>
        <p className="text-muted-foreground mt-2">
          Comece informando seus dados pessoais
        </p>
      </div>

      <FormField label="Nome completo" error={errors.name?.message} required>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            {...register("name")}
            placeholder="Seu nome completo"
            className="pl-10"
            error={!!errors.name}
          />
        </div>
      </FormField>

      <FormField label="Email" error={errors.email?.message} required>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            {...register("email")}
            type="email"
            placeholder="seu@email.com"
            className="pl-10"
            error={!!errors.email}
          />
        </div>
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          label="Tipo de documento"
          error={errors.documentType?.message}
          required
        >
          <Select {...register("documentType")} error={!!errors.documentType}>
            <option value="">Selecione</option>
            <option value="CPF">CPF</option>
            <option value="CNPJ">CNPJ</option>
          </Select>
        </FormField>

        <FormField
          label={documentType === "CNPJ" ? "CNPJ" : "CPF"}
          error={errors.document?.message}
          required
          className="md:col-span-2"
        >
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              {...register("document")}
              onChange={handleDocumentChange}
              placeholder={documentType === "CNPJ" ? "00.000.000/0000-00" : "000.000.000-00"}
              className="pl-10"
              error={!!errors.document}
            />
          </div>
        </FormField>
      </div>
    </div>
  )
}
