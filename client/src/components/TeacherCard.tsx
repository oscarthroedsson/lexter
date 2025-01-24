import fitness from "@/assets/images/fitness.jpg";
import { Card } from "@/components/ui/card";

interface TeacherCard_Props {
  teacher: {
    name: string;
    subject: string;
    image: string;
  };
}

export default function TeacherCard({ teacher }: TeacherCard_Props) {
  return (
    <div className="group hover:scale-105 transition-all">
      <p className="text-xs font-semibold pl-2">{teacher.name}</p>
      <Card
        className="min-h-60 w-full bg-cover bg-no-repeat bg-center overflow-hidden flex rounded-m border-separate border-transparent 
        border-2 group-hover:border-green-500 group-hover:shadow-md
        active:scale-95 active:shadow-inner
        transformation-all duration-200 
        "
        style={{ backgroundImage: `url(${teacher.image || fitness})` }}
      >
        <div className="bg-slate-100/80 p-2 mt-auto w-full">
          <p className="font-bold text-center">{teacher.subject}</p>
        </div>
      </Card>
    </div>
  );
}
