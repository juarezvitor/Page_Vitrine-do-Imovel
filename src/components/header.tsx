"use client"

import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import Image from "next/image"

const mensagem = encodeURIComponent('Olá! Gostaria de agendar uma visita.');

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-azul-escuro text-white shadow-md">
      <div className="flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/vitrineicon.png" alt="Vitrine do Imóvel" width={60} height={60}/>
          <span>Vitrine do Imóvel</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-dourado">
            Início
          </Link>
          <Link href="/imoveis" className="text-sm font-medium transition-colors hover:text-dourado">
            Imóveis
          </Link>
          <Link href="/sobre" className="text-sm font-medium transition-colors hover:text-dourado">
            Sobre Nós
          </Link>
          <Link href="/contato" className="text-sm font-medium transition-colors hover:text-dourado">
            Contato
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-1">
            <Phone className="h-4 w-4" />
            (47) 99101-0311
          </Button>
          <Button size="sm">
            <a href={`https://api.whatsapp.com/send?phone=5547991010311&text=${mensagem}`} target="_blank" rel="noopener noreferrer" className="bg-dourado text-azul-escuro">
            Agende uma Visita
            </a>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-white text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-azul-escuro text-white">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold" onClick={() => setIsOpen(false)}>
                <Image src="/vitrineicon.png" alt="Vitrine do Imóvel" width={94} height={94} className="h-10 w-10" />
                <span>Vitrine do Imóvel</span>
              </Link>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-dourado"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="#imoveis"
                  className="text-sm font-medium transition-colors hover:text-dourado"
                  onClick={() => setIsOpen(false)}
                >
                  Imóveis
                </Link>
                <Link
                  href="#sobre"
                  className="text-sm font-medium transition-colors hover:text-dourado"
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
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 justify-center border-white text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  (47) 99101-0311
                </Button>
                <Button size="sm" className="bg-dourado text-azul-escuro hover:bg-dourado-claro" >
                  Agende uma Visita
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
