import { Button } from "@/components/ui/button"
import Link from "next/link"

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

const plan = {
  name: "Pro",
  price: "R$ 119,90",
  period: "/mês",
  description: "Tudo que você precisa para vender mais",
  features: [
    "Produtos ilimitados",
    "Análise avançada com IA",
    "Organização inteligente",
    "Controle de estoque completo",
    "Relatórios detalhados",
    "Integração WhatsApp",
    "Suporte prioritário",
    "Domínio personalizado",
  ],
}

export function PricingSection() {
  return (
    <section id="precos" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Plano simples e transparente
          </h2>
          <p className="text-muted-foreground text-lg">Experimente grátis por 7 dias. Sem compromisso.</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl border-2 border-primary bg-card shadow-xl shadow-primary/10 p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full">
                7 dias grátis
              </span>
            </div>

            <div className="text-center mb-6 pt-2">
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <div className="text-center mb-8">
              <span className="text-5xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground text-lg">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full h-12 text-base font-semibold" size="lg" asChild>
              <Link href="/cadastro">Começar Avaliação Gratuita</Link>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Sem cartão de crédito. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
