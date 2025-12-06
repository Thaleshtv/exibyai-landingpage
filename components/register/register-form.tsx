"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
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
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  PartyPopper,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const steps = [
  { title: "Dados Pessoais", description: "Suas informações" },
  { title: "Seu Negócio", description: "Sobre sua loja" },
  { title: "Endereço", description: "Localização" },
  { title: "Pagamento", description: "Finalizar" },
]

const stepFields: Array<Array<keyof RegisterFormData>> = [
  ["name", "email", "documentType", "document"],
  ["businessName", "niche"],
  [
    "zipCode",
    "street",
    "number",
    "complement",
    "neighborhood",
    "city",
    "state",
    "phone",
  ],
  ["planId"],
]

export function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      documentType: "CPF",
    },
  })

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // Redireciona para o checkout do Asaas
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        throw new Error("Não foi possível gerar o link de pagamento. Tente novamente.")
      }
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
      setDirection("forward")
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setDirection("backward")
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const onSubmit = async (data: RegisterFormData) => {
    mutation.mutate(data)
  }

  if (isSuccess) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <PartyPopper className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Cadastro realizado!
            </h2>
            <p className="text-white/80">
              Bem-vindo à Exiby
            </p>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-muted-foreground mb-6">
              Seu pagamento está sendo processado. Você receberá um email de
              confirmação em breve com os próximos passos.
            </p>
            <Link href="/">
              <Button size="lg" className="w-full font-semibold">
                Voltar para o início
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
        {/* Card Principal */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden">
          {/* Progress Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-6 py-5 border-b">
            <StepProgress
              currentStep={currentStep}
              totalSteps={4}
              steps={steps}
            />
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            <div
              className={cn(
                "min-h-[420px] transition-all duration-300 ease-out",
                direction === "forward"
                  ? "animate-in slide-in-from-right-4 fade-in"
                  : "animate-in slide-in-from-left-4 fade-in"
              )}
              key={currentStep}
            >
              {currentStep === 1 && <Step1Personal />}
              {currentStep === 2 && <Step2Business />}
              {currentStep === 3 && <Step3Address />}
              {currentStep === 4 && <Step4Payment />}
            </div>

            {/* Error Message */}
            {mutation.isError && (
              <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 animate-in slide-in-from-top-2">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-red-800">
                    Erro ao processar
                  </p>
                  <p className="text-sm text-red-600 mt-1">
                    {mutation.error instanceof Error
                      ? mutation.error.message
                      : "Ocorreu um erro. Tente novamente."}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="px-6 md:px-8 py-5 bg-gray-50/50 border-t flex items-center justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={cn(
                "gap-2 rounded-xl h-12 px-6 font-medium transition-all",
                currentStep === 1 && "opacity-0 pointer-events-none"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{currentStep}</span>
              <span>/</span>
              <span>4</span>
            </div>

            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="gap-2 rounded-xl h-12 px-8 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Continuar
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="gap-2 rounded-xl h-12 px-8 font-semibold min-w-[180px] shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Redirecionando...
                  </>
                ) : (
                  <>
                    Ir para pagamento
                    <ExternalLink className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
          <svg
            className="w-4 h-4 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span>Seus dados estão protegidos com criptografia SSL</span>
        </div>
      </form>
    </FormProvider>
  )
}
