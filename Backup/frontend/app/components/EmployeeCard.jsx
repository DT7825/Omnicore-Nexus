export default function EmployeeCard({ employee }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">

      <h3 className="text-2xl font-bold mb-2">
        {employee.name}
      </h3>

      <p className="text-gray-400 mb-4">
        {employee.role}
      </p>

      <div className="space-y-2">

        <p>
          <strong>Attrition Risk:</strong>{" "}
          <span
            className={
              employee.attrition === "High"
                ? "text-red-400"
                : employee.attrition === "Medium"
                ? "text-yellow-400"
                : "text-green-400"
            }
          >
            {employee.attrition}
          </span>
        </p>

        <p>
          <strong>Promotion:</strong> {employee.promotion}
        </p>

        <p>
          <strong>Adaptability:</strong> {employee.adaptability}/100
        </p>

      </div>

      <div className="mt-5">
        <p className="font-semibold mb-2">
          Skills
        </p>

        <div className="flex flex-wrap gap-2">

          {employee.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-black px-3 py-1 rounded-full text-sm border border-gray-700"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}