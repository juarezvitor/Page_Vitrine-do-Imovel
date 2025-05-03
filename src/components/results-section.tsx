import PropertyCard from "@/components/property-card"

// Dados de exemplo
const properties = [
  {
    id: "1",
    title: "Apartamento em Pinheiros",
    address: "Rua dos Pinheiros, 123 - Pinheiros",
    city: "São Paulo",
    price: 850000,
    area: 85,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    type: "Apartamento",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    title: "Casa em Copacabana",
    address: "Avenida Atlântica, 456 - Copacabana",
    city: "Rio de Janeiro",
    price: 1250000,
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    type: "Casa",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    title: "Cobertura na Savassi",
    address: "Rua Pernambuco, 789 - Savassi",
    city: "Belo Horizonte",
    price: 980000,
    area: 110,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    type: "Cobertura",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    title: "Apartamento na Asa Sul",
    address: "SQS 308, Bloco C - Asa Sul",
    city: "Brasília",
    price: 750000,
    area: 75,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    type: "Apartamento",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "5",
    title: "Casa na Barra",
    address: "Avenida Oceânica, 1010 - Barra",
    city: "Salvador",
    price: 920000,
    area: 150,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    type: "Casa",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "6",
    title: "Apartamento em Moema",
    address: "Alameda dos Nhambiquaras, 1500 - Moema",
    city: "São Paulo",
    price: 1100000,
    area: 95,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    type: "Apartamento",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ResultsSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Resultados ({properties.length})</h2>
        <div className="text-sm text-muted-foreground">
          Ordenar por: <span className="font-medium">Relevância</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
