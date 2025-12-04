import { Button } from "@/components/ui/button"
import Link from "next/link"

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

function SparklesIcon({ className }: { className?: string }) {
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

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D68FF]/5 via-[#4A7FFF]/5 to-[#5A8BFF]/5" />

      {/* Decorative shapes with gradients */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#2D68FF] to-[#4A7FFF] rounded-full blur-3xl opacity-20" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-[#4A7FFF] to-[#5A8BFF] rounded-full blur-2xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-[#5A8BFF] to-[#2D68FF] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-40 left-32 w-32 h-32 bg-gradient-to-br from-[#2D68FF] to-[#5A8BFF] rounded-full blur-2xl opacity-25" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-[#4A7FFF] to-[#5A8BFF] rounded-2xl blur-xl opacity-30 rotate-45" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-[#2D68FF] to-[#4A7FFF] rounded-xl blur-lg opacity-40 -rotate-12" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 text-sm text-primary font-medium">
            <SparklesIcon className="h-4 w-4" />
            100% White Label para sua marca
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance leading-[1.1]">
            O catálogo inteligente que{" "}
            <span className="gradient-text">vende por você</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 text-pretty leading-relaxed">
            IA que organiza produtos, analisa qualidade de fotos e sugere promoções.
            Vendas direto pelo WhatsApp.
          </p>

          {/* Price highlight */}
          <div className="flex items-center gap-2 mb-10">
            <span className="text-2xl md:text-3xl font-bold text-foreground">R$ 119,90</span>
            <span className="text-muted-foreground">/mês</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" asChild className="text-base px-8 h-12 shadow-lg shadow-primary/25 bg-gradient-to-r from-[#2D68FF] to-[#5A8BFF] hover:opacity-90 border-0">
              <Link href="/cadastro">
                Assinar Agora
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 h-12">
              <Link href="#como-funciona">
                Como Funciona
              </Link>
            </Button>
          </div>

          {/* App Preview */}
          <div className="w-full max-w-5xl">
            <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">seudominio.com.br</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Photo Analysis Card */}
                  <div className="bg-muted/30 rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-foreground">Análise de Foto</span>
                      <span className="text-xs bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full font-semibold">
                        9.2/10
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-3">
                      <div className="bg-gradient-to-r from-[#2D68FF] to-[#5A8BFF] h-2 rounded-full" style={{ width: "92%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground">Dica IA: Melhore a iluminação lateral</p>
                  </div>

                  {/* Stock Card */}
                  <div className="bg-muted/30 rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
                    <span className="text-sm font-semibold text-foreground block mb-4">Estoque Inteligente</span>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Camiseta Azul</span>
                        <span className="font-semibold text-foreground">24 un</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Calça Jeans</span>
                        <span className="font-semibold text-foreground">5 un</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tênis Branco</span>
                        <span className="font-semibold text-foreground">2 un</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Card */}
                  <div className="bg-muted/30 rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-semibold text-foreground">WhatsApp</span>
                    </div>
                    <div className="bg-green-500/10 rounded-lg px-3 py-2 text-xs text-green-700 font-medium mb-3">
                      Novo pedido recebido!
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground">12 vendas hoje</span>
                      <span className="text-xl font-bold text-foreground">R$ 2.450</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
