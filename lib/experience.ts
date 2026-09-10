import {
  experiences,
  type Experience,
  type ExperienceRole,
} from "@/lib/data/experiences";

const MONTHS = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

/** Converte "AAAA-MM" no número absoluto de meses, para poder subtrair. */
function toMonthIndex(yearMonth: string) {
  const [year, month] = yearMonth.split("-").map(Number);
  return year * 12 + (month - 1);
}

function currentMonthIndex() {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
}

/** `end` nulo significa "até hoje". */
function endIndex(end: string | null) {
  return end ? toMonthIndex(end) : currentMonthIndex();
}

export function monthLabel(yearMonth: string) {
  const [year, month] = yearMonth.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

/** Meses contando o primeiro e o último — mesma convenção do LinkedIn. */
export function monthsBetween(start: string, end: string | null) {
  return endIndex(end) - toMonthIndex(start) + 1;
}

export function formatDuration(months: number) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];

  if (years) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? "mês" : "meses"}`);

  return parts.join(" e ") || "1 mês";
}

/** Versão curta para os cartões de destaque: `[["3", "a"], ["10", "m"]]`. */
export function durationParts(months: number): [string, string][] {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: [string, string][] = [];

  if (years) parts.push([String(years), "a"]);
  if (rest || !years) parts.push([String(rest), "m"]);

  return parts;
}

export function formatPeriod(start: string, end: string | null) {
  return `${monthLabel(start)} — ${end ? monthLabel(end) : "Atual"}`;
}

export function roleMonths(role: ExperienceRole) {
  return monthsBetween(role.start, role.end);
}

export function isCurrent(role: ExperienceRole) {
  return role.end === null;
}

/**
 * Janela total na empresa: do início do cargo mais antigo ao fim do mais
 * recente. Não é a soma dos cargos — cargos podem se sobrepor ou ter intervalo.
 */
export function companySpan(experience: Experience) {
  const starts = experience.roles.map((role) => toMonthIndex(role.start));
  const ends = experience.roles.map((role) => endIndex(role.end));
  const first = Math.min(...starts);
  const last = Math.max(...ends);
  const open = experience.roles.some(isCurrent);

  return {
    months: last - first + 1,
    period: `${monthLabel(experience.roles[starts.indexOf(first)].start)} — ${
      open ? "Atual" : monthLabel(experience.roles[ends.indexOf(last)].end!)
    }`,
  };
}

/** Fatia de cada cargo no tempo total da empresa, para a barra de distribuição. */
export function roleShares(experience: Experience) {
  const months = experience.roles.map(roleMonths);
  const total = months.reduce((sum, value) => sum + value, 0);

  return experience.roles.map((role, index) => ({
    role,
    index,
    months: months[index],
    share: months[index] / total,
  }));
}

export function careerStats() {
  const roles = experiences.flatMap((experience) => experience.roles);
  const months = experiences.reduce(
    (sum, experience) => sum + companySpan(experience).months,
    0
  );

  return {
    months,
    /** Cada cargo além do primeiro numa empresa é um degrau interno. */
    progressions: roles.length - experiences.length,
    roles: roles.length,
    companies: experiences.length,
  };
}

/**
 * Verde ordinal validado para superfície escura (#0D1117): o cargo mais
 * recente recebe o passo mais claro. Ver o skill de dataviz.
 */
const GREEN_RAMP = [
  "#86EFAC",
  "#4ADE80",
  "#22C55E",
  "#16A34A",
  "#15803D",
  "#166534",
];

/** `index` 0 = mais recente. Passos além do ramp repetem o mais escuro. */
export function rampStep(index: number) {
  return GREEN_RAMP[Math.min(index, GREEN_RAMP.length - 1)];
}

/** Capítulos vão do mais antigo ao mais recente — o ramp é invertido. */
export function chapterStep(index: number, total: number) {
  return rampStep(total - 1 - index);
}
