"use client";

import EmployeeCard from "./EmployeeCard";

export default function EmployeeSection({ employees }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2
        style={{
          color: "#111827",
          marginBottom: "20px",
          fontSize: "28px",
        }}
      >
        👥 Employee Digital Twins
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            employee={employee}
          />
        ))}
      </div>
    </div>
  );
}