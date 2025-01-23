import fitness from "@/assets/images/fitness.jpg";
import { Card } from "@/components/ui/card";
export default function TeacherCard() {
  return (
    <Card className="h-60 w-52 bg-cover bg-center overflow-hidden flex " style={{ backgroundImage: `url(${fitness})` }}>
      <div className="bg-slate-100/60 p-2 mt-auto w-full">
        <p className="font-bold text-center ">Idrott & Hälsa</p>
      </div>
    </Card>
  );
}
