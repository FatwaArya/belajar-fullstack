import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "./../store/student";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [college, setCollege] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const major = e.target.major.value;
    const college = e.target.college.value;

    const newStudent = {
      name,
      email,
      major,
      college,
    };

    dispatch(addStudent(newStudent));

    setName("");
    setEmail("");
    setMajor("");
    setCollege("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="student-form">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="mt-1">
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="John Doe"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="major"
              className="block text-sm font-medium text-gray-700"
            >
              Major
            </label>
            <input
              type="text"
              name="major"
              id="major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Computer Science"
            />
          </div>

          <div className="mt-1">
            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-700"
            >
              College
            </label>
            <input
              type="text"
              name="college"
              id="college"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="University of Indonesia"
            />
          </div>
          {/* button */}
        </div>
        <button
          type="submit"
          className=" mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
