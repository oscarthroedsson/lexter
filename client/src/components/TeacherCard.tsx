import fitness from "@/assets/images/fitness.jpg";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "./Icon";

interface TeacherCard_Props {
  teacher: {
    name: string;
    subject: string;
    image: string;
    thumbNail: string;
  };
  onClick: () => void;
}

export default function TeacherCard({ teacher, onClick }: TeacherCard_Props) {
  return (
    <Card
      className="min-h-72 w-full md:w-48 bg-cover bg-no-repeat bg-center overflow-hidden rounded-md py-1 px-2
      hover:shadow-lg hover:shadow-slate-900/20 hover:scale-105 transition-all duration-200"
      style={{ backgroundImage: `url(${teacher.thumbNail || fitness})` }}
      onClick={onClick}
    >
      <header className="flex items-center justify-between  h-fit w-full">
        <div className="text-white">
          <p className="font-bold">{teacher.subject.charAt(0).toLocaleUpperCase() + teacher.subject.slice(1)}</p>
          <p className="text-sm">{teacher.name}</p>
        </div>
        <Button
          className="py-0 px-2 rounded-sm bg-white text-slate-800 hover:bg-white hover:shadow-lg active:scale-95 transition-all duration-150"
          onClick={(e) => {
            e.isPropagationStopped();
          }}
        >
          <Icon type="Message" size={100} color="black" className="w-6 h-6 text-black hover:bg-white m-0" />
        </Button>
      </header>
    </Card>
  );
}
