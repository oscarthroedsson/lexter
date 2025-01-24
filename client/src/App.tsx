import "@/index.css";
import StudentHeader from "./components/StudentHeader";
import TeacherCard from "./components/TeacherCard";
import { teachers } from "./assets/techers";

function App() {
  return (
    <>
      <div>Lexter</div>
      <div className="w-full flex items-center justify-center mx-auto flex-col">
        <div className="space-y-6">
          <StudentHeader />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {teachers.map((teacher) => (
              <TeacherCard teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
