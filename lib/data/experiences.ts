export type EmploymentType = "Tempo integral" | "Estágio" | "Freelance";

/** Trilha de carreira — usada para colorir e agrupar os cargos. */
export type CareerTrack = "engenharia" | "dados" | "industria";

export type ExperienceRole = {
  /** Slug estável: chave de lista e âncora de URL. */
  id: string;
  title: string;
  type: EmploymentType;
  track: CareerTrack;
  /** AAAA-MM */
  start: string;
  /** AAAA-MM, ou null quando é o cargo atual. */
  end: string | null;
  /** Como o cargo começou. Aparece no conector entre um cargo e o anterior. */
  step?: string;
  /** Uma frase: o que era a função. */
  summary: string;
  /** Entregas concretas, em ordem de impacto. */
  highlights: string[];
  /** Ferramentas e competências exercidas no cargo. */
  skills: string[];
};

export type Experience = {
  company: string;
  logo: string;
  /** Fator de zoom do logo: compensa a margem vazia dentro do arquivo. */
  logoScale: number;
  field: string;
  summary: string;
  /** Do cargo mais recente para o mais antigo. */
  roles: ExperienceRole[];
};

export const experiences: Experience[] = [
  {
    company: "Prod",
    logo: "/company-icons/prod_logo.png",
    logoScale: 2.1,
    field: "Agência digital · Marketing e Tecnologia",
    summary:
      "Agência onde percorri seis cargos em menos de três anos, de estagiário de campanhas a desenvolvedor fullstack — acumulando no caminho a base de dados e performance que hoje sustenta meu trabalho de produto.",
    roles: [
      {
        id: "prod-fullstack-ii",
        title: "Desenvolvedor Fullstack II",
        type: "Tempo integral",
        track: "engenharia",
        start: "2022-09",
        end: "2023-04",
        step: "Promoção",
        summary:
          "Autonomia total sobre o front-end das entregas e sobre a análise de dados que orientava as decisões dos clientes.",
        highlights: [
          "Condução independente do desenvolvimento front-end dos projetos da agência",
          "Estratégias data-driven e geração de insights que embasaram decisões de clientes",
          "Otimização contínua de campanhas a partir de métricas de performance",
        ],
        skills: [
          "Front-End",
          "Análise de Dados",
          "Métricas de Performance",
          "Relacionamento com Cliente",
        ],
      },
      {
        id: "prod-frontend-jr",
        title: "Desenvolvedor Front-End Jr I",
        type: "Tempo integral",
        track: "engenharia",
        start: "2022-04",
        end: "2022-09",
        step: "Promoção",
        summary:
          "Responsável pelas estratégias de e-mail marketing e SMS — a iniciativa cresceu até virar um produto novo da agência.",
        highlights: [
          "Implementação de estratégias de e-mail marketing e SMS de ponta a ponta",
          "Iniciativa que evoluiu para um novo produto no portfólio da agência",
          "Certificação oficial em e-mail marketing pela plataforma VEEVA",
        ],
        skills: [
          "E-mail Marketing",
          "SMS",
          "WordPress",
          "Gestão de Leads",
          "VEEVA",
        ],
      },
      {
        id: "prod-assistente-frontend",
        title: "Assistente de Desenvolvedor Front-End",
        type: "Tempo integral",
        track: "engenharia",
        start: "2021-07",
        end: "2022-03",
        step: "Mudança de área",
        summary:
          "Criação, disparo e análise de campanhas de e-mail marketing codificadas à mão em HTML e CSS.",
        highlights: [
          "Desenvolvimento de campanhas em HTML/CSS com foco em compatibilidade entre clientes de e-mail",
          "Automações, segmentação de base e análise de resultados",
          "Operação diária de RD Station, Mailchimp, Salesforce Marketing Cloud, Dinamize e Zenvia",
        ],
        skills: [
          "HTML",
          "CSS",
          "RD Station",
          "Mailchimp",
          "Salesforce Marketing Cloud",
          "Dinamize",
          "Zenvia",
        ],
      },
      {
        id: "prod-midias-performance",
        title: "Mídias de Performance",
        type: "Tempo integral",
        track: "dados",
        start: "2021-01",
        end: "2021-07",
        step: "Efetivação",
        summary:
          "Planejamento, criação e otimização de campanhas em mídias pagas, com leitura de resultado para o cliente.",
        highlights: [
          "Planejamento e otimização de campanhas em Google Ads, Meta Ads e LinkedIn Ads",
          "Relatórios de performance e acompanhamento direto de clientes",
          "Medição e rastreamento via Google Analytics e Tag Manager",
        ],
        skills: [
          "Google Ads",
          "Meta Ads",
          "LinkedIn Ads",
          "Google Analytics",
          "Google Tag Manager",
        ],
      },
      {
        id: "prod-estagio-campanhas",
        title: "Estágio · Campanhas e E-mail Marketing",
        type: "Estágio",
        track: "dados",
        start: "2020-08",
        end: "2020-11",
        step: "Contratação",
        summary:
          "Apoio na criação de campanhas e no desenvolvimento dos layouts em HTML e CSS.",
        highlights: [
          "Desenvolvimento e ajuste de layouts de e-mail em HTML/CSS",
          "Melhorias de responsividade e manutenção de páginas",
        ],
        skills: ["HTML", "CSS", "Responsividade", "E-mail Marketing"],
      },
      {
        id: "prod-freelance-marketing",
        title: "Freelance · Marketing",
        type: "Freelance",
        track: "dados",
        start: "2020-06",
        end: "2020-08",
        summary:
          "Primeiro contato com a operação: suporte ao cliente e análise dos dados que saíam dela.",
        highlights: [
          "Suporte ao cliente e resolução de problemas de acesso",
          "Análise de dados com Excel avançado",
          "Primeiro contato com SAP (Gigya)",
        ],
        skills: [
          "Excel Avançado",
          "Análise de Dados",
          "SAP (Gigya)",
          "Suporte ao Cliente",
        ],
      },
    ],
  },
  {
    company: "Valgroup",
    logo: "/company-icons/valgroup_logo.jpg",
    logoScale: 1.12,
    field: "Indústria · Manutenção e Automação",
    summary:
      "Onde a carreira começou: chão de fábrica, equipamentos parados que precisavam voltar a rodar e o primeiro código — em Ladder, dentro de um CLP.",
    roles: [
      {
        id: "valgroup-tecnico-eletronica",
        title: "Técnico em Eletrônica",
        type: "Tempo integral",
        track: "industria",
        start: "2019-01",
        end: "2019-11",
        summary:
          "Manutenção preventiva e corretiva dos equipamentos da linha de produção.",
        highlights: [
          "Manutenção preventiva e corretiva de equipamentos industriais",
          "Programação básica de CLP em linguagem Ladder",
          "Controle de estoque em Excel e desenvolvimento de projetos em AutoCAD",
        ],
        skills: [
          "Manutenção Industrial",
          "CLP (Ladder)",
          "AutoCAD",
          "Excel Avançado",
        ],
      },
    ],
  },
];

