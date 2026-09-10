import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Valores canônicos de contato. A sidebar e a página de contato leem daqui —
 * mudou aqui, mudou nos dois lugares.
 */
export const contact = {
  email: "jeffinho.angelo@gmail.com",
  phone: {
    display: "+55 (12) 99231-3701",
    /** Formato E.164, sem o zero de operadora — é o que discadores esperam. */
    href: "tel:+5512992313701",
  },
  location: "Passa Quatro - MG, Brasil",
  /** Endpoint do Formspree que recebe o formulário. */
  formEndpoint: "https://formspree.io/f/mwpbgajl",
};

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
};

export const contactInfo: ContactInfoItem[] = [
  { icon: MapPin, label: contact.location },
  { icon: Mail, label: contact.email },
  { icon: Phone, label: contact.phone.display },
];

/** O que ele procura hoje — alimenta o bloco de disponibilidade. */
export const availability = {
  open: true,
  headline: "Disponível para oportunidades em Front-End",
  modalities: ["CLT", "PJ", "Freelance"],
  notes: [
    "Aberto a discutir projetos desafiadores e inovadores",
    "Interessado em times com propósito e boa cultura",
  ],
};
