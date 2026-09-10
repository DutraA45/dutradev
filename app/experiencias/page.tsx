import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { CompanyHeader } from "@/app/components/CompanyHeader";
import { TimelineItem } from "@/app/components/TimelineItem";
import { experiences } from "@/lib/data/experiences";

export default function Experiencias() {
  return (
    <PageSection>
      <div className="mb-12">
        <SectionHeading>Experiências Profissionais</SectionHeading>

        {experiences.map((experience) => (
          <div key={experience.company}>
            <CompanyHeader
              company={experience.company}
              logo={experience.logo}
            />

            <ol className="relative border-s border-green-500 ms-8">
              {experience.roles.map((role) => (
                <TimelineItem key={role.title} {...role} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
