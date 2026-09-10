import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageSection } from "@/app/components/PageSection";
import { SectionTitle } from "@/app/components/SectionTitle";
import { HomeHero } from "@/app/components/home/HomeHero";
import { ProofStrip } from "@/app/components/home/ProofStrip";
import { Pillars } from "@/app/components/home/Pillars";
import { StackGroups } from "@/app/components/home/StackGroups";
import { HomeCta } from "@/app/components/home/HomeCta";
import { ProjectCard } from "@/app/components/portfolio/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Jefferson Dutra · Desenvolvedor Front-End",
  description:
    "Desenvolvedor front-end em React e Next.js, com base em engenharia e histórico em mídia paga e análise de dados.",
};

/** Os três primeiros da mesma lista do portfólio — uma fonte só de verdade. */
const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <PageSection>
      <div className="space-y-14">
        <HomeHero />

        <ProofStrip />

        <Pillars />

        <section aria-labelledby="projetos" className="dd-reveal">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionTitle id="projetos">Projetos em destaque</SectionTitle>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-green-400"
            >
              Ver todos
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={{ ...project, featured: false }}
              />
            ))}
          </div>
        </section>

        <StackGroups />

        <HomeCta />
      </div>
    </PageSection>
  );
}
