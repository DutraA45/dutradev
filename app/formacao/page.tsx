import type { Metadata } from "next";
import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { EducationStats } from "@/app/components/education/EducationStats";
import { StudyWorkTimeline } from "@/app/components/education/StudyWorkTimeline";
import { EducationCard } from "@/app/components/education/EducationCard";
import { Certifications } from "@/app/components/education/Certifications";
import { EducationCta } from "@/app/components/education/EducationCta";
import { education } from "@/lib/data/education";
import { educationStats } from "@/lib/education";
import { formatDuration } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Formação | Jefferson Dutra",
  description:
    "Formação acadêmica de Jefferson Dutra: técnico em eletrônica, engenharia da computação e pós-graduação em desenvolvimento fullstack.",
};

export default function Formacao() {
  const { span, concurrent } = educationStats();

  return (
    <PageSection>
      <div className="space-y-14">
        <header className="relative -mx-8 -mt-8 overflow-hidden border-b border-default px-8 py-10">
          <div aria-hidden className="dd-grid absolute inset-0" />

          <div className="relative">
            <SectionHeading className="mb-4">Formação Acadêmica</SectionHeading>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              <b className="text-white">{formatDuration(span)}</b> de estudo
              formal em linha reta: técnico em eletrônica, engenharia da
              computação e pós em desenvolvimento fullstack. Foram{" "}
              <b className="text-white">{formatDuration(concurrent)}</b>{" "}
              estudando e trabalhando ao mesmo tempo.
            </p>

            <div className="mt-8">
              <EducationStats />
            </div>
          </div>
        </header>

        <StudyWorkTimeline />

        <div className="space-y-6">
          {education.map((entry, index) => (
            <EducationCard
              key={entry.id}
              entry={entry}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>

        <Certifications />

        <EducationCta />
      </div>
    </PageSection>
  );
}
