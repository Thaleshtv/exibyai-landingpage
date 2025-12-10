interface IconProps {
  className?: string
}

function UploadIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
      />
    </svg>
  )
}

function SparklesIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  )
}

function ShareIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  )
}

function TrendingUpIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}

interface Step {
  icon: React.ComponentType<IconProps>
  step: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: UploadIcon,
    step: "1",
    title: "Cadastre Produtos",
    description: "Adicione fotos e informações. A IA analisa e dá dicas de melhoria.",
  },
  {
    icon: SparklesIcon,
    step: "2",
    title: "IA Organiza",
    description: "Categorização automática e otimização do seu catálogo.",
  },
  {
    icon: ShareIcon,
    step: "3",
    title: "Compartilhe",
    description: "Envie o link do seu catálogo via WhatsApp ou redes sociais.",
  },
  {
    icon: TrendingUpIcon,
    step: "4",
    title: "Venda Mais",
    description: "Clientes interessados são direcionados para o seu WhatsApp para finalizar a compra.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Comece a vender em minutos
          </h2>
          <p className="text-muted-foreground text-lg">
            Em 4 passos simples você terá um catálogo profissional funcionando
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2D68FF]/10 to-[#5A8BFF]/10 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/5">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#2D68FF] to-[#5A8BFF] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
