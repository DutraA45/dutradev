import { PageSection } from "@/app/components/PageSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ProjectCard } from "@/app/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Portfolio() {
  return (
    <PageSection className="w-full">
      <div className="mb-12">
        <SectionHeading>Portfólio</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </PageSection>
  );
}
