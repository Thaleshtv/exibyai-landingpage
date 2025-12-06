import { Header } from "@/components/header"
import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle2, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pagamento Confirmado | Exiby",
  description: "Seu pagamento foi processado com sucesso.",
}

export default function SucessoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Pagamento confirmado!
              </h1>
              <p className="text-white/80">
                Bem-vindo à Exiby
              </p>
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Verifique seu email
              </h2>
              <p className="text-muted-foreground mb-6">
                Enviamos um email com sua senha de acesso e instruções para começar a usar sua conta. A ativação pode levar alguns minutos.
              </p>
              <div className="space-y-3">
                <Link href="https://app.exiby.com.br" className="block">
                  <Button size="lg" className="w-full font-semibold gap-2">
                    Acessar minha conta
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="w-full font-semibold">
                    Voltar para o início
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
