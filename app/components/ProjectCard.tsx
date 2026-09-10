import Image from "next/image";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({
  project,
  featuredLabel,
}: {
  project: Project;
  featuredLabel?: string;
}) {
  return (
    <div className="group relative h-56 rounded-2xl overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay e tags (sempre visíveis) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700"
            >
              <Image
                src={tag.icon}
                alt={tag.name}
                width={12}
                height={12}
                className="w-3 h-3 mr-1.5"
              />
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Conteúdo que aparece no hover */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {featuredLabel && (
            <span className="text-xs font-medium bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full">
              {featuredLabel}
            </span>
          )}
        </div>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <a
          href={project.link}
          className="text-indigo-400 text-sm font-medium inline-flex items-center hover:underline"
        >
          Ver projeto <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
}
