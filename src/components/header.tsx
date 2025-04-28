"use client"

import Link from "next/link"
import { Building2, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Building2 className="h-6 w-6" />
          <span>Vitrine do Imóvel BC</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Início
          </Link>
          <Link href="#imoveis" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Imóveis
          </Link>
          <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Sobre Nós
          </Link>
          <Link href="#contato" className="text-sm font-medium transition-colors hover:text-foreground/80">
            Contato
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-1">
            <Phone className="h-4 w-4" />
            (47) 99101-0311
          </Button>
          <Button size="sm">Agende uma Visita</Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold" onClick={() => setIsOpen(false)}>
                <Building2 className="h-6 w-6" />
                <span>Vitrine do Imóvel</span>
              </Link>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="#imoveis"
                  className="text-sm font-medium transition-colors hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Imóveis
                </Link>
                <Link
                  href="#sobre"
                  className="text-sm font-medium transition-colors hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link
                  href="#contato"
                  className="text-sm font-medium transition-colors hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </nav>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" size="sm" className="gap-1 justify-center">
                  <Phone className="h-4 w-4" />
                  (47) 99101-0311
                </Button>
                <Button size="sm">Agende uma Visita</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
