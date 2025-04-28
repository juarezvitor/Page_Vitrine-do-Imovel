import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BuscarImoveis } from "@/components/buscar-imoveis"

export default function ImoveisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">Encontre o Imóvel dos Seus Sonhos</h1>
              <p className="text-muted-foreground">
                Utilize nossos filtros para encontrar o imóvel ideal para você e sua família em Balneário Camboriú e
                região.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 md:px-6">
          <BuscarImoveis />
        </div>
      </main>
      <Footer />
    </div>
  )
}
