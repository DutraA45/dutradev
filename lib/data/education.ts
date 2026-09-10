export type EducationLevel = "Técnico" | "Graduação" | "Pós-graduação";

export type EducationEntry = {
  /** Slug estável: chave de lista e âncora de URL. */
  id: string;
  institution: string;
  logo: string;
  /** Como encaixar o logo no ladrilho: `cover` para artes que sangram. */
  logoFit: "cover" | "contain";
  /** Zoom do logo: compensa a margem vazia dentro do arquivo. */
  logoScale: number;
  level: EducationLevel;
  degree: string;
  /** AAAA para precisão de ano, AAAA-MM quando o mês é conhecido. */
  start: string;
  end: string;
  /** Duração como consta no histórico — não é derivada das datas. */
  duration: string;
  /** Uma frase: o que essa formação representa na trajetória. */
  summary: string;
};

/** Da formação mais recente para a mais antiga. */
export const education: EducationEntry[] = [
  {
    id: "puc-minas-fullstack",
    institution: "PUC Minas",
    logo: "/study-icons/puc-minas_logo.jpg",
    logoFit: "cover",
    logoScale: 1,
    level: "Pós-graduação",
    degree: "Desenvolvimento Fullstack",
    start: "2024-01",
    end: "2025-09",
    duration: "2 anos",
    summary:
      "Especialização no mesmo eixo do trabalho que faço hoje — front-end, back-end e a integração entre os dois —, iniciada na sequência da graduação em Engenharia da Computação.",
  },
  {
    id: "unisal-engenharia-computacao",
    institution: "UNISAL",
    logo: "/study-icons/unisal_logo.jpg",
    logoFit: "contain",
    logoScale: 1.15,
    level: "Graduação",
    degree: "Engenharia da Computação",
    start: "2018",
    end: "2024",
    duration: "6 anos",
    summary:
      "A base de engenharia, cursada integralmente em paralelo à carreira: toda a experiência profissional até aqui aconteceu sem pausar a graduação.",
  },
  {
    id: "sao-miguel-tecnico-eletronica",
    institution: "São Miguel",
    logo: "/study-icons/sao-miguel_logo.jpg",
    logoFit: "contain",
    logoScale: 1.05,
    level: "Técnico",
    degree: "Técnico em Eletrônica",
    start: "2015",
    end: "2017",
    duration: "3 anos",
    summary:
      "A formação que abriu a primeira porta profissional, na manutenção industrial da Valgroup — e onde apareceu o primeiro contato com programação.",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  context: string;
};

export const certifications: Certification[] = [
  {
    id: "veeva-email-marketing",
    title: "E-mail Marketing",
    issuer: "VEEVA",
    year: "2022",
    context:
      "Obtida durante a atuação como Desenvolvedor Front-End Jr I na Prod.",
  },
];
