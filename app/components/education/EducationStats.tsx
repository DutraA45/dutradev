import { educationStats } from "@/lib/education";
import { durationParts } from "@/lib/experience";
import { DurationValue, StatTile } from "@/app/components/StatTile";

export function EducationStats() {
  const { span, entries, concurrent } = educationStats();

  return (
    <dl className="grid grid-cols-3 gap-3">
      <StatTile
        label="De formação contínua"
        value={<DurationValue parts={durationParts(span)} />}
      />
      <StatTile label="Formações concluídas" value={entries} />
      <StatTile
        label="Em paralelo ao trabalho"
        value={<DurationValue parts={durationParts(concurrent)} />}
      />
    </dl>
  );
}
