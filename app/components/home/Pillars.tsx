import { pillars } from "@/lib/data/home";
import { SectionTitle } from "@/app/components/SectionTitle";

export function Pillars() {
  return (
    <section aria-labelledby="diferenciais" className="dd-reveal">
      <SectionTitle id="diferenciais">O que eu trago para o time</SectionTitle>

      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="rounded-2xl border border-default bg-[#161B22] p-5 sm:p-6"
          >
            <span
              aria-hidden
              className="flex size-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500"
            >
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed wrap-break-word text-gray-400">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
