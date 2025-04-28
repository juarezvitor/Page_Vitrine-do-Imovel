import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Users, Clock } from "lucide-react"

export function SobreNos() {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Vitrine do Imóvel</h2>
          <p className="text-muted-foreground">
            Somos uma imobiliária especializada em imóveis de alto padrão em Balneário Camboriú e região. Com mais de 15
            anos de experiência no mercado, nossa equipe de corretores altamente qualificados está pronta para ajudá-lo
            a encontrar o imóvel dos seus sonhos ou a realizar o melhor negócio na venda do seu imóvel.
          </p>
          <p className="text-muted-foreground">
            Nossa missão é proporcionar uma experiência única e personalizada, com atendimento exclusivo e soluções sob
            medida para cada cliente. Trabalhamos com os melhores empreendimentos da região e oferecemos um portfólio
            diversificado de imóveis de luxo.
          </p>
          <Button asChild>
            <Link href="/sobre" className="inline-flex items-center">
              Conheça Nossa História
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Equipe Elite Imóveis BC"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <Award className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-xl font-bold">Excelência</h3>
            <p className="text-muted-foreground">
              Compromisso com a qualidade e excelência em todos os nossos serviços.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <Building className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-xl font-bold">Expertise</h3>
            <p className="text-muted-foreground">Conhecimento profundo do mercado imobiliário de alto padrão.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <Users className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-xl font-bold">Atendimento</h3>
            <p className="text-muted-foreground">Atendimento personalizado e exclusivo para cada cliente.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <Clock className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-xl font-bold">Agilidade</h3>
            <p className="text-muted-foreground">Processos ágeis e eficientes para compra, venda e locação.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Nossos Parceiros</h2>
        <div className="flex flex-wrap justify-center gap-8 py-6">
          <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">Parceiro 1</span>
          </div>
          <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">Parceiro 2</span>
          </div>
          <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">Parceiro 3</span>
          </div>
          <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">Parceiro 4</span>
          </div>
          <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">Parceiro 5</span>
          </div>
        </div>
      </div>
    </div>
  )
}
