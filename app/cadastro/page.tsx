import { RegisterForm } from "@/components/register"
import { QueryProvider } from "@/lib/query-provider"
import { Header } from "@/components/header"
import Link from "next/link"
import type { Metadata } from "next"
import { ShieldCheck, Zap, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Cadastro | Exiby - Catálogo Virtual Inteligente",
  description:
    "Crie sua conta e comece a usar o catálogo virtual mais inteligente do mercado.",
}

const benefits = [
  {
    icon: Zap,
    title: "Configuração rápida",
    description: "Seu catálogo pronto em minutos",
  },
  {
    icon: Sparkles,
    title: "IA integrada",
    description: "Organização automática dos produtos",
  },
  {
    icon: ShieldCheck,
    title: "100% seguro",
    description: "Seus dados protegidos",
  },
]

export default function CadastroPage() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="flex min-h-[calc(100vh-80px)]">
            {/* Left Side - Form */}
            <div className="flex-1 flex flex-col bg-muted/30">
              <div className="flex-1 flex items-start lg:items-center justify-center px-4 py-8 lg:py-12">
                <div className="w-full max-w-2xl lg:max-w-xl">
                  <RegisterForm />

                  <p className="text-center text-sm text-muted-foreground mt-8">
                    Já tem uma conta?{" "}
                    <Link
                      href="/login"
                      className="text-primary hover:underline font-semibold"
                    >
                      Faça login
                    </Link>
                  </p>
                </div>
              </div>

              {/* Footer */}
              <footer className="border-t bg-background py-6">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2025 Exiby. Todos os direitos reservados.</p>
                    <p>
                      Ao criar sua conta, você concorda com nossos{" "}
                      <Link href="/termos" className="text-primary hover:underline">
                        Termos de Uso
                      </Link>{" "}
                      e{" "}
                      <Link href="/privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </Link>
                    </p>
                  </div>
                </div>
              </footer>
            </div>

            {/* Right Side - Hero (Desktop only) */}
            <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] bg-white border-l border-gray-100 relative">
              <div className="relative z-10 flex flex-col items-center justify-center px-12 xl:px-16 py-12 w-full">
                <h1 className="text-3xl xl:text-4xl font-bold text-[#2D68FF] mb-4 text-center">
                  Crie sua conta
                </h1>
                <p className="text-lg text-gray-600 mb-10 text-center max-w-md">
                  Em poucos passos você terá seu catálogo virtual pronto para vender
                </p>

                {/* Benefits - em linha */}
                <div className="flex gap-6 w-full max-w-lg">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center flex-1"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#2D68FF] flex items-center justify-center mb-3">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {benefit.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </QueryProvider>
  )
}
