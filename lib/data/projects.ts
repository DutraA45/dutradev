/** Área principal do projeto — é por ela que o portfólio filtra. */
export const projectAreas = [
  "Front-End",
  "Fullstack",
  "Back-End",
  "Dados",
  "Automação",
] as const;

export type ProjectArea = (typeof projectAreas)[number];

export type Project = {
  /** Slug estável: chave de lista e âncora de URL. */
  id: string;
  title: string;
  area: ProjectArea;
  /** Uma linha: o que o projeto é e para quem. */
  summary: string;
  /** Só nos projetos em destaque — entregas concretas, em ordem de peso. */
  highlights?: string[];
  /** Tecnologias, em ordem de protagonismo. */
  stack: string[];
  /** Preenchido só quando o projeto não está concluído. */
  status?: string;
  /** Ano de publicação. Some do card enquanto estiver vazio. */
  year?: string;
  /** Captura de tela em /public. Sem ela, o card vira texto puro. */
  image?: string;
  repo?: string;
  demo?: string;
  /** Abre a lista em largura dupla e exibe os highlights. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "silvercraft",
    title: "SilverCraft",
    area: "Front-End",
    summary:
      "Ferramenta para o Albion Online que consulta o preço dos itens em tempo real pela API do jogo.",
    highlights: [
      "Consulta de preços de itens direto na API pública do Albion Online",
      "Interface construída em Next.js com componentes Shadcn UI",
      "Em evolução para análise de mercado e cálculo de crafting",
    ],
    stack: ["Next.js", "Shadcn UI", "API REST"],
    status: "Em desenvolvimento",
    demo: "https://silvercraft-chi.vercel.app/",
    featured: true,
  },
  {
    id: "qa-mastery",
    title: "QA Mastery",
    area: "Fullstack",
    summary:
      "Sistema fullstack de gestão de usuários com testes automatizados e integração contínua garantindo a qualidade a cada commit.",
    stack: ["React", "Node.js", "Cypress"],
    repo: "https://github.com/DutraA45/qa-mastery",
  },
  {
    id: "firewatch-2024",
    title: "FireWatch 2024",
    area: "Dados",
    summary:
      "Análise de dados sobre incêndios florestais e seca no Brasil ao longo de 2024.",
    stack: ["Python", "Jupyter Notebook"],
    repo: "https://github.com/DutraA45/FireWatch_Brazil_2024",
  },
  {
    id: "cellflow-manager",
    title: "Cellflow Manager",
    area: "Automação",
    summary:
      "Automação para gestão de assistência técnica, integrando planilhas e dashboards em tempo real.",
    stack: ["JavaScript", "Excel"],
    repo: "https://github.com/DutraA45/cellflow-manager",
  },
  {
    id: "dutradev",
    title: "Portfólio DutraDev",
    area: "Front-End",
    summary:
      "Este site. Portfólio pessoal com páginas estáticas, componentes tipados e design próprio.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/DutraA45/dutradev",
  },
  {
    id: "iniflex-cli",
    title: "Iniflex CLI",
    area: "Back-End",
    summary:
      "Gestão de funcionários via console em Java puro, aplicando POO e collections sem nenhuma biblioteca externa.",
    stack: ["Java"],
    repo: "https://github.com/DutraA45/IniflexCLI",
  },
  {
    id: "saas-landing-page",
    title: "SaaS Landing Page",
    area: "Front-End",
    summary:
      "Landing page para SaaS em HTML e Tailwind CSS, feita para dominar o modelo utility-first.",
    stack: ["HTML", "CSS", "Tailwind CSS"],
    repo: "https://github.com/DutraA45/SaaS-Landing-Page",
  },
];

/** Quantos projetos cada área tem — alimenta os contadores dos filtros. */
export function countByArea() {
  const counts = new Map<ProjectArea, number>();
  for (const project of projects) {
    counts.set(project.area, (counts.get(project.area) ?? 0) + 1);
  }
  return counts;
}
