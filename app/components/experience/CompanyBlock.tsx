import Image from "next/image";
import type { Experience } from "@/lib/data/experiences";
import { companySpan, formatDuration } from "@/lib/experience";
import { DurationBar } from "@/app/components/experience/DurationBar";
import { RoleItem } from "@/app/components/experience/RoleItem";

export function CompanyBlock({
  experience,
  /** A primeira empresa da lista guarda o cargo mais recente da carreira. */
  featured,
}: {
  experience: Experience;
  featured: boolean;
}) {
  const span = companySpan(experience);
  const multiRole = experience.roles.length > 1;

  return (
    <article className="dd-reveal rounded-2xl border border-default">
      <header className="rounded-t-2xl border-b border-default bg-[#161B22] p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-default bg-white">
            <Image
              src={experience.logo}
              alt={`Logo da ${experience.company}`}
              fill
              sizes="56px"
              className="object-contain"
              style={{ transform: `scale(${experience.logoScale})` }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-semibold wrap-break-word text-white sm:text-2xl">
              {experience.company}
            </h2>
            <p className="mt-1 text-sm wrap-break-word text-green-500">
              {experience.field}
            </p>
            <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400">
              <span className="tabular-nums">{span.period}</span>
              <span aria-hidden className="text-gray-600">
                ·
              </span>
              <span>{formatDuration(span.months)}</span>
              <span aria-hidden className="text-gray-600">
                ·
              </span>
              <span>
                {experience.roles.length}{" "}
                {multiRole ? "cargos" : "cargo"}
              </span>
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed wrap-break-word text-gray-300">
          {experience.summary}
        </p>

        {multiRole && <DurationBar experience={experience} />}
      </header>

      <ol className="relative space-y-2 p-5 sm:p-6">
        {multiRole && (
          <span
            aria-hidden
            className="absolute bottom-6 left-[26px] top-11 w-px sm:left-[30px]"
            style={{
              background:
                "linear-gradient(to bottom, #3D444D 0%, #3D444D 90%, transparent 100%)",
            }}
          />
        )}

        {experience.roles.map((role, index) => (
          <RoleItem
            key={role.id}
            role={role}
            index={index}
            featured={featured && index === 0}
          />
        ))}
      </ol>
    </article>
  );
}
