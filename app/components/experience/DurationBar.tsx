import type { Experience } from "@/lib/data/experiences";
import {
  formatDuration,
  monthLabel,
  rampStep,
  roleShares,
} from "@/lib/experience";
import { cn } from "@/lib/utils";

/**
 * Barra ordinal de um só matiz: cada fatia é um cargo, da esquerda (mais
 * antigo, verde escuro) para a direita (mais recente, verde claro). O tom
 * carrega a ordem no tempo — a legenda é a própria linha do tempo abaixo.
 */
export function DurationBar({ experience }: { experience: Experience }) {
  const shares = roleShares(experience);
  const chronological = [...shares].reverse();
  const oldest = chronological[0].role;
  const newest = chronological[chronological.length - 1].role;
  const last = chronological.length - 1;

  return (
    // Decorativa para leitores de tela: períodos e durações estão, em texto,
    // na linha do tempo logo abaixo.
    <figure className="mt-6" aria-hidden>
      <figcaption className="mb-2 text-[11px] text-gray-500">
        Distribuição do tempo entre os {experience.roles.length} cargos
      </figcaption>

      <div className="flex h-2 gap-0.5">
        {chronological.map(({ role, index, months, share }, position) => (
          <span
            key={role.id}
            className="group/seg relative h-full"
            style={{ width: `${share * 100}%` }}
          >
            <span
              className={cn(
                "block h-full w-full rounded-[1px] transition-opacity duration-200 group-hover/seg:opacity-80",
                position === 0 && "rounded-l-lg",
                position === last && "rounded-r-lg",
              )}
              style={{ backgroundColor: rampStep(index) }}
            />

            <span
              className={cn(
                "pointer-events-none absolute bottom-full z-20 mb-2 whitespace-nowrap rounded-md border border-default bg-[#010409] px-2 py-1 text-[11px] text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/seg:opacity-100",
                position === 0 && "left-0",
                position === last && "right-0",
                position !== 0 &&
                  position !== last &&
                  "left-1/2 -translate-x-1/2",
              )}
            >
              {role.title} · {formatDuration(months)}
            </span>
          </span>
        ))}
      </div>

      <div className="mt-2 flex justify-between text-[11px] tabular-nums text-gray-500">
        <span>{monthLabel(oldest.start)}</span>
        <span>{newest.end ? monthLabel(newest.end) : "Atual"}</span>
      </div>
    </figure>
  );
}
