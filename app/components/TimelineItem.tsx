import type { ExperienceRole } from "@/lib/data/experiences";

export function TimelineItem({ title, period, description }: ExperienceRole) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <time className="mb-1 text-sm font-normal leading-none text-white">
        {period}
      </time>
      <p className="text-base font-normal text-white mt-2">{description}</p>
    </li>
  );
}
