import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
};

export const contactInfo: ContactInfoItem[] = [
  { icon: MapPin, label: "Passa Quatro - MG, Brasil" },
  { icon: Mail, label: "jeffinho.angelo@gmail.com" },
  { icon: Phone, label: "+55 012 99231-3701" },
];
