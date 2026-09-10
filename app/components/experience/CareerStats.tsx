import { careerStats, durationParts } from "@/lib/experience";
import { DurationValue, StatTile } from "@/app/components/StatTile";

export function CareerStats() {
  const { months, roles, progressions, companies } = careerStats();

  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <StatTile
        label="De atuação profissional"
        value={<DurationValue parts={durationParts(months)} />}
      />
      <StatTile label="Cargos ocupados" value={roles} />
      <StatTile label="Evoluções dentro da mesma empresa" value={progressions} />
      <StatTile label="Empresas" value={companies} />
    </dl>
  );
}
