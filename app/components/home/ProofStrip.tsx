import { ArrowUpRight } from "lucide-react";
import { education } from "@/lib/data/education";
import { projects } from "@/lib/data/projects";
import { careerStats, durationParts } from "@/lib/experience";
import {
  DurationValue,
  StatTileAccent,
  statTileClassName,
} from "@/app/components/StatTile";
import { cn } from "@/lib/utils";

function ProofTile({
  value,
  label,
  href,
}: {
  value: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className={cn(
          statTileClassName,
          "group block h-full transition-colors hover:border-green-500/40"
        )}
      >
        <StatTileAccent />
        <ArrowUpRight
          aria-hidden
          className="absolute right-3 top-3 size-4 text-gray-600 transition-colors group-hover:text-green-400"
        />
        <p className="text-2xl font-semibold leading-none text-white sm:text-3xl">
          {value}
        </p>
        <p className="mt-2 text-xs leading-snug text-gray-400">{label}</p>
      </a>
    </li>
  );
}

/** Quatro números, todos calculados dos dados — e cada um leva à sua página. */
export function ProofStrip() {
  const career = careerStats();

  return (
    <nav aria-label="Resumo em números">
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <ProofTile
          href="/experiencias"
          label="De experiência profissional"
          value={<DurationValue parts={durationParts(career.months)} />}
        />
        <ProofTile
          href="/experiencias"
          label="Evoluções de cargo na mesma empresa"
          value={career.progressions}
        />
        <ProofTile
          href="/formacao"
          label="Formações, do técnico à pós"
          value={education.length}
        />
        <ProofTile
          href="/portfolio"
          label="Projetos publicados"
          value={projects.length}
        />
      </ul>
    </nav>
  );
}
