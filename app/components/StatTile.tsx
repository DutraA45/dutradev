/** Visual do cartão de número, compartilhado com a versão clicável da home. */
export const statTileClassName =
  "relative overflow-hidden rounded-xl border border-default bg-[#161B22] px-4 py-4";

export function StatTileAccent() {
  return (
    <span
      aria-hidden
      className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-green-500/70 to-transparent"
    />
  );
}

/** Cartão de número: valor em destaque, rótulo discreto e fio verde no topo. */
export function StatTile({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className={statTileClassName}>
      <StatTileAccent />
      <dd className="text-2xl font-semibold leading-none text-white sm:text-3xl">
        {value}
      </dd>
      <dt className="mt-2 text-xs leading-snug text-gray-400">{label}</dt>
    </div>
  );
}

/** Duração compacta com a unidade em corpo menor: 3a 10m. */
export function DurationValue({ parts }: { parts: [string, string][] }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      {parts.map(([amount, unit]) => (
        <span key={unit}>
          {amount}
          <span className="ml-0.5 text-lg font-medium text-gray-400">
            {unit}
          </span>
        </span>
      ))}
    </span>
  );
}
