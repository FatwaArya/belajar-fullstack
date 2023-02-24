import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { deleteStudent } from "./../store/student";
export default function Student({ student }) {
  // const dispatch = useDispatch();

  return (
    <div
      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm  hover:border-gray-400  "
      id="student"
    >
      <div className="text-left">
        <div className="flex">
          <p className="text-sm font-medium text-gray-900">{student.name}</p>
          {/* make trash icon smaller */}
          <button
            className="h-5 w-5 text-gray-400 ml-auto hover:text-red-500"
            data-testid="delete"
            // onClick={() => {
            //   dispatch(deleteStudent(student.email));
            // }}
          >
            <TrashIcon />
          </button>
        </div>

        <p className="text-sm text-gray-500 truncate">{student.email}</p>
      </div>

      <div className="flex justify-between gap-3">
        <p className="text-sm text-gray-500 truncate">{student.college}</p>
        <p className="text-sm text-gray-500 truncate">{student.major}</p>
      </div>
    </div>
  );
}
