import { ArrowRight, ChevronRight } from "lucide-react";
import { hero } from "@/lib/data/home";
import { availability } from "@/lib/data/contact-info";

export function HomeHero() {
  return (
    <header className="relative -mx-8 -mt-8 overflow-hidden border-b border-default px-8 py-10 sm:py-12">
      <div aria-hidden className="dd-grid absolute inset-0" />

      <div className="relative">
        {availability.open && (
          <a
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 transition-colors hover:bg-green-500/15"
          >
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-green-400" />
            </span>
            {availability.headline}
          </a>
        )}

        <p className="mt-5 text-sm font-medium text-gray-400">{hero.eyebrow}</p>

        <h1 className="mt-2 max-w-3xl text-3xl font-semibold leading-tight wrap-break-word text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {hero.headline}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
          {hero.lead}
        </p>

        {/* A trajetória em uma linha: cada seta é um degrau contado na página de experiências. */}
        <ol className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-gray-400">
          {hero.path.map((step, index) => (
            <li key={step} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="size-3.5 shrink-0 text-gray-600"
                  aria-hidden
                />
              )}
              <span
                className={
                  index === hero.path.length - 1
                    ? "font-medium text-green-400"
                    : undefined
                }
              >
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-[#010409] transition-colors hover:bg-green-400"
          >
            Ver projetos
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 rounded-lg border border-default bg-[#161B22] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-green-500/50 hover:text-green-400"
          >
            Falar comigo
          </a>
        </div>
      </div>
    </header>
  );
}
