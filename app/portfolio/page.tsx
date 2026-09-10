import type { Metadata } from "next";
import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ProjectExplorer } from "@/app/components/portfolio/ProjectExplorer";
import { PortfolioCta } from "@/app/components/portfolio/PortfolioCta";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Projetos de Jefferson Dutra: front-end, fullstack, back-end, análise de dados e automação.",
};

export default function Portfolio() {
  return (
    <PageSection>
      <div className="space-y-14">
        <header className="relative -mx-8 -mt-8 overflow-hidden border-b border-default px-8 py-10">
          <div aria-hidden className="dd-grid absolute inset-0" />

          <div className="relative">
            <SectionHeading className="mb-4">Portfólio</SectionHeading>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              Do front-end à análise de dados, passando por automação e
              back-end. Cada projeto abaixo tem{" "}
              <b className="text-white">o código aberto ou uma versão no ar</b>{" "}
              — nada aqui é maquete.
            </p>
          </div>
        </header>

        <ProjectExplorer projects={projects} />

        <PortfolioCta />
      </div>
    </PageSection>
  );
}
