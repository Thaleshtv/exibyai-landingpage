import { Header } from "@/components/header"
import Link from "next/link"
import type { Metadata } from "next"
import { Clock, ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sessão Expirada | Exiby",
  description: "A sessão de pagamento expirou.",
}

export default function ExpiradoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-gray-500 to-slate-600 p-8 text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Sessão expirada
              </h1>
              <p className="text-white/80">
                O tempo para completar o pagamento acabou
              </p>
            </div>
            <div className="p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Por segurança, a sessão de pagamento tem um tempo limite. Não se preocupe, você pode iniciar um novo processo de cadastro e pagamento.
              </p>
              <div className="space-y-3">
                <Link href="/cadastro">
                  <Button size="lg" className="w-full font-semibold gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Iniciar novo cadastro
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="w-full font-semibold gap-2">
                    <ArrowLeft className="w-4 h-4" />
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
