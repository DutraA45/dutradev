import { careerChapters } from "@/lib/data/experiences";
import { chapterStep } from "@/lib/experience";
import { SectionTitle } from "@/app/components/experience/SectionTitle";

/** Os capítulos da carreira em uma régua horizontal, do mais antigo ao atual. */
export function CareerTrail() {
  const total = careerChapters.length;

  return (
    <section aria-labelledby="trajetoria" className="dd-reveal">
      <SectionTitle id="trajetoria">Trajetória</SectionTitle>

      <ol className="mt-6 grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {careerChapters.map((chapter, index) => {
          const color = chapterStep(index, total);
          const nextColor =
            index < total - 1 ? chapterStep(index + 1, total) : null;

          return (
            <li key={chapter.year} className="relative">
              {/* Liga este ponto ao próximo: some no último e fora do desktop. */}
              {nextColor && (
                <span
                  aria-hidden
                  className="absolute left-[7px] top-[7px] hidden h-px lg:block"
                  style={{
                    width: "calc(100% + 17px)",
                    backgroundImage: `linear-gradient(to right, ${color}, ${nextColor})`,
                  }}
                />
              )}

              <span
                aria-hidden
                className="relative block size-[15px] rounded-full ring-4 ring-[#0D1117]"
                style={{ backgroundColor: color }}
              />

              <p className="mt-4 text-xs tabular-nums text-gray-400">
                {chapter.year}
              </p>
              <p className="mt-0.5 text-base font-semibold text-white">
                {chapter.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">
                {chapter.detail}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