export type CareerChapter = {
  year: string;
  title: string;
  detail: string;
};

/** Os quatro capítulos da trajetória, do mais antigo ao mais recente. */
export const careerChapters: CareerChapter[] = [
  {
    year: "2019",
    title: "Eletrônica industrial",
    detail: "Manutenção, CLP e AutoCAD no chão de fábrica.",
  },
  {
    year: "2020",
    title: "Marketing digital",
    detail: "Campanhas, e-mail marketing e leitura de dados.",
  },
  {
    year: "2021",
    title: "Front-End",
    detail: "HTML/CSS, automações e plataformas de CRM.",
  },
  {
    year: "2022",
    title: "Fullstack e produto",
    detail: "Desenvolvimento e decisões orientadas por dados.",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

/** Agrupamento das competências exercidas nos cargos acima. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End e Web",
    items: ["HTML", "CSS", "Responsividade", "WordPress", "Front-End"],
  },
  {
    title: "Dados e Performance",
    items: [
      "Análise de Dados",
      "Google Analytics",
      "Google Tag Manager",
      "Excel Avançado",
      "Métricas de Performance",
    ],
  },
  {
    title: "Mídia, CRM e Automação",
    items: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "RD Station",
      "Mailchimp",
      "Salesforce Marketing Cloud",
      "Dinamize",
      "Zenvia",
      "VEEVA",
      "SAP (Gigya)",
    ],
  },
  {
    title: "Automação Industrial",
    items: ["Manutenção Industrial", "CLP (Ladder)", "AutoCAD"],
  },
];
