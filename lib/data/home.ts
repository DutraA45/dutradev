import { ChartLine, Cpu, ShieldCheck, type LucideIcon } from "lucide-react";

/** Texto da abertura da home. Tudo em primeira pessoa, como o resto do site. */
export const hero = {
  eyebrow: "Desenvolvedor Front-End · React e Next.js",
  headline: "Construo interfaces que o negócio consegue medir.",
  lead:
    "Antes de escrever componentes, trabalhei com mídia paga, e-mail marketing e análise de dados — e é isso que orienta o que eu construo hoje: telas rápidas, com o resultado que precisam entregar em vista.",
  /** A trajetória em uma linha, do começo até agora. */
  path: ["Técnico em eletrônica", "Mídia de performance", "Front-End", "Fullstack"],
};

export type Pillar = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/**
 * O que diferencia num mercado em que qualquer um lista React no currículo.
 * Cada item aponta para algo verificável nas outras páginas.
 */
export const pillars: Pillar[] = [
  {
    icon: ChartLine,
    title: "Resultado medível",
    text: "Vim de mídia paga e análise de dados. Sei qual métrica a interface precisa mover e construo com isso em vista.",
  },
  {
    icon: Cpu,
    title: "Base de engenharia",
    text: "Engenharia da Computação e pós em fullstack. Entendo o que acontece do outro lado da API e converso com o back-end sem tradutor.",
  },
  {
    icon: ShieldCheck,
    title: "Testes como rotina",
    text: "Jest e Cypress fazem parte do stack. Um dos meus projetos existe só para exercitar testes automatizados e integração contínua.",
  },
];
