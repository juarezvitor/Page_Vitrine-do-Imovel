"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ListaImoveis } from "@/components/lista-imoveis"
import { Search } from "lucide-react"
import { imoveis } from "@/data/imoveis"


export function BuscarImoveis() {
  const [filtros, setFiltros] = useState({
    cidade: "balneario-camboriu",
    bairro: "",
    valorMin: 1000000,
    valorMax: 10000000,
  })

  const bairros = Array.from(
  new Set(imoveis.filter((imovel) => imovel.cidade === filtros.cidade.replace("-", " ")).map((imovel) => imovel.bairro))).sort((a, b) => a.localeCompare(b))

  const handleValorChange = (value: number[]) => {
    setFiltros({
      ...filtros,
      valorMin: value[0],
      valorMax: value[1],
    })
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
    <div className="space-y-8">
      <Card className="shadow-luxury border-luxury">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cidade" className="text-azul-escuro">Cidade</Label>
              <Select
                defaultValue={filtros.cidade}
                onValueChange={(value) => setFiltros({ ...filtros, cidade: value })}
              >
                <SelectTrigger id="cidade" className="border-border focus:ring-primary">
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="balneario-camboriu">Balneário Camboriú</SelectItem>
                  <SelectItem value="itajai">Itajaí</SelectItem>
                  <SelectItem value="itapema">Itapema</SelectItem>
                  <SelectItem value="camboriu">Camboriú</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bairro" className="text-azul-escuro">Bairro</Label>
              <Select value={filtros.bairro} onValueChange={(value) => setFiltros({ ...filtros, bairro: value })}>
                <SelectTrigger id="bairro" className="border-border focus:ring-primary">
                  <SelectValue placeholder="Todos os bairros" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os bairros</SelectItem>
                  {bairros.map((bairro) => (
                    <SelectItem key={bairro} value={bairro.toLowerCase()}>
                      {bairro}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <div className="flex justify-between">
                <Label className="text-azul-escuro">Faixa de Valor</Label>
                <span className="text-sm text-muted-foreground font-medium">
                  {formatarValor(filtros.valorMin)} - {formatarValor(filtros.valorMax)}
                </span>
              </div>
              <Slider
                defaultValue={[filtros.valorMin, filtros.valorMax]}
                max={20000000}
                min={500000}
                step={100000}
                onValueChange={handleValorChange}
                className="py-4"
              />
            </div>
          </div>

          <Button className="w-full mt-6 bg-azul-escuro text-white hover:bg-azul-escuro/90">
            <Search className="mr-2 h-4 w-4" />
            Buscar Imóveis
          </Button>
        </CardContent>
      </Card>

      <ListaImoveis filtros={filtros} />
    </div>
  )
}
