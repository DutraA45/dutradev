import { cn } from "@/lib/utils";

/** Cabeçalho discreto de seção: um traço verde e o rótulo em caixa alta. */
export function SectionTitle({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400",
        className
      )}
    >
      <span aria-hidden className="h-px w-6 shrink-0 bg-green-500" />
      {children}
    </h2>
  );
}
