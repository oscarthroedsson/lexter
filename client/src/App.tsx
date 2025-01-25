import "@/index.css";
import StudentHeader from "./components/StudentHeader";
import TeacherCard from "./components/TeacherCard";
import { teachers } from "./assets/techers";
import { useNavigate } from "react-router";
import WaveBackground from "./components/animation/WaveBackground";
import "./style/styles.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>Lexter</div>
      <WaveBackground className="">
        <div className="w-full flex items-center justify-cente flex-col">
          <div className="space-y-6">
            <StudentHeader />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-2">
              {teachers.map((teacher) => (
                <TeacherCard teacher={teacher} onClick={() => navigate(`/chat/${teacher.subject}/${teacher.name}`)} />
              ))}
            </div>
          </div>
        </div>
      </WaveBackground>
    </>
  );
}

export default App;
