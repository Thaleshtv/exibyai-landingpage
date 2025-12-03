"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">E</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Exibyai</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#recursos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </Link>
          <Link href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </Link>
          <Link href="#precos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </Link>
          <Link href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/cadastro">Começar Grátis</Link>
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="#recursos" className="text-sm text-muted-foreground hover:text-foreground">
              Recursos
            </Link>
            <Link href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground">
              Como Funciona
            </Link>
            <Link href="#precos" className="text-sm text-muted-foreground hover:text-foreground">
              Preços
            </Link>
            <Link href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground">
              Depoimentos
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/login">Entrar</Link>
              </Button>
              <Button asChild>
                <Link href="/cadastro">Começar Grátis</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
