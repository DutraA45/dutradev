"use client";

import { useMemo, useState } from "react";
import { projectAreas, type Project, type ProjectArea } from "@/lib/data/projects";
import { ProjectCard } from "@/app/components/portfolio/ProjectCard";
import { cn } from "@/lib/utils";

/** Quantos projetos aparecem antes do primeiro "carregar mais". */
const PAGE_SIZE = 6;
/** Resto até este tamanho não vira paginação. */
const ORPHAN_SLACK = 2;

const ALL = "Todos";
type Filter = typeof ALL | ProjectArea;

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>(ALL);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([[ALL, projects.length]]);
    for (const project of projects) {
      map.set(project.area, (map.get(project.area) ?? 0) + 1);
    }
    return map;
  }, [projects]);

  // Só oferece as áreas que existem — filtro vazio não vira botão.
  const filters: Filter[] = [
    ALL,
    ...projectAreas.filter((area) => counts.has(area)),
  ];

  const matching = useMemo(
    () =>
      filter === ALL
        ? projects
        : projects.filter((project) => project.area === filter),
    [projects, filter]
  );

  // Evita órfão: com um resto pequeno, mostrar tudo é melhor do que cobrar
  // mais um clique por um ou dois cards.
  const limit =
    matching.length <= PAGE_SIZE + ORPHAN_SLACK ? matching.length : visible;
  const shown = matching.slice(0, limit);
  const remaining = matching.length - shown.length;

  function choose(next: Filter) {
    setFilter(next);
    setVisible(PAGE_SIZE);
  }

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar projetos por área"
        className="flex flex-wrap gap-2"
      >
        {filters.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(option)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "border-green-500/50 bg-green-500/15 text-green-400"
                  : "border-default bg-[#161B22] text-gray-300 hover:border-green-500/40 hover:text-white"
              )}
            >
              {option}
              <span
                className={cn(
                  "text-xs tabular-nums",
                  active ? "text-green-400/70" : "text-gray-500"
                )}
              >
                {counts.get(option) ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-gray-500">
        {matching.length}{" "}
        {matching.length === 1 ? "projeto" : "projetos"}
        {filter !== ALL && ` em ${filter}`}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {shown.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((current) => current + PAGE_SIZE)}
            className="rounded-lg border border-default bg-[#161B22] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-green-500/50 hover:text-green-400"
          >
            Carregar mais ({remaining})
          </button>
        </div>
      )}
    </div>
  );
}
