import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vitrine do Imóvel | Imóveis de Alto Padrão em Balneário Camboriú",
  description:
    "Encontre imóveis de alto padrão em Balneário Camboriú e região. Apartamentos, casas e coberturas com vista para o mar.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-foreground`}>{children}</body>
    </html>
  )
}
