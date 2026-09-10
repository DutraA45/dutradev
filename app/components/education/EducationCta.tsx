import { ArrowRight, Briefcase } from "lucide-react";

export function EducationCta() {
  return (
    <section className="dd-reveal rounded-2xl border border-default bg-linear-to-br from-green-500/8 to-transparent p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">
        A teoria virou prática desde o primeiro ano
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">
        Cada formação acima corresponde a um período trabalhando na área. Veja
        onde isso foi aplicado.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/experiencias"
          className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-[#010409] transition-colors hover:bg-green-400"
        >
          <Briefcase className="size-4" aria-hidden />
          Ver a experiência profissional
        </a>

        <a
          href="/contato"
          className="inline-flex items-center gap-2 rounded-lg border border-default bg-[#161B22] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-green-500/50 hover:text-green-400"
        >
          Falar comigo
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
