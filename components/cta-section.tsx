import { Button } from "@/components/ui/button"
import Link from "next/link"

interface IconProps {
  className?: string
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

export function CtaSection() {
  return (
    <section className="py-12 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto text-center rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D68FF] via-[#4A7FFF] to-[#5A8BFF]" />

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative p-6 md:p-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 rounded-full mb-4 md:mb-6">
              <SparklesIcon className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
              <span className="text-white text-xs md:text-sm font-medium">Comece agora mesmo</span>
            </div>

            <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-3 md:mb-4 text-balance">
              Pronto para transformar seu catálogo?
            </h2>

            <p className="text-white/90 mb-6 md:mb-8 text-sm md:text-lg max-w-xl mx-auto">
              Assine agora e tenha acesso a todas as funcionalidades de IA para impulsionar suas vendas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="text-sm md:text-base px-6 md:px-8 h-11 md:h-12 bg-white text-[#2D68FF] hover:bg-white/90 font-bold shadow-xl"
              >
                <Link href="/cadastro">
                  Assinar por R$ 119,90/mês
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-sm md:text-base px-6 md:px-8 h-11 md:h-12 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#recursos">Ver Recursos</Link>
              </Button>
            </div>

            <p className="mt-6 md:mt-8 text-white/70 text-xs md:text-sm">
              Pagamento seguro via cartão de crédito
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
