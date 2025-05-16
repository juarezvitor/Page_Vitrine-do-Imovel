import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contato } from "@/components/contato"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-azul-escuro text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Entre em Contato</h1>
              <p className="text-xl text-white/80">
                Estamos prontos para atender você e responder todas as suas dúvidas
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-16 px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="h-12 w-12 mx-auto text-dourado" />
                <h3 className="text-xl font-bold">Telefone</h3>
                <p className="text-muted-foreground">(47) 99101-0311</p>
                <p className="text-muted-foreground">(47) 3366-5500</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Mail className="h-12 w-12 mx-auto text-dourado" />
                <h3 className="text-xl font-bold">E-mail</h3>
                <p className="text-muted-foreground">vitrinedoimovelcn@gmail.com.br</p>
                <p className="text-muted-foreground">juarezos1966@hotmail.com.br</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <MapPin className="h-12 w-12 mx-auto text-dourado" />
                <h3 className="text-xl font-bold">Endereço</h3>
                <p className="text-muted-foreground">
                  Av. Atlântica, 1000 - Centro
                  <br />
                  Balneário Camboriú - SC, 88330-000
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Formulário de Contato</h2>
              <Card>
                <CardContent className="p-6">
                  <Contato />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Informações Adicionais</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-dourado mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-dourado mt-0.5" />
                  <div>
                    <h3 className="font-medium">Departamentos</h3>
                    <p className="text-muted-foreground">
                      Vendas: (47) 99101-0311
                      <br />
                      Locação: (47) 99101-0312
                      <br />
                      Administrativo: (47) 3366-5501
                    </p>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Agende uma Visita</h3>
                  <p className="text-muted-foreground mb-4">
                    Prefere conversar pessoalmente? Agende uma visita em nosso escritório e conheça as melhores
                    oportunidades imobiliárias de Balneário Camboriú.
                  </p>
                  <Button className="w-full bg-dourado text-azul-escuro hover:bg-dourado-claro">
                    Agendar Visita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Trabalhe Conosco</h3>
                  <p className="text-muted-foreground mb-4">
                    Quer fazer parte da nossa equipe? Envie seu currículo e junte-se a nós.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-azul-escuro text-azul-escuro hover:bg-azul-escuro/10">
                    Enviar Currículo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
            <div className="h-[400px] bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground">Mapa de Localização</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Siga-nos nas Redes Sociais</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Acompanhe as novidades, lançamentos e dicas sobre o mercado imobiliário em nossas redes sociais.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-azul-escuro text-azul-escuro hover:bg-azul-escuro/10">
                Facebook
              </Button>
              <Button variant="outline" className="border-azul-escuro text-azul-escuro hover:bg-azul-escuro/10">
                Instagram
              </Button>
              <Button variant="outline" className="border-azul-escuro text-azul-escuro hover:bg-azul-escuro/10">
                LinkedIn
              </Button>
              <Button variant="outline" className="border-azul-escuro text-azul-escuro hover:bg-azul-escuro/10">
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
