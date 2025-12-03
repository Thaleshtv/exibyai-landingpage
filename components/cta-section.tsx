import { Button } from "@/components/ui/button"
import Link from "next/link"

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-primary rounded-2xl p-10 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Pronto para transformar seu catálogo?
          </h2>

          <p className="text-primary-foreground/80 mb-8 text-lg">
            Junte-se a mais de 2.500 empreendedores. Teste grátis por 14 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base px-8">
              <Link href="/cadastro">
                Criar Conta Grátis
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#demo">Ver Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
