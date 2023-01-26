export default function Student({ student }) {
  return (
    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm  hover:border-gray-400  ">
      <div className="text-left">
        <p className="text-sm font-medium text-gray-900">{student.name}</p>
        <p className="text-sm text-gray-500 truncate">{student.email}</p>
      </div>

      <div className="flex justify-between gap-3">
        <p className="text-sm text-gray-500 truncate">{student.college}</p>
        <p className="text-sm text-gray-500 truncate">{student.major}</p>
      </div>
    </div>
  );
}
