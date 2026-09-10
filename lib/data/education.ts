export type EducationEntry = {
  institution: string;
  logo: string;
  degree: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    institution: "PUC Minas",
    logo: "/study-icons/puc-minas_logo.jpg",
    degree: "Pós Graduação - Desenvolvimento Fullstack",
    period: "jan de 2024 - set de 2025 · 2 anos",
  },
  {
    institution: "UNISAL",
    logo: "/study-icons/unisal_logo.jpg",
    degree: "Graduação - Engenharia da Computação",
    period: "2018 - 2024 · 6 anos",
  },
  {
    institution: "São Miguel",
    logo: "/study-icons/sao-miguel_logo.jpg",
    degree: "Técnico em Eletrônica",
    period: "2015 - 2017 · 3 anos",
  },
];
