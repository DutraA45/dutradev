export type ProjectTag = {
  name: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Website pessoal para exibição de projetos com design responsivo e animações modernas.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Portfolio",
    tags: [
      {
        name: "Next.js",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
    link: "https://github.com/DutraA45/dutradev",
  },
  {
    title: "SilverCraft",
    description:
      "Ferramenta em desenvolvimento para o Albion Online que permite consultar preços de itens via API, com planos de expansão para análise completa de mercado e crafting.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=SilverCraft",
    tags: [
      {
        name: "Next.js",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      },
      {
        name: "Shadcn",
        icon: "https://ui.shadcn.com/favicon.ico",
      },
      {
        name: "API",
        icon: "https://cdn.simpleicons.org/openapiinitiative",
      },
    ],
    link: "https://silvercraft-chi.vercel.app/",
  },
  {
    title: "Cellflow Manager",
    description:
      "Automação inteligente para gestão de assistência técnica, integrando planilhas e dashboards em tempo real.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Cellflow+Manager",
    tags: [
      {
        name: "Excel",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
      },
      {
        name: "Javascript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
    ],
    link: "https://github.com/DutraA45/cellflow-manager",
  },
  {
    title: "QA Mastery",
    description:
      "Sistema full-stack de gestão de usuários com testes automatizados e integração contínua para garantir qualidade.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=QA+Mastery",
    tags: [
      {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "NodeJS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      {
        name: "Cypress",
        icon: "/tech-icons/cypress.svg",
      },
    ],
    link: "https://github.com/DutraA45/qa-mastery",
  },
  {
    title: "FireWatch 2024",
    description:
      "Análise de Dados sobre Incêndios Florestais e Seca no Brasil em 2024.",
    image:
      "https://placehold.co/600x400/1e293b/94a3b8?text=FireWatch+Analysis",
    tags: [
      {
        name: "Python",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        name: "Jupyter Notebook",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
      },
    ],
    link: "https://github.com/DutraA45/FireWatch_Brazil_2024",
  },
  {
    title: "Iniflex CLI",
    description:
      "Sistema de gestão de funcionários via console em Java puro, aplicando conceitos fundamentais de POO e collections sem bibliotecas externas.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=IniflexCLI",
    tags: [
      {
        name: "Java",
        icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      },
    ],
    link: "https://github.com/DutraA45/IniflexCLI",
  },
  {
    title: "Saas Landing Page",
    description:
      "Landing page moderna para SaaS desenvolvida com HTML e Tailwind CSS, focada no aprendizado do framework utility-first.",
    image:
      "https://placehold.co/600x400/1e293b/94a3b8?text=SaaS+Landing+Page",
    tags: [
      {
        name: "HTML",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      },
      {
        name: "CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "Tailwind",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
    link: "https://github.com/DutraA45/SaaS-Landing-Page",
  },
];
