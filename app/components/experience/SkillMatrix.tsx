import { skillGroups } from "@/lib/data/experiences";
import { SectionTitle } from "@/app/components/SectionTitle";

/** Recorte por domínio das competências exercidas nos cargos acima. */
export function SkillMatrix() {
  return (
    <section aria-labelledby="competencias" className="dd-reveal">
      <SectionTitle id="competencias">Ferramentas e competências</SectionTitle>

      <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-default bg-[#161B22] p-5"
          >
            <h3 className="text-sm font-semibold text-white">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-default bg-[#0D1117] px-2.5 py-1 text-xs text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
