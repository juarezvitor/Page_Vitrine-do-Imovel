import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bed, Bath, Car, Square, MapPin } from "lucide-react"

interface Property {
  id: string
  title: string
  address: string
  city: string
  price: number
  area: number
  bedrooms: number
  bathrooms: number
  parking: number
  type: string
  image: string
}

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatarValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
          {property.type}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
        <div className="flex items-center text-muted-foreground text-sm mt-1">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span className="line-clamp-1">{property.address}</span>
        </div>
        <p className="font-bold text-xl mt-3">{formatarValor(property.price)}</p>

        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="flex flex-col items-center">
            <Square className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs mt-1">{property.area} m²</span>
          </div>
          <div className="flex flex-col items-center">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs mt-1">{property.bedrooms}</span>
          </div>
          <div className="flex flex-col items-center">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs mt-1">{property.bathrooms}</span>
          </div>
          <div className="flex flex-col items-center">
            <Car className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs mt-1">{property.parking}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 rounded transition-colors">
          Ver detalhes
        </button>
      </CardFooter>
    </Card>
  )
}
