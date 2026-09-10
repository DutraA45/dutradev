import type { Metadata } from "next";
import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { CareerStats } from "@/app/components/experience/CareerStats";
import { CareerTrail } from "@/app/components/experience/CareerTrail";
import { CompanyBlock } from "@/app/components/experience/CompanyBlock";
import { SkillMatrix } from "@/app/components/experience/SkillMatrix";
import { ExperienceCta } from "@/app/components/experience/ExperienceCta";
import { experiences } from "@/lib/data/experiences";
import { careerStats, formatDuration } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experiências | Jefferson Dutra",
  description:
    "Trajetória profissional de Jefferson Dutra: da eletrônica industrial ao desenvolvimento front-end, cargo a cargo.",
};

export default function Experiencias() {
  const { months, roles } = careerStats();

  return (
    <PageSection>
      <div className="space-y-14">
        <header className="relative -mx-8 -mt-8 overflow-hidden border-b border-default px-8 py-10">
          <div aria-hidden className="dd-grid absolute inset-0" />

          <div className="relative">
            <SectionHeading className="mb-4">
              Experiências Profissionais
            </SectionHeading>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              Da manutenção de equipamentos em chão de fábrica ao
              desenvolvimento de produtos digitais orientados a dados. São{" "}
              <b className="text-white">{formatDuration(months)}</b> de atuação
              e <b className="text-white">{roles} cargos</b> — uma progressão
              construída um degrau por vez.
            </p>

            <div className="mt-8">
              <CareerStats />
            </div>
          </div>
        </header>

        <CareerTrail />

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <CompanyBlock
              key={experience.company}
              experience={experience}
              featured={index === 0}
            />
          ))}
        </div>

        <SkillMatrix />

        <ExperienceCta />
      </div>
    </PageSection>
  );
}
