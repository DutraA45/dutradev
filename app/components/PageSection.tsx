import { cn } from "@/lib/utils";
import { FooterNote } from "@/app/components/FooterNote";

export function PageSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col flex-1 min-w-0 w-full p-8", className)}>
      {children}
      <FooterNote className="lg:hidden block mt-auto pt-10 text-gray-500 text-xs" />
    </div>
  );
}
