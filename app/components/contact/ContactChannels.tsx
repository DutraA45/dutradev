import { Mail, Phone, type LucideIcon } from "lucide-react";
import { contact } from "@/lib/data/contact-info";
import { socialLinks } from "@/lib/data/social-links";
import { SocialIcon } from "@/app/components/icons/SocialIcon";
import { SectionTitle } from "@/app/components/SectionTitle";
import { CopyButton } from "@/app/components/contact/CopyButton";

function Channel({
  icon,
  name,
  value,
  href,
  external,
  copyValue,
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
  href: string;
  external?: boolean;
  copyValue?: string;
}) {
  return (
    <li className="group relative flex items-center gap-4 rounded-xl border border-default bg-[#161B22] p-4 transition-colors hover:border-green-500/40">
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500"
      >
        {icon}
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-gray-500">{name}</p>
        {/* Link esticado: o card inteiro é o alvo; o botão de copiar sobe com z-10. */}
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="truncate text-sm font-medium text-white after:absolute after:inset-0 group-hover:text-green-400"
        >
          {value}
        </a>
      </div>

      {copyValue && <CopyButton value={copyValue} label={name} />}
    </li>
  );
}

const socialIconSize = "size-5";

export function ContactChannels() {
  const linkedin = socialLinks.find((link) => link.platform === "linkedin");
  const github = socialLinks.find((link) => link.platform === "github");

  const Icon = (icon: LucideIcon) => {
    const Component = icon;
    return <Component className={socialIconSize} />;
  };

  return (
    <section aria-labelledby="canais">
      <SectionTitle id="canais">Canais diretos</SectionTitle>

      <ul className="mt-6 space-y-3">
        <Channel
          icon={Icon(Mail)}
          name="E-mail"
          value={contact.email}
          href={`mailto:${contact.email}`}
          copyValue={contact.email}
        />
        <Channel
          icon={Icon(Phone)}
          name="Telefone"
          value={contact.phone.display}
          href={contact.phone.href}
          copyValue={contact.phone.display}
        />
        {linkedin && (
          <Channel
            icon={<SocialIcon platform="linkedin" className={socialIconSize} />}
            name="LinkedIn"
            value="/in/dutraa45"
            href={linkedin.href}
            external
          />
        )}
        {github && (
          <Channel
            icon={<SocialIcon platform="github" className={socialIconSize} />}
            name="GitHub"
            value="@DutraA45"
            href={github.href}
            external
          />
        )}
      </ul>
    </section>
  );
}
