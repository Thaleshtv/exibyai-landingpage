import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Exibyai - Catálogo Virtual com Inteligência Artificial",
  description:
    "Crie seu catálogo virtual inteligente. IA que organiza produtos, analisa qualidade de fotos e controla estoque. Vendas direto pelo WhatsApp.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
