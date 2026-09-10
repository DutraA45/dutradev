import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { EducationItem } from "@/app/components/EducationItem";
import { education } from "@/lib/data/education";

export default function Formacao() {
  return (
    <PageSection>
      <div className="mb-12">
        <SectionHeading>Formação Academica 📚</SectionHeading>

        {education.map((entry) => (
          <EducationItem key={entry.institution} {...entry} />
        ))}
      </div>
    </PageSection>
  );
}
