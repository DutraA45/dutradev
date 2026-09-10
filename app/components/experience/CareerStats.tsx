import { careerStats, durationParts } from "@/lib/experience";

function StatTile({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-default bg-[#161B22] px-4 py-4">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-green-500/70 to-transparent"
      />
      <dd className="text-3xl font-semibold leading-none text-white">
        {value}
      </dd>
      <dt className="mt-2 text-xs leading-snug text-gray-400">{label}</dt>
    </div>
  );
}

export function CareerStats() {
  const { months, roles, progressions, companies } = careerStats();

  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <StatTile
        label="De atuação profissional"
        value={
          <span className="inline-flex items-baseline gap-1">
            {durationParts(months).map(([amount, unit]) => (
              <span key={unit}>
                {amount}
                <span className="ml-0.5 text-lg font-medium text-gray-400">
                  {unit}
                </span>
              </span>
            ))}
          </span>
        }
      />
      <StatTile label="Cargos ocupados" value={roles} />
      <StatTile label="Evoluções dentro da mesma empresa" value={progressions} />
      <StatTile label="Empresas" value={companies} />
    </dl>
  );
}
