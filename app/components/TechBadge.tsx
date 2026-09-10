import Image from "next/image";
import type { TechStackItem } from "@/lib/data/tech-stack";

export function TechBadge({ name, icon }: Pick<TechStackItem, "name" | "icon">) {
  return (
    <li className="inline-flex items-center gap-2.5 rounded-lg border border-default bg-[#161B22] px-3 py-2 text-sm text-gray-200 transition-colors hover:border-green-500/40">
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        className="size-5 shrink-0 object-contain"
      />
      {name}
    </li>
  );
}
