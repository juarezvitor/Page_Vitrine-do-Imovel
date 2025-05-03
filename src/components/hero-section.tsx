import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('/placeholder.png?height=800&width=1600')] bg-cover bg-center brightness-50" />
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Imóveis de Alto Padrão em Balneário Camboriú
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Descubra residências exclusivas com vista para o mar, apartamentos de luxo e as melhores oportunidades de
            investimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
            <a href="/imoveis"> 
              Ver Imóveis
              </a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-white/90">
              <a href={`https://api.whatsapp.com/send?phone=5547991010311&text=Olá! Gostaria de agendar uma visita.`} target="_blank" rel="noopener noreferrer">
              Fale com um Corretor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}