import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TechBadge } from "@/app/components/TechBadge";
import { ProjectCard } from "@/app/components/portfolio/ProjectCard";
import { techStack } from "@/lib/data/tech-stack";
import { projects } from "@/lib/data/projects";

/** Os três primeiros da mesma lista do portfólio — uma fonte só de verdade. */
const featuredProjects = projects.slice(0, 3);

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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{ ...project, featured: false }}
          />
        ))}
      </div>
    </PageSection>
  );
}
