import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-r from-[#2D68FF] via-[#4A7FFF] to-[#5A8BFF]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      <div className="container mx-auto px-4 py-8 md:py-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 md:mb-4">
              <img
                src="/logo-branca.png"
                alt="Exiby"
                className="h-6 md:h-7 w-auto"
              />
            </Link>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Catálogo virtual inteligente com IA para empreendedores. 100% White Label.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm md:text-base mb-3 md:mb-4">Produto</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="#recursos"
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="#precos"
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link
                  href="#como-funciona"
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm md:text-base mb-3 md:mb-4">Empresa</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/sobre"
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm md:text-base mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/termos"
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 md:mt-10 pt-5 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-white/70">
            © 2025 Exiby. Todos os direitos reservados.
          </p>
          <p className="text-xs md:text-sm text-white/70">
            Feito com tecnologia para empreendedores
          </p>
        </div>
      </div>
    </footer>
  )
}
