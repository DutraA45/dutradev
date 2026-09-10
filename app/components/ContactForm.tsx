import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const inputClassName =
  "h-auto w-full px-4 py-3 border-gray-300 rounded-md focus-visible:border-gray-300 focus-visible:ring-2 focus-visible:ring-green-500 text-gray-800 placeholder:text-gray-400";

const textareaClassName =
  "min-h-0 w-full px-4 py-2 border-gray-300 rounded-md focus-visible:border-gray-300 focus-visible:ring-2 focus-visible:ring-green-500 text-gray-800 placeholder:text-gray-400";

export function ContactForm() {
  return (
    <Card className="md:w-1/2 bg-white p-8 rounded-lg shadow-md ring-0 gap-6">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Entre em contato
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <form
          className="space-y-6"
          action="https://formspree.io/f/mwpbgajl"
          method="POST"
        >
          <div>
            <Label htmlFor="name" className="sr-only">
              Nome
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Nome"
              className={inputClassName}
            />
          </div>

          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              className={inputClassName}
            />
          </div>

          <div>
            <Label htmlFor="message" className="sr-only">
              Mensagem
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Mensagem"
              className={textareaClassName}
            />
          </div>

          <Button
            type="submit"
            className="h-auto w-full bg-green-500 py-3 px-4 text-white hover:bg-green-600"
          >
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
