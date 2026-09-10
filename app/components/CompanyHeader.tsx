import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function CompanyHeader({
  company,
  logo,
}: {
  company: string;
  logo: string;
}) {
  return (
    <div className="flex items-start mb-4">
      <div className="mr-4 flex-shrink-0">
        <Avatar className="w-16 h-16 bg-gray-200 after:border-0">
          <AvatarImage src={logo} alt="Logo da Instituição" />
        </Avatar>
      </div>
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-green-500 mb-2">
          {company}
        </h2>
      </div>
    </div>
  );
}
