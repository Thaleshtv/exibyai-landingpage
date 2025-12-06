"use client"

import { useFormContext } from "react-hook-form"
import { useQuery } from "@tanstack/react-query"
import { FormField } from "./form-field"
import type { RegisterFormData } from "@/lib/schemas/register-schema"
import { fetchPlans, type Plan } from "@/lib/api"
import { CreditCard, Check, Loader2, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceInCents / 100)
}

export function Step4Payment() {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<RegisterFormData>()

  const selectedPlanId = watch("planId")

  const { data: plans, isLoading: isLoadingPlans } = useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  })

  const selectedPlan = plans?.find((p) => p.planId === selectedPlanId)

  const handlePlanSelect = (plan: Plan) => {
    setValue("planId", plan.planId, { shouldValidate: true })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Escolha seu plano</h2>
        <p className="text-muted-foreground mt-2">
          Selecione o plano ideal para o seu negócio
        </p>
      </div>

      {/* Seleção de Plano */}
      <FormField
        label="Planos disponíveis"
        error={errors.planId?.message}
        required
      >
        {isLoadingPlans ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Carregando planos...</span>
          </div>
        ) : (
          <div className="space-y-3">
            {plans?.map((plan) => (
              <button
                key={plan.planId}
                type="button"
                onClick={() => handlePlanSelect(plan)}
                className={cn(
                  "w-full p-4 rounded-xl border-2 text-left transition-all",
                  selectedPlanId === plan.planId
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50 bg-white"
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">
                        {plan.name}
                      </h3>
                      {selectedPlanId === plan.planId && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {plan.limits.products} produtos
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {plan.limits.imagesPerProduct} fotos/produto
                      </span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-xl font-bold text-primary">
                      {formatPrice(plan.price)}
                    </p>
                    <p className="text-xs text-muted-foreground">/mês</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
        <input type="hidden" {...register("planId")} />
      </FormField>

      {/* Resumo do Plano Selecionado */}
      {selectedPlan && (
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Plano selecionado</p>
              <h3 className="font-semibold text-foreground">{selectedPlan.name}</h3>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">
                {formatPrice(selectedPlan.price)}
              </p>
              <p className="text-xs text-muted-foreground">/mês</p>
            </div>
          </div>
        </div>
      )}

      {/* Info sobre o pagamento */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-900">
              Pagamento seguro via Asaas
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Ao finalizar, você poderá inserir os dados do seu cartão de forma segura, sem sair desta página.
            </p>
          </div>
        </div>
      </div>

      {/* Security badges */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span>Checkout seguro</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CreditCard className="w-4 h-4 text-green-600" />
          <span>Powered by Asaas</span>
        </div>
      </div>
    </div>
  )
}
