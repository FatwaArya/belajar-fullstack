import StudentList from "../components/studentList";
import StudentForm from "../components/studentForm";

export default function StudentPage() {
  return (
    <>
      <div className="">
        <div className="gap-6 grid sm:grid-cols-1 md:flex">
          <StudentList />
        </div>
      </div>
    </>
  );
}
