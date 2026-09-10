import { rampStep } from "@/lib/experience";
import { timelineRows } from "@/lib/education";
import { SectionTitle } from "@/app/components/SectionTitle";
import { cn } from "@/lib/utils";

/** Cor neutra da faixa de experiência: presente, mas sem disputar o verde. */
const WORK_COLOR = "#6E7781";

function Row({
  label,
  caption,
  left,
  width,
  color,
}: {
  label: string;
  caption: string;
  left: number;
  width: number;
  color: string;
}) {
  return (
    <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
      <div className="shrink-0 sm:w-28">
        <p className="truncate text-sm font-medium text-white">{label}</p>
        <p className="truncate text-[11px] text-gray-500">{caption}</p>
      </div>

      <div className="relative h-2.5 w-full sm:flex-1">
        <span
          className="absolute inset-y-0 rounded-lg"
          style={{
            left: `${left}%`,
            width: `${width}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </li>
  );
}

function LaneLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
      {children}
    </p>
  );
}

/**
 * Duas faixas sobre o mesmo eixo de tempo. O verde é a formação — assunto da
 * página; a experiência entra em cinza, como contexto. A sobreposição entre
 * elas é a informação que o gráfico existe para mostrar.
 */
export function StudyWorkTimeline() {
  const rows = timelineRows();
  const years: number[] = [];
  for (let year = rows.firstYear; year <= rows.lastYear; year += 1) {
    years.push(year);
  }
  const labelled = years.filter((year) => (year - rows.firstYear) % 2 === 0);

  return (
    <section aria-labelledby="linha-do-tempo" className="dd-reveal">
      <SectionTitle id="linha-do-tempo">Formação e trabalho</SectionTitle>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
        A graduação em Engenharia da Computação cobre toda a experiência
        profissional listada no currículo — os dois trilhos correram juntos, não
        um depois do outro.
      </p>

      <div className="mt-6 rounded-2xl border border-default bg-[#161B22] p-5 sm:p-6">
        <ul className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <li className="flex items-center gap-2 text-xs text-gray-300">
            <span
              aria-hidden
              className="h-2.5 w-5 shrink-0 rounded-lg"
              style={{ backgroundColor: rampStep(0) }}
            />
            Formação
          </li>
          <li className="flex items-center gap-2 text-xs text-gray-300">
            <span
              aria-hidden
              className="h-2.5 w-5 shrink-0 rounded-lg"
              style={{ backgroundColor: WORK_COLOR }}
            />
            Experiência
          </li>
        </ul>

        <div className="relative">
          {/* Fios de ano atrás das barras, alinhados à área do gráfico. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 left-0 sm:left-31"
          >
            <div className="relative h-full">
              {years.map((year) => (
                <span
                  key={year}
                  className="absolute inset-y-0 w-px bg-[#3D444D]/40"
                  style={{ left: `${rows.yearOffset(year)}%` }}
                />
              ))}
            </div>
          </div>

          <div className="relative space-y-5">
            <div>
              <LaneLabel>Formação</LaneLabel>
              <ul className="space-y-3">
                {rows.study.map((row) => (
                  <Row
                    key={row.id}
                    label={row.label}
                    caption={row.caption}
                    left={row.left}
                    width={row.width}
                    color={rampStep(row.rank)}
                  />
                ))}
              </ul>
            </div>

            <div>
              <LaneLabel>Experiência</LaneLabel>
              <ul className="space-y-3">
                {rows.work.map((row) => (
                  <Row
                    key={row.id}
                    label={row.label}
                    caption={row.caption}
                    left={row.left}
                    width={row.width}
                    color={WORK_COLOR}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Eixo de anos, alinhado à mesma área do gráfico. */}
        <div className="mt-4 flex">
          <div
            aria-hidden
            className="hidden shrink-0 sm:block sm:w-28 sm:mr-3"
          />
          <div className="relative h-4 flex-1">
            {labelled.map((year) => (
              <span
                key={year}
                className={cn(
                  "absolute top-0 text-[10px] tabular-nums text-gray-500",
                  year === rows.lastYear
                    ? "-translate-x-full"
                    : "-translate-x-1/2",
                  year === rows.firstYear && "translate-x-0",
                )}
                style={{ left: `${rows.yearOffset(year)}%` }}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
