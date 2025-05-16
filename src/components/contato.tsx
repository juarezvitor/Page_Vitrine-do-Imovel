"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Mail, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      assunto: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEnviando(true)

      
      emailjs
        .send("service_km5slza", "template_7o6rjkl", formData, "_BZm5MHPhTtpMXVeJ").then(
          (response) => {
            console.log("Mensagem enviada com sucesso!", response.status, response.text)
          },
          (error) => {
            console.error("Erro ao enviar mensagem:", error)
          }
        )

      setTimeout(() => {
        setEnviando(false)
        setEnviado(true)
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
        })

        // Reset do estado de enviado após 5 segundos
        setTimeout(() => {
          setEnviado(false)
        }, 5000)
      }, 1500)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="shadow-luxury">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Entre em Contato</h2>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
            </p>
          </div>

          {enviado ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg">
              <h3 className="font-medium">Mensagem enviada com sucesso!</h3>
              <p>Agradecemos seu contato. Retornaremos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="assunto">Assunto</Label>
                <Select value={formData.assunto} onValueChange={handleSelectChange} required>
                  <SelectTrigger id="assunto">
                    <SelectValue placeholder="Selecione o assunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compra">Compra de Imóvel</SelectItem>
                    <SelectItem value="venda">Venda de Imóvel</SelectItem>
                    <SelectItem value="locacao">Locação</SelectItem>
                    <SelectItem value="avaliacao">Avaliação de Imóvel</SelectItem>
                    <SelectItem value="outro">Outro Assunto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-azul-escuro text-white hover:bg-azul-escuro/90" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Informações de Contato</h2>
          <p className="text-muted-foreground">
            Entre em contato conosco através dos canais abaixo ou visite nosso escritório.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Endereço</h3>
              <p className="text-muted-foreground">
                Av. Atlântica, 1000 - Centro
                <br />
                Balneário Camboriú - SC, 88330-000
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Telefone</h3>
              <p className="text-muted-foreground">(47) 3366-5500</p>
              <p className="text-muted-foreground">(47) 99101-0311 (WhatsApp)</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">E-mail</h3>
              <p className="text-muted-foreground">vitrinedoimovelcn@gmail.com.br</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Horário de Funcionamento</h3>
              <p className="text-muted-foreground">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 13h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 h-[300px] bg-muted rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4390.876935185427!2d-51.23191944809927!3d-27.40006041559257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e17b2ca485bf4f%3A0x2d3b04e2847eb916!2sR.%20Cel%20Lucidoro%2C%20844%20-%20Centro%2C%20Campos%20Novos%20-%20SC%2C%2089620-000!5e1!3m2!1spt-BR!2sbr!4v1746228923842!5m2!1spt-BR!2sbr" 
            width="750" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}