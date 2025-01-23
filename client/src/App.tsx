import "@/index.css";
import StudentHeader from "./components/StudentHeader";
import TeacherCard from "./components/TeacherCard";

function App() {
  return (
    <>
      <div>Lexter</div>
      <div className="w-full flex items-center justify-center mx-auto flex-col">
        <div>
          <StudentHeader />
          <TeacherCard />
        </div>
      </div>
    </>
  );
}

export default App;
