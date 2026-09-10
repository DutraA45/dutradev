import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/lib/data/social-links";
import { SocialIcon } from "@/app/components/icons/SocialIcon";

export function PortfolioCta() {
  const github = socialLinks.find((link) => link.platform === "github");

  return (
    <section className="dd-reveal rounded-2xl border border-default bg-linear-to-br from-green-500/8 to-transparent p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">
        Tem sempre algo novo em construção
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">
        O que está aqui é o que já foi publicado. O repositório é o lugar onde o
        próximo projeto aparece primeiro.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {github && (
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-[#010409] transition-colors hover:bg-green-400"
          >
            <SocialIcon platform="github" className="size-4" />
            Ver o GitHub
          </a>
        )}

        <a
          href="/contato"
          className="inline-flex items-center gap-2 rounded-lg border border-default bg-[#161B22] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-green-500/50 hover:text-green-400"
        >
          Falar sobre um projeto
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
