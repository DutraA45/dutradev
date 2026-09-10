import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data/education";
import { SectionTitle } from "@/app/components/SectionTitle";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section aria-labelledby="certificacoes" className="dd-reveal">
      <SectionTitle id="certificacoes">Certificações</SectionTitle>

      <ul className="mt-6 space-y-3">
        {certifications.map((certification) => (
          <li
            key={certification.id}
            className="flex items-start gap-4 rounded-xl border border-default bg-[#161B22] p-4 sm:p-5"
          >
            <span
              aria-hidden
              className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10"
            >
              <BadgeCheck className="size-5 text-green-500" />
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-base font-semibold wrap-break-word text-white">
                  {certification.title}
                </h3>
                <span className="text-sm text-green-500">
                  {certification.issuer}
                </span>
                <span aria-hidden className="text-gray-600">
                  ·
                </span>
                <span className="text-sm tabular-nums text-gray-400">
                  {certification.year}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed wrap-break-word text-gray-400">
                {certification.context}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
