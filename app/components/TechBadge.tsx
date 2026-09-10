import Image from "next/image";
import type { TechStackItem } from "@/lib/data/tech-stack";

export function TechBadge({ name, icon }: TechStackItem) {
  return (
    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform">
      <Image
        src={icon}
        alt={name}
        width={28}
        height={28}
        className="h-7 w-7 object-contain mb-2 mt-1"
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}
