import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TechBadge } from "@/app/components/TechBadge";
import { ProjectCard } from "@/app/components/ProjectCard";
import { techStack } from "@/lib/data/tech-stack";
import type { Project } from "@/lib/data/projects";

const featuredProjects: (Project & { featuredLabel?: string })[] = [
  {
    title: "Portfólio",
    description:
      "Website pessoal para exibição de projetos com design responsivo e animações modernas.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Portfólio",
    tags: [
      {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "TypeScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
    ],
    link: "https://github.com/DutraA45/dutradev",
    featuredLabel: "Destaque",
  },
  {
    title: "Cellflow Manager",
    description:
      "Automação inteligente para gestão de assistência técnica, integrando planilhas e dashboards em tempo real",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Cellflow+Manager",
    tags: [
      {
        name: "JavaScript",
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
];

export default function Home() {
  return (
    <PageSection>
      {/* Sobre Mim */}
      <div className="mb-12">
        <SectionHeading>Sobre Mim 👨‍💻</SectionHeading>
        <p className="text-lg leading-relaxed text-white">
          Desenvolvedor Front-End com foco em <b>React</b> e <b>Next.js</b>,
          criando interfaces rápidas, interativas e orientadas a resultados.
          Experiência em <b>marketing digital</b> aplicada ao desenvolvimento
          de soluções com <b>impacto real</b>.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <SectionHeading>Tech Stack</SectionHeading>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {techStack.map((tech) => (
            <TechBadge key={tech.name} {...tech} />
          ))}
        </div>
      </div>

      {/* Projetos Recentes */}
      <div className="flex justify-between items-center mb-8">
        <SectionHeading className="mb-0">Projetos Recentes</SectionHeading>
        <a
          href="/portfolio"
          className="text-sm font-medium underline underline-offset-4 hover:text-green-400 transition-colors"
        >
          Ver todos →
        </a>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            featuredLabel={project.featuredLabel}
          />
        ))}
      </div>
    </PageSection>
  );
}
