import Image from "next/image";
import { GraduationCap } from "lucide-react";
import type { EducationEntry } from "@/lib/data/education";
import {
  concurrentWork,
  formatPeriodLabel,
  isConcluded,
} from "@/lib/education";
import { formatDuration, rampStep } from "@/lib/experience";

export function EducationCard({
  entry,
  /** Posição na lista: 0 é a formação mais recente e define o tom do acento. */
  index,
  featured,
}: {
  entry: EducationEntry;
  index: number;
  featured: boolean;
}) {
  const accent = rampStep(index);
  const concluded = isConcluded(entry);
  const parallel = concurrentWork(entry);

  return (
    <article className="dd-reveal relative overflow-hidden rounded-2xl border border-default bg-[#161B22] p-5 sm:p-6">
      {/* Acento lateral: o tom acompanha a recência da formação. */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-0.75"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-start gap-4">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-default bg-white">
          <Image
            src={entry.logo}
            alt={`Logo da ${entry.institution}`}
            fill
            sizes="56px"
            className={
              entry.logoFit === "cover" ? "object-cover" : "object-contain"
            }
            style={{ transform: `scale(${entry.logoScale})` }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-xs font-medium"
              style={{ backgroundColor: `${accent}1F`, color: accent }}
            >
              {entry.level}
            </span>
            {featured && (
              <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-medium text-green-400">
                Formação mais recente
              </span>
            )}
          </div>

          <h2 className="mt-2 text-lg font-semibold wrap-break-word text-white sm:text-xl">
            {entry.degree}
          </h2>
          <p className="mt-1 text-sm wrap-break-word text-green-500">
            {entry.institution}
          </p>

          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400">
            <span className="tabular-nums">{formatPeriodLabel(entry)}</span>
            <span aria-hidden className="text-gray-600">
              ·
            </span>
            <span>{entry.duration}</span>
            <span aria-hidden className="text-gray-600">
              ·
            </span>
            <span>{concluded ? "Concluído" : "Em andamento"}</span>
          </p>
        </div>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed wrap-break-word text-gray-200">
        {entry.summary}
      </p>

      {parallel.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-default pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
            <GraduationCap className="size-3.5 shrink-0" aria-hidden />
            Em paralelo:
          </span>
          {parallel.map(({ experience, months }) => (
            <span
              key={experience.company}
              className="rounded-full border border-default bg-[#0D1117] px-2.5 py-1 text-xs text-gray-300"
            >
              {experience.company} · {formatDuration(months)}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
