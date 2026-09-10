import type { Metadata } from "next";
import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { AvailabilityCard } from "@/app/components/contact/AvailabilityCard";
import { ContactChannels } from "@/app/components/contact/ContactChannels";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Jefferson Dutra",
  description:
    "Fale com Jefferson Dutra: e-mail, telefone, LinkedIn e GitHub, ou envie uma mensagem direto pelo site.",
};

export default function Contato() {
  return (
    <PageSection>
      <div className="space-y-14">
        <header className="relative -mx-8 -mt-8 overflow-hidden border-b border-default px-8 py-10">
          <div aria-hidden className="dd-grid absolute inset-0" />

          <div className="relative">
            <SectionHeading className="mb-4">Contato</SectionHeading>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              Escolha o caminho mais curto: o e-mail e o telefone estão aqui
              para copiar em um clique. Se preferir, escreva pelo formulário —{" "}
              <b className="text-white">chega no mesmo lugar</b>.
            </p>
          </div>
        </header>

        <AvailabilityCard />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="dd-reveal">
            <ContactChannels />
          </div>

          <div className="dd-reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageSection>
  );
}
