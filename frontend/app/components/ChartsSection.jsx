"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartsSection() {

  const departmentData = [
    { department: "AI", risk: 1 },
    { department: "Cloud", risk: 2 },
    { department: "Product", risk: 1 },
  ];

  const workforceData = [
    { name: "High", value: 1 },
    { name: "Medium", value: 1 },
    { name: "Low", value: 1 },
  ];

  const COLORS = ["#EF4444", "#F59E0B", "#22C55E"];

  return (
    <div style={{ marginBottom: "40px" }}>

      <h2
        style={{
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        📊 Workforce Analytics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >

          <h3>Department Risk</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="risk" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >

          <h3>Attrition Distribution</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={workforceData}
                dataKey="value"
                outerRadius={80}
                label
              >
                {workforceData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}