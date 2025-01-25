import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { schoolLevels } from "@/data/schoolLevels";
export default function StudentHeader() {
  return (
    <Select required={true}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Skolnivå" />
      </SelectTrigger>
      <SelectContent>
        {schoolLevels.map((level: string) => (
          <SelectItem value="light">{level.charAt(0).toUpperCase() + level.slice(1)}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
