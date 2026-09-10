import { techGroups, techStack } from "@/lib/data/tech-stack";
import { TechBadge } from "@/app/components/TechBadge";
import { SectionTitle } from "@/app/components/SectionTitle";

/** O stack agrupado por função — diz para que serve cada coisa, não só o nome. */
export function StackGroups() {
  return (
    <section aria-labelledby="stack" className="dd-reveal">
      <SectionTitle id="stack">Com o que eu trabalho</SectionTitle>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
        O que está aqui é o que uso nos projetos e no trabalho hoje — não a
        lista de tudo que já toquei.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {techGroups.map((group) => {
          const items = techStack.filter((item) => item.group === group);
          if (items.length === 0) return null;

          return (
            <div
              key={group}
              className="rounded-2xl border border-default bg-[#0D1117] p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                {group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <TechBadge key={item.name} name={item.name} icon={item.icon} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
