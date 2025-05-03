"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, SlidersHorizontal, X } from "lucide-react"

// Dados de exemplo
const cidades = [
  { id: "1", nome: "São Paulo" },
  { id: "2", nome: "Rio de Janeiro" },
  { id: "3", nome: "Belo Horizonte" },
  { id: "4", nome: "Brasília" },
  { id: "5", nome: "Salvador" },
]

const bairrosPorCidade: Record<string, Array<{ id: string; nome: string }>> = {
  "1": [
    { id: "101", nome: "Moema" },
    { id: "102", nome: "Pinheiros" },
    { id: "103", nome: "Vila Mariana" },
    { id: "104", nome: "Itaim Bibi" },
  ],
  "2": [
    { id: "201", nome: "Copacabana" },
    { id: "202", nome: "Ipanema" },
    { id: "203", nome: "Leblon" },
    { id: "204", nome: "Barra da Tijuca" },
  ],
  "3": [
    { id: "301", nome: "Savassi" },
    { id: "302", nome: "Lourdes" },
    { id: "303", nome: "Funcionários" },
    { id: "304", nome: "Buritis" },
  ],
  "4": [
    { id: "401", nome: "Asa Sul" },
    { id: "402", nome: "Asa Norte" },
    { id: "403", nome: "Lago Sul" },
    { id: "404", nome: "Lago Norte" },
  ],
  "5": [
    { id: "501", nome: "Barra" },
    { id: "502", nome: "Pituba" },
    { id: "503", nome: "Itapuã" },
    { id: "504", nome: "Rio Vermelho" },
  ],
}

const tiposImovel = [
  { id: "1", nome: "Apartamento" },
  { id: "2", nome: "Casa" },
  { id: "3", nome: "Cobertura" },
  { id: "4", nome: "Terreno" },
]

export default function FilterSection() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("")
  const [bairroSelecionado, setBairroSelecionado] = useState<string>("")
  const [bairrosDisponiveis, setBairrosDisponiveis] = useState<Array<{ id: string; nome: string }>>([])
  const [valorRange, setValorRange] = useState<number[]>([500000])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Atualiza os bairros disponíveis quando a cidade é alterada
  useEffect(() => {
    if (cidadeSelecionada) {
      setBairrosDisponiveis(bairrosPorCidade[cidadeSelecionada] || [])
      setBairroSelecionado("")
    } else {
      setBairrosDisponiveis([])
      setBairroSelecionado("")
    }
  }, [cidadeSelecionada])

  const formatarValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  const handleReset = () => {
    setCidadeSelecionada("")
    setBairroSelecionado("")
    setValorRange([500000])
  }

  const filterContent = (
    <CardContent className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="valor">Valor máximo</Label>
        <Slider id="valor" min={100000} max={5000000} step={50000} value={valorRange} onValueChange={setValorRange} />
        <div className="text-right font-medium">Até {formatarValor(valorRange[0])}</div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cidade">Cidade</Label>
        <Select value={cidadeSelecionada} onValueChange={setCidadeSelecionada}>
          <SelectTrigger id="cidade">
            <SelectValue placeholder="Selecione uma cidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cidades</SelectLabel>
              {cidades.map((cidade) => (
                <SelectItem key={cidade.id} value={cidade.id}>
                  {cidade.nome}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bairro">Bairro</Label>
        <Select value={bairroSelecionado} onValueChange={setBairroSelecionado} disabled={!cidadeSelecionada}>
          <SelectTrigger id="bairro">
            <SelectValue placeholder="Selecione um bairro" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Bairros</SelectLabel>
              {bairrosDisponiveis.map((bairro) => (
                <SelectItem key={bairro.id} value={bairro.id}>
                  {bairro.nome}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>Tipo de imóvel</Label>
        <div className="space-y-2">
          {tiposImovel.map((tipo) => (
            <div key={tipo.id} className="flex items-center space-x-2">
              <Checkbox id={`tipo-${tipo.id}`} />
              <Label htmlFor={`tipo-${tipo.id}`} className="font-normal">
                {tipo.nome}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-2 pt-4">
        <Button className="w-full">
          <Search className="mr-2 h-4 w-4" />
          Buscar imóveis
        </Button>
        <Button variant="outline" onClick={handleReset} className="w-full">
          <X className="mr-2 h-4 w-4" />
          Limpar filtros
        </Button>
      </div>
    </CardContent>
  )

  return (
    <>
      {/* Versão desktop */}
      <Card className="hidden lg:block sticky top-4">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        {filterContent}
      </Card>

      {/* Botão para abrir filtros no mobile */}
      <div className="lg:hidden sticky top-4 z-10">
        <Button onClick={() => setMobileFiltersOpen(true)} className="w-full mb-4" variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Overlay de filtros para mobile */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filtros</h2>
              <Button variant="ghost" size="icon" onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </>
  )
}
