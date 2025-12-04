import { Button } from "@/components/ui/button"
import Link from "next/link"

interface IconProps {
  className?: string
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CreditCardIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  )
}

interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
}

const plan: Plan = {
  name: "Plano Completo",
  price: "R$ 119,90",
  period: "/mês",
  description: "Tudo que você precisa para vender mais com IA",
  features: [
    "Produtos ilimitados",
    "Análise de fotos com IA",
    "Categorização inteligente",
    "Sugestões de promoções",
    "Controle de estoque",
    "Relatórios e insights",
    "Integração WhatsApp",
    "100% White Label",
    "Suporte prioritário",
  ],
}

export function PricingSection() {
  return (
    <section id="precos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Plano simples e transparente
          </h2>
          <p className="text-muted-foreground text-lg">
            Assinatura mensal com acesso a todos os recursos
          </p>
        </div>

        <div className="max-w-lg mx-auto pt-4">
          <div className="relative rounded-3xl border-2 border-primary bg-card shadow-2xl shadow-primary/10 p-8 md:p-10">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2D68FF]/10 to-[#5A8BFF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D68FF] to-[#5A8BFF] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                <CreditCardIcon className="h-4 w-4" />
                Assinatura mensal
              </span>
            </div>

            <div className="text-center mb-8 pt-4 relative">
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <div className="text-center mb-8 relative">
              <span className="text-6xl font-extrabold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground text-xl">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8 relative">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2D68FF] to-[#5A8BFF] flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full h-14 text-base font-bold shadow-lg shadow-primary/25" size="lg" asChild>
              <Link href="/cadastro">Assinar Agora</Link>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Pagamento seguro via cartão de crédito
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
