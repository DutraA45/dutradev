import {
  ArrowUpRight,
  BadgeCheck,
  GitBranch,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import type { ExperienceRole } from "@/lib/data/experiences";
import {
  formatDuration,
  formatPeriod,
  isCurrent,
  rampStep,
  roleMonths,
} from "@/lib/experience";
import { cn } from "@/lib/utils";

const STEP_ICONS: Record<string, LucideIcon> = {
  Promoção: ArrowUpRight,
  Efetivação: BadgeCheck,
  "Mudança de área": GitBranch,
  Contratação: Handshake,
};

/** Só a promoção ganha destaque de cor — os demais degraus ficam neutros. */
function StepChip({ label }: { label: string }) {
  const Icon = STEP_ICONS[label] ?? BadgeCheck;
  const promotion = label === "Promoção";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        promotion
          ? "border-green-500/40 bg-green-500/10 text-green-400"
          : "border-default bg-[#161B22] text-gray-300"
      )}
    >
      <Icon className="size-3.5 shrink-0" aria-hidden />
      {label}
    </span>
  );
}

export function RoleItem({
  role,
  index,
  featured,
}: {
  role: ExperienceRole;
  /** Posição na empresa: 0 é o cargo mais recente e define o tom do marcador. */
  index: number;
  featured: boolean;
}) {
  const months = roleMonths(role);
  const current = isCurrent(role);

  return (
    <li className="relative pl-8">
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-[19px] size-[13px] rounded-full ring-4 ring-[#0D1117]",
          featured && "shadow-[0_0_0_5px_rgba(34,197,94,0.16)]"
        )}
        style={{ backgroundColor: rampStep(index) }}
      />

      <div
        className={cn(
          "rounded-xl border p-4 transition-colors duration-200",
          featured
            ? "border-green-500/30 bg-green-500/[0.05]"
            : "border-transparent hover:border-default hover:bg-[#161B22]"
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <h3 className="text-lg font-semibold wrap-break-word text-white">
            {role.title}
          </h3>
          {featured && (
            <span className="shrink-0 rounded-full bg-green-500/15 px-2.5 py-1 text-xs font-medium text-green-400">
              {current ? "Cargo atual" : "Cargo mais recente"}
            </span>
          )}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm text-gray-400">
          {role.step && <StepChip label={role.step} />}
          <span className="tabular-nums">
            {formatPeriod(role.start, role.end)}
          </span>
          <span aria-hidden className="text-gray-600">
            ·
          </span>
          <span>{formatDuration(months)}</span>
          <span aria-hidden className="text-gray-600">
            ·
          </span>
          <span>{role.type}</span>
        </div>

        <p className="mt-3 text-[15px] leading-relaxed wrap-break-word text-gray-200">
          {role.summary}
        </p>

        <ul className="mt-3 space-y-1.5">
          {role.highlights.map((highlight) => (
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

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-default bg-[#0D1117] px-2.5 py-1 text-xs text-gray-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
