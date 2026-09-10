import Image from "next/image";
import { contactInfo } from "@/lib/data/contact-info";
import { socialLinks } from "@/lib/data/social-links";
import { SocialIcon } from "@/app/components/icons/SocialIcon";
import { FooterNote } from "@/app/components/FooterNote";

export function ProfileSidebar() {
  return (
    <div className="details-col pt-10 pr-10 pl-10 pb-5 flex flex-col items-center relative">
      <div className="mb-6 -mt-42 z-10 w-60 h-60 rounded-full border-2 border-default overflow-hidden relative">
        <Image
          src="/icon.png"
          alt="Foto de perfil"
          fill
          sizes="240px"
          className="object-cover"
          priority
        />
      </div>

      {/* Nome - Centralizado */}
      <h2 className="text-white font-semibold text-2xl md:text-3xl mb-2 text-center">
        Jefferson Dutra
      </h2>

      {/* Cargo/Profissão - Centralizado */}
      <h3 className="text-green-500 font-semibold text-xl mb-6 text-center">
        Frontend Dev
      </h3>

      {/* Informações com ícones - Alinhados */}
      <div className="space-y-3 mb-8 w-full max-w-xs">
        {contactInfo.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-4 text-white">
            <Icon className="w-5 h-5 mr-2 shrink-0" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Ponto divisor */}
      <div className="w-full flex justify-center mb-5">
        <span className="text-gray-400 text-xl">•</span>
      </div>

      {/* Redes sociais */}
      <div className="flex justify-center space-x-4">
        {socialLinks.map(({ platform, href, label }) => (
          <a
            key={platform}
            href={href}
            aria-label={label}
            className="text-white hover:text-green-400 transition-colors"
          >
            <SocialIcon platform={platform} className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Linha divisória - aparece apenas em telas médias/grandes */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px border-color"></div>

      {/* Linha divisória entre e-mail e redes sociais */}
      <div className="w-full border-t border-gray-700 my-4 mt-10 -mb-2 md:hidden"></div>

      <FooterNote className="hidden md:block mt-auto pt-6 text-gray-400 text-xs" />
    </div>
  );
}
