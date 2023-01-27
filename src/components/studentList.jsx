import Student from "./student";
import { useSelector, useDispatch } from "react-redux";
import { selectStudent } from "../store/student";

export default function StudentList() {
  const students = useSelector(selectStudent);
  console.log(students);
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          {students.map((person) => (
            <Student key={person.email} student={person} />
          ))}
        </div>
      </div>
    </>
  );
}
