import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Building, Users, Clock, ArrowRight } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-azul-escuro text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Sobre a Vitrine do Imóvel</h1>
              <p className="text-xl text-white/80">
                Excelência e compromisso em imóveis de alto padrão em Balneário Camboriú
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-16 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nossa História</h2>
              <p className="text-muted-foreground">
                Fundada em 2008, a Vitrine do Imóvel nasceu com a missão de transformar a experiência de compra, venda e
                locação de imóveis de alto padrão em Balneário Camboriú e região. Com mais de 15 anos de atuação no
                mercado, nos consolidamos como referência em excelência e atendimento personalizado.
              </p>
              <p className="text-muted-foreground">
                Nossa trajetória é marcada pelo compromisso com a qualidade, transparência e satisfação dos nossos
                clientes. Ao longo dos anos, construímos um portfólio diversificado de imóveis exclusivos e
                desenvolvemos relacionamentos sólidos com proprietários, investidores e incorporadoras.
              </p>
              <p className="text-muted-foreground">
                Hoje, contamos com uma equipe de profissionais altamente qualificados, prontos para oferecer soluções
                imobiliárias sob medida para cada cliente, sempre com o objetivo de superar expectativas e realizar
                sonhos.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipe Vitrine do Imóvel"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold">Nossa Missão, Visão e Valores</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-bold">Missão</h3>
                  <p className="text-muted-foreground">
                    Proporcionar experiências imobiliárias excepcionais, conectando pessoas a imóveis que transformam
                    suas vidas, com atendimento personalizado e soluções inovadoras.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-bold">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser reconhecida como a imobiliária de referência em imóveis de alto padrão no litoral catarinense,
                    destacando-se pela excelência, inovação e relacionamentos duradouros.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-bold">Valores</h3>
                  <p className="text-muted-foreground">
                    Excelência, ética, transparência, compromisso com o cliente, inovação e responsabilidade social são
                    os pilares que norteiam todas as nossas ações.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Award className="h-12 w-12 mx-auto text-dourado" />
                <h3 className="text-xl font-bold">Excelência</h3>
                <p className="text-muted-foreground">
                  Compromisso com a qualidade e excelência em todos os nossos serviços.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Building className="h-12 w-12 mx-auto text-dourado" />
                <h3 className="text-xl font-bold">Expertise</h3>
                <p className="text-muted-foreground">Conhecimento profundo do mercado imobiliário de alto padrão.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Users className="h-12 w-12 mx-auto text-dourado" />
                <h3 className="text-xl font-bold">Atendimento</h3>
                <p className="text-muted-foreground">Atendimento personalizado e exclusivo para cada cliente.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Clock className="h-12 w-12 mx-auto text-dourado" />
                <h3 className="text-xl font-bold">Agilidade</h3>
                <p className="text-muted-foreground">Processos ágeis e eficientes para compra, venda e locação.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Nossa Equipe</h2>
                <p className="text-muted-foreground mb-6">
                  Contamos com profissionais altamente qualificados e especializados no mercado imobiliário de alto
                  padrão. Nossa equipe é formada por corretores com ampla experiência, consultores financeiros,
                  especialistas em marketing imobiliário e profissionais de atendimento ao cliente.
                </p>
                <Button className="bg-dourado text-azul-escuro hover:bg-dourado-claro">
                  Conheça Nossa Equipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">JS</span>
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">MC</span>
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">AP</span>
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">LR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold">Nossos Parceiros</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com os melhores parceiros do mercado para oferecer soluções completas aos nossos clientes.
            </p>
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

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Pronto para encontrar o imóvel dos seus sonhos?</h2>
            <Button size="lg" className="bg-dourado text-azul-escuro hover:bg-dourado-claro">
              Entre em Contato
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
