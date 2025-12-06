import { RegisterForm } from "@/components/register"
import { QueryProvider } from "@/lib/query-provider"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cadastro | Exiby - Catálogo Virtual Inteligente",
  description:
    "Crie sua conta e comece a usar o catálogo virtual mais inteligente do mercado.",
}

export default function CadastroPage() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Header */}
        <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Exiby"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Crie sua conta
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Em poucos passos você terá seu catálogo virtual pronto para vender
            </p>
          </div>

          <RegisterForm />

          <p className="text-center text-sm text-muted-foreground mt-8">
            Já tem uma conta?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Faça login
            </a>
          </p>
        </main>

        {/* Footer */}
        <footer className="border-t mt-auto py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>
              Ao criar sua conta, você concorda com nossos{" "}
              <a href="#" className="text-primary hover:underline">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="#" className="text-primary hover:underline">
                Política de Privacidade
              </a>
            </p>
          </div>
        </footer>
      </div>
    </QueryProvider>
  )
}
