import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SocialIcon } from "@/app/components/icons/SocialIcon";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/**
 * Tudo legível sem hover: o card é lido em toque, em leitor de tela e por
 * quem só passa o olho. O hover realça, nunca revela.
 */
export function ProjectCard({ project }: { project: Project }) {
  const featured = Boolean(project.featured);
  const primary = project.demo ?? project.repo;
  const live = Boolean(project.demo);

  return (
    <article
      className={cn(
        "group dd-reveal relative flex flex-col overflow-hidden rounded-2xl border transition-colors duration-200",
        featured
          ? "border-green-500/30 bg-green-500/[0.05] md:col-span-2"
          : "border-default bg-[#161B22] hover:border-green-500/40"
      )}
    >
      {project.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-default">
          <Image
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-default bg-[#0D1117] px-2.5 py-1 text-xs font-medium text-gray-300">
            {project.area}
          </span>

          {live && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-medium text-green-400">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-green-400"
              />
              No ar
            </span>
          )}

          {project.status && (
            <span className="rounded-full border border-default bg-[#0D1117] px-2.5 py-1 text-xs text-gray-400">
              {project.status}
            </span>
          )}

          {project.year && (
            <span className="text-xs tabular-nums text-gray-500">
              {project.year}
            </span>
          )}
        </div>

        <h2 className="mt-3 text-xl font-semibold wrap-break-word text-white">
          {primary ? (
            // Link esticado: o card inteiro vira alvo de clique sem aninhar
            // âncoras. Os links secundários sobem com z-10.
            <a
              href={primary}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 hover:text-green-400 focus-visible:text-green-400"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h2>

        <p className="mt-2 text-[15px] leading-relaxed wrap-break-word text-gray-300">
          {project.summary}
        </p>

        {featured && project.highlights && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2.5 text-sm leading-relaxed wrap-break-word text-gray-400"
              >
                <span
                  aria-hidden
                  className="mt-[7px] size-1 shrink-0 rounded-full bg-green-500/80"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-4 mb-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-default bg-[#0D1117] px-2.5 py-1 text-xs text-gray-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-default pt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-green-400 hover:underline"
            >
              Ver projeto
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-green-400"
            >
              <SocialIcon platform="github" className="size-4" />
              Código
            </a>
          )}

          {!project.demo && !project.repo && (
            <span className="text-sm text-gray-500">Código privado</span>
          )}
        </div>
      </div>
    </article>
  );
}
