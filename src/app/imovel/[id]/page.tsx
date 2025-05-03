import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { imoveis } from "@/data/imoveis"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Car, Calendar, Share2, Heart, Phone, ArrowRight,} from "lucide-react"
import {Carousel, CarouselContent, CarouselItem, CarouselNext,CarouselPrevious} from "@/components/ui/carousel"


export default function ImovelPage({ params }: { params: { id: string } }) {
  const imovel = imoveis.find((imovel) => imovel.id === Number.parseInt(params.id))

  if (!imovel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto py-12 px-4 md:px-6">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Imóvel não encontrado</h1>
            <p className="text-muted-foreground mt-2">O imóvel que você está procurando não existe ou foi removido.</p>
            <Button asChild className="mt-4">
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const formatarValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }
  const imagens = Array.isArray(imovel.imagem)
    ? imovel.imagem
    : [imovel.imagem, "/placeholder.svg?height=600&width=1000", "/placeholder.svg?height=600&width=1000"]


  const imoveisSimilares = imoveis.filter((item) => item.id !== imovel.id && item.tipo === imovel.tipo).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center mb-2">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Voltar para a busca
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold">{imovel.titulo}</h1>
              <div className="flex items-center text-muted-foreground mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>
                  {imovel.bairro}, {imovel.cidade}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Compartilhar</span>
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favoritar</span>
              </Button>
              <Button>Agendar Visita</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {imagens.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`${imovel.titulo} - imagem ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-primary hover:text-primary" />
                  <CarouselNext className="right-2 bg-white/80 hover:bg-white text-primary hover:text-primary" />
                </Carousel>
                <Badge className="absolute top-4 left-4 z-10 bg-white text-black hover:bg-white/90">
                  {imovel.tipo}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Bed className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Quartos</span>
                  <span className="font-bold">{imovel.quartos}</span>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Bath className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Banheiros</span>
                  <span className="font-bold">{imovel.banheiros}</span>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Maximize className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Área</span>
                  <span className="font-bold">{imovel.area}m²</span>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <Car className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Vagas</span>
                  <span className="font-bold">{imovel.tipo === "Casa" ? 4 : 3}</span>
                </div>
              </div>

              <Tabs defaultValue="descricao">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="descricao">Descrição</TabsTrigger>
                  <TabsTrigger value="caracteristicas">Características</TabsTrigger>
                  <TabsTrigger value="localizacao">Localização</TabsTrigger>
                </TabsList>
                <TabsContent value="descricao" className="p-4 bg-muted/30 rounded-lg mt-4">
                  <h3 className="text-lg font-bold mb-2">Sobre o Imóvel</h3>
                  <p className="text-muted-foreground">{imovel.descricao}</p>
                </TabsContent>
                <TabsContent value="caracteristicas" className="p-4 bg-muted/30 rounded-lg mt-4">
                  <h3 className="text-lg font-bold mb-2">Características</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Internas</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {imovel.caracteristicas?.internas.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Condomínio</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {imovel.caracteristicas?.condominio.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="localizacao" className="p-4 bg-muted/30 rounded-lg mt-4">
                  <h3 className="text-lg font-bold mb-2">Localização</h3>
                  <div className="h-[300px] bg-muted rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-muted-foreground">Mapa de Localização</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Proximidades</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {imovel.localizacao?.proximidades.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-primary">{formatarValor(imovel.valor)}</h2>
                    <p className="text-muted-foreground">Código: BC{imovel.id.toString().padStart(4, "0")}</p>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-4">
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Falar com Corretor
                    </Button>
                    <Button variant="outline" className="w-full">
                      Agendar Visita
                    </Button>
                    <Button variant="outline" className="w-full">
                      Solicitar Mais Informações
                    </Button>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Publicado em 15/04/2023</span>
                    </div>
                    <div>Ref: BC{imovel.id.toString().padStart(4, "0")}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Simule o Financiamento</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Valor do Imóvel</p>
                        <p className="font-bold">{formatarValor(imovel.valor)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Entrada Sugerida</p>
                        <p className="font-bold">{formatarValor(imovel.valor * 0.2)}</p>
                      </div>
                    </div>
                    <Button className="w-full">Simular Financiamento</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Corretor Responsável</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground">JD</span>
                    </div>
                    <div>
                      <p className="font-bold">Juarez Bordin</p>
                      <p className="text-sm text-muted-foreground">CRECI 12848</p>
                      <p className="text-sm text-muted-foreground">(47) 99101-0311</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Imóveis Similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imoveisSimilares.map((imovel) => (
                <Card key={imovel.id} className="overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={Array.isArray(imovel.imagem) ? imovel.imagem[0] : imovel.imagem}
                      alt={imovel.titulo}
                      width={500}
                      height={300}
                      className="w-full h-[220px] object-cover transition-transform group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 left-2 bg-white text-black hover:bg-white/90">{imovel.tipo}</Badge>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg line-clamp-1">{imovel.titulo}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">
                          {imovel.bairro}, {imovel.cidade}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-primary">{formatarValor(imovel.valor)}</p>
                      <div className="flex justify-between pt-2">
                        <div className="flex items-center gap-1">
                          <Bed className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{imovel.quartos} quartos</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{imovel.banheiros} banheiros</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Maximize className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{imovel.area}m²</span>
                        </div>
                      </div>

                      <Button asChild variant="link" className="p-0 h-auto mt-2">
                        <Link href={`/imovel/${imovel.id}`} className="flex items-center">
                          Ver Detalhes
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
