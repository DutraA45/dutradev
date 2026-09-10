import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Sobre", icon: User },
  { href: "/formacao", label: "Formação", icon: GraduationCap },
  { href: "/experiencias", label: "Experiências", icon: Briefcase },
  { href: "/portfolio", label: "Portfólio", icon: FolderGit2 },
  { href: "/contato", label: "Contato", icon: Mail },
];
