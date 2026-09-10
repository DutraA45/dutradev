import { education, type EducationEntry } from "@/lib/data/education";
import { experiences, type Experience } from "@/lib/data/experiences";
import { companySpan, monthLabel } from "@/lib/experience";

/**
 * Aceita "AAAA" e "AAAA-MM". Sem mês, a borda abre em janeiro e fecha em
 * dezembro — é a leitura mais fiel de um ano letivo informado só pelo ano.
 */
export function toMonthIndex(value: string, edge: "start" | "end") {
  const [year, month] = value.split("-").map(Number);
  if (month) return year * 12 + (month - 1);
  return edge === "start" ? year * 12 : year * 12 + 11;
}

/** Intervalo fechado [primeiro mês, último mês]. */
export type Range = [number, number];

export function entryRange(entry: EducationEntry): Range {
  return [toMonthIndex(entry.start, "start"), toMonthIndex(entry.end, "end")];
}

export function experienceRange(experience: Experience): Range {
  const roles = experience.roles;
  const starts = roles.map((role) => toMonthIndex(role.start, "start"));
  const ends = roles.map((role) =>
    role.end ? toMonthIndex(role.end, "end") : currentMonthIndex()
  );
  return [Math.min(...starts), Math.max(...ends)];
}

function currentMonthIndex() {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
}

export function overlapMonths(a: Range, b: Range) {
  return Math.max(0, Math.min(a[1], b[1]) - Math.max(a[0], b[0]) + 1);
}

function monthsIn(ranges: Range[]) {
  const months = new Set<number>();
  for (const [start, end] of ranges) {
    for (let month = start; month <= end; month++) months.add(month);
  }
  return months;
}

export function formatPeriodLabel(entry: EducationEntry) {
  const withMonth = (value: string) =>
    value.includes("-") ? monthLabel(value) : value;
  return `${withMonth(entry.start)} — ${withMonth(entry.end)}`;
}

export function isConcluded(entry: EducationEntry) {
  return entryRange(entry)[1] < currentMonthIndex();
}

/** As empresas em que ele trabalhou enquanto cursava esta formação. */
export function concurrentWork(entry: EducationEntry) {
  const range = entryRange(entry);

  return experiences
    .map((experience) => ({
      experience,
      months: overlapMonths(range, experienceRange(experience)),
    }))
    .filter((item) => item.months > 0)
    .sort((a, b) => b.months - a.months);
}

export function educationStats() {
  const studyRanges = education.map(entryRange);
  const workRanges = experiences.map(experienceRange);

  const first = Math.min(...studyRanges.map(([start]) => start));
  const last = Math.max(...studyRanges.map(([, end]) => end));

  const studyMonths = monthsIn(studyRanges);
  const workMonths = monthsIn(workRanges);
  let concurrent = 0;
  for (const month of studyMonths) if (workMonths.has(month)) concurrent++;

  return {
    span: last - first + 1,
    entries: education.length,
    concurrent,
  };
}

/** Linhas do gráfico formação × experiência, da mais antiga para a mais nova. */
export function timelineRows() {
  const studyRanges = education.map(entryRange);
  const workRanges = experiences.map(experienceRange);
  const all = [...studyRanges, ...workRanges];

  const min = Math.min(...all.map(([start]) => start));
  const max = Math.max(...all.map(([, end]) => end));
  const span = max - min + 1;

  const place = ([start, end]: Range) => ({
    left: ((start - min) / span) * 100,
    width: ((end - start + 1) / span) * 100,
  });

  return {
    min,
    max,
    span,
    /** Posição horizontal de 1º de janeiro de um ano, em porcentagem. */
    yearOffset: (year: number) => ((year * 12 - min) / span) * 100,
    firstYear: Math.floor(min / 12),
    lastYear: Math.floor(max / 12),
    study: education
      .map((entry, index) => ({
        id: entry.id,
        label: entry.institution,
        caption: entry.level,
        /** Índice por recência: 0 é a formação mais recente. */
        rank: index,
        ...place(entryRange(entry)),
      }))
      .reverse(),
    work: experiences
      .map((experience) => ({
        id: experience.company,
        label: experience.company,
        caption: `${experience.roles.length} ${
          experience.roles.length > 1 ? "cargos" : "cargo"
        }`,
        ...place(experienceRange(experience)),
        span: companySpan(experience),
      }))
      .reverse(),
  };
}
