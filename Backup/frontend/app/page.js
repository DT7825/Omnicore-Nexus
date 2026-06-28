"use client";

import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

export default function Home() {
  const [employees, setEmployees] = useState([]);

  const [workload, setWorkload] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  const [salaryGrowth, setSalaryGrowth] = useState("");
  const [promotionGap, setPromotionGap] = useState("");
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const predictAttrition = async () => {
    try {
      const response = await fetch("http://localhost:5000/predict-attrition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workload: Number(workload),
          satisfaction: Number(satisfaction),
          salaryGrowth: Number(salaryGrowth),
          promotionGap: Number(promotionGap),
        }),
      });

      const data = await response.json();
      setPrediction(data.attritionRisk);
    } catch (error) {
      alert("Unable to connect to backend.");
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <h1 className="text-6xl font-bold mb-3">
          OmniCore Nexus
        </h1>

        <p className="text-xl text-gray-400 mb-12">
          The AI Workforce Intelligence Operating System
        </p>

        {/* Dashboard */}

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Total Employees</p>

            <h2 className="text-4xl font-bold mt-2">
              {employees.length}
            </h2>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">High Risk Employees</p>

            <h2 className="text-4xl font-bold mt-2 text-red-400">
              {
                employees.filter(
                  (emp) => emp.attrition === "High"
                ).length
              }
            </h2>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Promotion Ready</p>

            <h2 className="text-4xl font-bold mt-2 text-green-400">
              {
                employees.filter(
                  (emp) => emp.promotion === "Ready"
                ).length
              }
            </h2>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Skill Gap Alerts</p>

            <h2 className="text-4xl font-bold mt-2 text-yellow-400">
              12
            </h2>
          </div>

        </div>

        {/* Employee Digital Twins */}

        <h2 className="text-4xl font-bold mb-6">
          Employee Digital Twins
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              employee={employee}
            />
          ))}

        </div>

        {/* AI Predictor */}

        <div className="mt-16 bg-gray-900 rounded-2xl p-8 shadow-lg">

          <h2 className="text-3xl font-bold mb-6">
            AI Attrition Predictor
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="number"
              placeholder="Workload (1-10)"
              value={workload}
              onChange={(e) => setWorkload(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

            <input
              type="number"
              placeholder="Satisfaction (1-10)"
              value={satisfaction}
              onChange={(e) => setSatisfaction(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

            <input
              type="number"
              placeholder="Salary Growth (%)"
              value={salaryGrowth}
              onChange={(e) => setSalaryGrowth(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

            <input
              type="number"
              placeholder="Promotion Gap (Years)"
              value={promotionGap}
              onChange={(e) => setPromotionGap(e.target.value)}
              className="p-3 rounded-lg text-black"
            />

          </div>

          <button
            onClick={predictAttrition}
            className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            Predict Attrition Risk
          </button>

          {prediction && (
            <div className="mt-8 bg-black rounded-xl p-6 border border-gray-700">

              <h3 className="text-xl font-semibold">
                AI Prediction
              </h3>

              <p className="mt-3 text-2xl">

                Predicted Attrition Risk :

                <span
                  className={`ml-3 font-bold ${
                    prediction === "High"
                      ? "text-red-400"
                      : prediction === "Medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {prediction}
                </span>

              </p>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}

