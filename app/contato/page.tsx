import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ContactForm } from "@/app/components/ContactForm";

const highlights = [
  "Disponível para oportunidades em Frontend (CLT, PJ ou freelance)",
  "Aberto para discutir projetos desafiadores e inovadores",
  "Interessado em fazer parte de equipes com propósito e boa cultura",
];

export default function Contato() {
  return (
    <PageSection>
      <div className="md:mb-12">
        <SectionHeading>Contato</SectionHeading>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row md:gap-12 gap-4">
          {/* Contact Message */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Vamos Construir Algo Incrível!
            </h2>
            <div className="w-16 h-1 bg-green-500 my-4"></div>
            <p className="text-lg text-white mb-8">
              Adoraria ouvir você! Estou aberto a novas oportunidades e
              colaborações onde possa contribuir com meu conhecimento em
              desenvolvimento.
            </p>
            <ul className="space-y-3 mb-6 text-white">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start">
                  <span className="text-green-500 mr-2">✦</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
}
