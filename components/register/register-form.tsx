"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StepProgress } from "./step-progress"
import { Step1Personal } from "./step-1-personal"
import { Step2Business } from "./step-2-business"
import { Step3Address } from "./step-3-address"
import { Step4Payment } from "./step-4-payment"
import {
  registerSchema,
  type RegisterFormData,
} from "@/lib/schemas/register-schema"
import { registerUser } from "@/lib/api"
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"

const steps = [
  { title: "Dados Pessoais", description: "Suas informações" },
  { title: "Seu Negócio", description: "Sobre sua loja" },
  { title: "Endereço", description: "Localização" },
  { title: "Pagamento", description: "Finalizar" },
]

const stepFields: Array<Array<keyof RegisterFormData>> = [
  ["name", "email", "documentType", "document"],
  ["businessName", "niche"],
  ["zipCode", "street", "number", "complement", "neighborhood", "city", "state", "phone"],
  ["cardHolderName", "cardNumber", "cardExpiry", "cardCvv"],
]

export function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)

  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      documentType: "CPF",
    },
  })

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setIsSuccess(true)
    },
  })

  const validateCurrentStep = async () => {
    const fields = stepFields[currentStep - 1]
    const isValid = await methods.trigger(fields)
    return isValid
  }

  const handleNext = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const onSubmit = async (data: RegisterFormData) => {
    mutation.mutate(data)
  }

  if (isSuccess) {
    return (
      <Card className="max-w-lg mx-auto">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Cadastro realizado!
          </h2>
          <p className="text-muted-foreground mb-6">
            Seu pagamento está sendo processado. Você receberá um email de
            confirmação em breve.
          </p>
          <Link href="/">
            <Button>Voltar para o início</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-8">
            <StepProgress
              currentStep={currentStep}
              totalSteps={4}
              steps={steps}
            />

            <div className="min-h-[400px]">
              {currentStep === 1 && <Step1Personal />}
              {currentStep === 2 && <Step2Business />}
              {currentStep === 3 && <Step3Address />}
              {currentStep === 4 && <Step4Payment />}
            </div>

            {mutation.isError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-800">Erro ao processar</p>
                  <p className="text-sm text-red-600">
                    {mutation.error instanceof Error
                      ? mutation.error.message
                      : "Ocorreu um erro. Tente novamente."}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>

              {currentStep < 4 ? (
                <Button type="button" onClick={handleNext} className="gap-2">
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="gap-2 min-w-[160px]"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      Finalizar cadastro
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  )
}
