import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-3xl font-semibold mb-6 text-green-500", className)}>
      {children}
    </h1>
  );
}
