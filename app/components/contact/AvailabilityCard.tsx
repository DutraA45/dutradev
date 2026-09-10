import { MapPin } from "lucide-react";
import { availability, contact } from "@/lib/data/contact-info";

export function AvailabilityCard() {
  return (
    <section
      aria-labelledby="disponibilidade"
      className="dd-reveal rounded-2xl border border-green-500/30 bg-green-500/[0.05] p-5 sm:p-6"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="min-w-0 lg:flex-1">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-green-400">
            <span aria-hidden className="relative flex size-2">
              {availability.open && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:animate-none" />
              )}
              <span className="relative inline-flex size-2 rounded-full bg-green-400" />
            </span>
            {availability.open ? "Aberto a propostas" : "Sem disponibilidade"}
          </p>

          <h2
            id="disponibilidade"
            className="mt-3 text-xl font-semibold wrap-break-word text-white sm:text-2xl"
          >
            {availability.headline}
          </h2>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {availability.modalities.map((modality) => (
              <li
                key={modality}
                className="rounded-full border border-default bg-[#0D1117] px-2.5 py-1 text-xs text-gray-300"
              >
                {modality}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:flex-1">
          <ul className="space-y-1.5">
            {availability.notes.map((note) => (
              <li
                key={note}
                className="flex gap-2.5 text-sm leading-relaxed wrap-break-word text-gray-400"
              >
                <span
                  aria-hidden
                  className="mt-[7px] size-1 shrink-0 rounded-full bg-green-500/80"
                />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 flex items-center gap-2 border-t border-green-500/20 pt-4 text-sm text-gray-400">
            <MapPin className="size-4 shrink-0 text-gray-500" aria-hidden />
            {contact.location}
          </p>
        </div>
      </div>
    </section>
  );
}
