import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/lib/data/social-links";
import { SocialIcon } from "@/app/components/icons/SocialIcon";

export function ExperienceCta() {
  const linkedin = socialLinks.find((link) => link.platform === "linkedin");

  return (
    <section className="dd-reveal rounded-2xl border border-default bg-linear-to-br from-green-500/[0.08] to-transparent p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">
        Procurando alguém para o time?
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">
        Estou aberto a conversar sobre posições de front-end e produto. Posso
        detalhar qualquer um dos cargos acima e mostrar o código por trás deles.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/contato"
          className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-[#010409] transition-colors hover:bg-green-400"
        >
          Falar comigo
          <ArrowRight className="size-4" aria-hidden />
        </a>

        {linkedin && (
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-default bg-[#161B22] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-green-500/50 hover:text-green-400"
          >
            <SocialIcon platform="linkedin" className="size-4" />
            Ver no LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
