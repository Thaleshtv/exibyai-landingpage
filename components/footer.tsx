import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Exibyai</span>
            </Link>
            <p className="text-sm text-muted-foreground">Catálogo virtual inteligente com IA para empreendedores.</p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Produto</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#recursos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#precos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/termos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Termos
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2025 Exibyai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
