import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Exiby - Catálogo Virtual Inteligente com IA",
  description:
    "Crie seu catálogo virtual inteligente. IA que organiza produtos, analisa qualidade de fotos e controla estoque. Vendas direto pelo WhatsApp. 100% White Label.",
  keywords: ["catálogo virtual", "IA", "WhatsApp", "vendas online", "e-commerce", "white label"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
