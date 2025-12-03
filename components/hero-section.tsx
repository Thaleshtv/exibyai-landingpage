import { Button } from "@/components/ui/button"
import Link from "next/link"

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-8 text-sm text-primary font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Novo: Análise de fotos com IA
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance leading-[1.1]">
            O catálogo inteligente para quem vende pelo <span className="text-primary">WhatsApp</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty leading-relaxed">
            Organize produtos com IA, receba notas de qualidade para suas fotos e gerencie seu estoque. Tudo integrado
            com WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button size="lg" asChild className="text-base px-8 h-12">
              <Link href="/cadastro">
                Começar Grátis
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 h-12 bg-transparent">
              <Link href="#demo">
                <PlayIcon className="mr-2 h-4 w-4" />
                Ver Demo
              </Link>
            </Button>
          </div>

          <div className="w-full max-w-5xl">
            <div className="bg-card border border-border rounded-xl shadow-2xl shadow-primary/5 overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">app.exibyai.com</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-muted/30 rounded-lg p-5 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-foreground">Análise de Foto</span>
                      <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-medium">
                        9.2/10
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 mb-3">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "92%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground">Dica: Melhore a iluminação lateral</p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5 border border-border">
                    <span className="text-sm font-medium text-foreground block mb-4">Estoque</span>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Camiseta Azul</span>
                        <span className="font-medium text-foreground">24 un</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Calça Jeans</span>
                        <span className="font-medium text-yellow-600">5 un</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tênis Branco</span>
                        <span className="font-medium text-red-600">2 un</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-foreground">WhatsApp</span>
                    </div>
                    <div className="bg-green-500/10 rounded-lg px-3 py-2 text-xs text-green-700 mb-3">
                      Novo pedido recebido!
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground">12 vendas hoje</span>
                      <span className="text-lg font-bold text-foreground">R$ 2.450</span>
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
