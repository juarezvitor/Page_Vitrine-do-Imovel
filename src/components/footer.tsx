import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-azul-escuro text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Image
              src="/vitrineicon.png"
              alt="Vitrine do Imóvel"
              width={24}
              height={24}
              className="h-8 w-8"
              />
              <span>Vitrine do Imóveil</span>
            </Link>
            <p className="text-white/80">
              Especialistas em imóveis de alto padrão em Balneário Camboriú e região.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-dourado hover:bg-transparent">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-dourado hover:bg-transparent">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-dourado hover:bg-transparent">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-dourado hover:bg-transparent">
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-white/80 hover:text-dourado transition-colors">
                Início
              </Link>
              <Link href="/imoveis" className="text-white/80 hover:text-dourado transition-colors">
                Imóveis
              </Link>
              <Link href="/sobre" className="text-white/80 hover:text-dourado transition-colors">
                Sobre Nós
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-dourado transition-colors">
                Blog
              </Link>
              <Link href="/contato" className="text-white/80 hover:text-dourado transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-dourado mt-0.5" />
                <span className="text-white/80">
                  Av. Atlântica, 1000 - Centro
                  <br />
                  Balneário Camboriú - SC
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-dourado" />
                <span className="text-white/80">(47) 3366-5500</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-dourado" />
                <span className="text-white/80">vitrinedoimovelcn@gmail.com.br</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-white/80">
              Inscreva-se para receber novidades sobre imóveis e o mercado imobiliário.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Seu e-mail" type="email" className="bg-white/10 border-white/20 text-white" />
              <Button className="bg-dourado text-azul-escuro hover:bg-dourado-claro">Inscrever</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Vitrine do Imóvel. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/termos" className="text-sm text-white/60 hover:text-dourado transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-sm text-white/60 hover:text-dourado transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/cookies" className="text-sm text-white/60 hover:text-dourado transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
