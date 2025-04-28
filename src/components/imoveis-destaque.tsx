import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bed, Bath, Maximize, MapPin } from "lucide-react"
import { imoveisDestaque } from "@/data/imoveis"

export function ImoveisDestaque() {
  const formatarValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Imóveis em Destaque</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça nossas propriedades exclusivas em Balneário Camboriú e região, selecionadas a dedo para oferecer o
          melhor em conforto e sofisticação.
        </p>
      </div>

      <Tabs defaultValue="apartamentos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="apartamentos">Apartamentos</TabsTrigger>
          <TabsTrigger value="casas">Casas</TabsTrigger>
          <TabsTrigger value="coberturas">Coberturas</TabsTrigger>
        </TabsList>

        <TabsContent value="apartamentos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveisDestaque
              .filter((imovel) => imovel.tipo === "Apartamento")
              .map((imovel) => (
                <Card key={imovel.id} className="overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={imovel.imagem || `/placeholder.svg?height=300&width=500`}
                      alt={imovel.titulo}
                      width={500}
                      height={300}
                      className="w-full h-[220px] object-cover transition-transform group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 left-2 bg-white text-black hover:bg-white/90">{imovel.tipo}</Badge>
                    {imovel.destaque && (
                      <Badge className="absolute top-2 right-2 bg-amber-500 text-white hover:bg-amber-600">
                        Destaque
                      </Badge>
                    )}
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
        </TabsContent>

        <TabsContent value="casas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveisDestaque
              .filter((imovel) => imovel.tipo === "Casa")
              .map((imovel) => (
                <Card key={imovel.id} className="overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={imovel.imagem || `/placeholder.svg?height=300&width=500`}
                      alt={imovel.titulo}
                      width={500}
                      height={300}
                      className="w-full h-[220px] object-cover transition-transform group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 left-2 bg-white text-black hover:bg-white/90">{imovel.tipo}</Badge>
                    {imovel.destaque && (
                      <Badge className="absolute top-2 right-2 bg-amber-500 text-white hover:bg-amber-600">
                        Destaque
                      </Badge>
                    )}
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
        </TabsContent>

        <TabsContent value="coberturas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveisDestaque
              .filter((imovel) => imovel.tipo === "Cobertura")
              .map((imovel) => (
                <Card key={imovel.id} className="overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={imovel.imagem || `/placeholder.svg?height=300&width=500`}
                      alt={imovel.titulo}
                      width={500}
                      height={300}
                      className="w-full h-[220px] object-cover transition-transform group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 left-2 bg-white text-black hover:bg-white/90">{imovel.tipo}</Badge>
                    {imovel.destaque && (
                      <Badge className="absolute top-2 right-2 bg-amber-500 text-white hover:bg-amber-600">
                        Destaque
                      </Badge>
                    )}
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
        </TabsContent>
      </Tabs>

      <div className="flex justify-center pt-4">
        <Button asChild size="lg">
          <Link href="/imoveis">
            Ver Todos os Imóveis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
