import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BuscarImoveis } from "@/components/buscar-imoveis"
import { ImoveisDestaque } from "@/components/imoveis-destaque"
import { SobreNos } from "@/components/sobre-nos"
import { Contato } from "@/components/contato"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <HeroSection />

        <section className="container mx-auto py-12 px-4 md:px-6 ">
          <Tabs defaultValue="buscar" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="buscar">Buscar Imóveis</TabsTrigger>
              <TabsTrigger value="destaque">Imóveis em Destaque</TabsTrigger>
              <TabsTrigger value="sobre">Sobre Nós</TabsTrigger>
              <TabsTrigger value="contato">Contato</TabsTrigger>
            </TabsList>
            <TabsContent value="buscar" className="mt-6">
              <BuscarImoveis />
            </TabsContent>
            <TabsContent value="destaque" className="mt-6">
              <ImoveisDestaque />
            </TabsContent>
            <TabsContent value="sobre" className="mt-6">
              <SobreNos />
            </TabsContent>
            <TabsContent value="contato" className="mt-6">
              <Contato />
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  )
}
