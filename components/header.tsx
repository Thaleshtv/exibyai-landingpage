"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface IconProps {
  className?: string
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

interface HeaderProps {
  variant?: "default" | "dark"
}

export function Header({ variant = "default" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isDark = variant === "dark"

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md",
        isDark
          ? "border-gray-700/50 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
          : "border-white/10 bg-gradient-to-r from-[#2D68FF] via-[#4A7FFF] to-[#5A8BFF]"
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 relative">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo-branca.png"
            alt="Exiby"
            className="h-6 md:h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#recursos"
            className="text-sm font-bold text-white/90 hover:text-white transition-colors"
          >
            Recursos
          </Link>
          <Link
            href="/#como-funciona"
            className="text-sm font-bold text-white/90 hover:text-white transition-colors"
          >
            Como Funciona
          </Link>
          <Link
            href="/#precos"
            className="text-sm font-bold text-white/90 hover:text-white transition-colors"
          >
            Preços
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="font-bold text-white/90 hover:text-white hover:bg-white/10">
            <Link href="https://admin.exibyai.com">Entrar</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className={cn(
              "font-semibold shadow-lg border-0",
              isDark
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-[#2D68FF] hover:bg-white/90"
            )}
          >
            <Link href="/cadastro">Assinar</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className={cn(
            "md:hidden border-t backdrop-blur-md",
            isDark
              ? "border-gray-700/50 bg-gray-800/95"
              : "border-white/10 bg-[#4A7FFF]/95"
          )}
        >
          <nav className="flex flex-col p-4 gap-1">
            <Link
              href="/#recursos"
              className="text-sm font-bold text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link
              href="/#como-funciona"
              className="text-sm font-bold text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link
              href="/#precos"
              className="text-sm font-bold text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preços
            </Link>
            <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-white/10">
              <Button variant="ghost" asChild className="justify-start font-bold text-white/90 hover:text-white hover:bg-white/10">
                <Link href="https://admin.exibyai.com">Entrar</Link>
              </Button>
              <Button
                asChild
                className={cn(
                  "font-semibold",
                  isDark
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-[#2D68FF] hover:bg-white/90"
                )}
              >
                <Link href="/cadastro">Assinar</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
