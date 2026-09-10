import Image from "next/image";
import { availability, contactInfo } from "@/lib/data/contact-info";
import { socialLinks } from "@/lib/data/social-links";
import { SocialIcon } from "@/app/components/icons/SocialIcon";
import { FooterNote } from "@/app/components/FooterNote";

/**
 * A coluna de identidade. Em telas largas ela gruda ao rolar, então nome,
 * disponibilidade e contato ficam à vista em qualquer ponto da página.
 */
export function ProfileSidebar() {
  return (
    <aside className="shrink-0 border-default lg:w-80 lg:border-r">
      {/* top-38 compensa os 128px em que a foto sobe além da borda do painel. */}
      <div className="flex flex-col items-center px-8 pb-6 pt-10 lg:sticky lg:top-38">
        <div className="relative z-10 -mt-42 mb-6 size-60 overflow-hidden rounded-full border-2 border-default bg-[#0D1117]">
          <Image
            src="/icon.png"
            alt="Foto de Jefferson Dutra"
            fill
            sizes="240px"
            className="object-cover"
            priority
          />
        </div>

        <p className="text-center text-2xl font-semibold text-white md:text-3xl">
          Jefferson Dutra
        </p>
        <p className="mt-1 text-center text-base font-medium text-green-500">
          Desenvolvedor Front-End
        </p>

        {availability.open && (
          <a
            href="/contato"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 transition-colors hover:bg-green-500/15"
          >
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-green-400" />
            </span>
            Aberto a propostas
          </a>
        )}

        <ul className="mt-7 w-full max-w-xs space-y-3">
          {contactInfo.map(({ icon: Icon, label, href }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-gray-200">
              <Icon className="size-4 shrink-0 text-gray-500" aria-hidden />
              {href ? (
                <a
                  href={href}
                  className="min-w-0 truncate transition-colors hover:text-green-400"
                >
                  {label}
                </a>
              ) : (
                <span className="min-w-0 truncate">{label}</span>
              )}
            </li>
          ))}
        </ul>

        <hr className="my-6 w-full max-w-xs border-default" />

        <ul className="flex items-center gap-2">
          {socialLinks.map(({ platform, href, label }) => (
            <li key={platform}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-lg border border-transparent text-gray-300 transition-colors hover:border-default hover:bg-[#161B22] hover:text-green-400"
              >
                <SocialIcon platform={platform} className="size-5" />
              </a>
            </li>
          ))}
        </ul>

        <FooterNote className="mt-8 hidden text-xs text-gray-500 lg:block" />
      </div>
    </aside>
  );
}
