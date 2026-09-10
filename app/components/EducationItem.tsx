import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { EducationEntry } from "@/lib/data/education";

export function EducationItem({
  institution,
  logo,
  degree,
  period,
}: EducationEntry) {
  return (
    <div className="flex items-start gap-6 mb-8">
      <div className="flex-shrink-0">
        <Avatar className="w-16 h-16 bg-gray-200 after:border-0">
          <AvatarImage src={logo} alt="Logo da Instituição" />
        </Avatar>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-green-500 mb-1">
          {institution}
        </h2>
        <p className="text-white text-xl font-semibold mb-1">{degree}</p>
        <p className="text-white text-base font-light mb-2">{period}</p>
      </div>
    </div>
  );
}
