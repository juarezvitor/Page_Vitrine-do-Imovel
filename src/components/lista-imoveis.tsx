"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react"
import { imoveis } from "@/data/imoveis"

interface ListaImoveisProps {
  filtros: {
    cidade: string
    bairro: string
    valorMin: number
    valorMax: number
  }
}

export function ListaImoveis({ filtros }: ListaImoveisProps) {
  const [imoveisFiltrados, setImoveisFiltrados] = useState(imoveis)
  const [favoritos, setFavoritos] = useState<number[]>([])

  useEffect(() => {
    const filtrados = imoveis.filter((imovel) => {
      // Filtrar por cidade
      if (filtros.cidade && imovel.cidade.toLowerCase() !== filtros.cidade.replace("-", " ")) {
        return false
      }

      // Filtrar por bairro
      if (filtros.bairro && imovel.bairro.toLowerCase() !== filtros.bairro) {
        return false
      }

      // Filtrar por valor
      if (imovel.valor < filtros.valorMin || imovel.valor > filtros.valorMax) {
        return false
      }

      return true
    })

    setImoveisFiltrados(filtrados)
  }, [filtros])

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) => (prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]))
  }

  const formatarValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{imoveisFiltrados.length} Imóveis Encontrados</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Mais Recentes
          </Button>
          <Button variant="outline" size="sm">
            Maior Valor
          </Button>
          <Button variant="outline" size="sm">
            Menor Valor
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imoveisFiltrados.map((imovel) => (
          <Card key={imovel.id} className="overflow-hidden group">
            <div className="relative">
              <Image
                src={Array.isArray(imovel.imagem) ? imovel.imagem[0] : imovel.imagem || `/placeholder.svg?height=300&width=500`}
                alt={imovel.titulo}
                width={500}
                height={300}
                className="w-full h-[220px] object-cover transition-transform group-hover:scale-105"
              />
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
                  favoritos.includes(imovel.id) ? "text-rose-500" : "text-gray-500"
                }`}
                onClick={() => toggleFavorito(imovel.id)}
              >
                <Heart className="h-5 w-5" fill={favoritos.includes(imovel.id) ? "currentColor" : "none"} />
              </Button>
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
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button asChild className="w-full">
                <Link href={`/imovel/${imovel.id}`}>Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {imoveisFiltrados.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">Nenhum imóvel encontrado</h3>
          <p className="text-muted-foreground mt-2">Tente ajustar os filtros para ver mais opções</p>
        </div>
      )}

      {imoveisFiltrados.length > 0 && (
        <div className="flex justify-center pt-6">
          <Button variant="outline" size="lg">
            Carregar Mais Imóveis
          </Button>
        </div>
      )}
    </div>
  )
}
