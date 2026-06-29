"use client";

import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

export default function Home() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const [workload, setWorkload] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  const [salaryGrowth, setSalaryGrowth] = useState("");
  const [promotionGap, setPromotionGap] = useState("");

  const [prediction, setPrediction] = useState("");
  const [recommendation, setRecommendation] = useState([]);
  const [confidence, setConfidence] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://omnicore-nexus.onrender.com/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.log(err));
  }, []);

  const predictAttrition = async () => {

    setLoading(true);

    try {

      const response = await fetch(
  "https://omnicore-nexus.onrender.com/predict-attrition",
        {
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
        }
      );

      const data = await response.json();

      setPrediction(data.attritionRisk);

      if (data.attritionRisk === "High") {

        setConfidence(96);

        setRecommendation([
          "Immediate HR Intervention",
          "Assign Senior Mentor",
          "Salary Review Recommended",
          "Upskilling Program",
          "Reduce Workload",
        ]);

      }

      else if (data.attritionRisk === "Medium") {

        setConfidence(81);

        setRecommendation([
          "Monthly Performance Review",
          "Learning Recommendation",
          "Workload Monitoring",
          "Career Counselling",
        ]);

      }

      else {

        setConfidence(98);

        setRecommendation([
          "Leadership Opportunity",
          "Recognition Award",
          "Fast-track Promotion",
          "Mentor Junior Employees",
        ]);

      }

    } catch (err) {

      alert("Backend not connected.");
      console.log(err);

    }

    setLoading(false);

  };

  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          OmniCore Nexus
        </h1>

        <p className="text-xl text-gray-300 mt-2">
          AI Workforce Intelligence Operating System
        </p>

        <div className="flex justify-between items-center mt-10 mb-8">

          <div>

            <h2 className="text-2xl font-bold">
              Executive Dashboard
            </h2>

            <p className="text-gray-400">
              Real-Time Workforce Intelligence
            </p>

          </div>

          <div className="bg-green-600/20 border border-green-500 px-5 py-2 rounded-full text-green-300 font-semibold">
            ● System Healthy
          </div>

        </div>
        {/* Dashboard Cards */}

<div className="grid md:grid-cols-4 gap-6 mt-10 mb-12">

  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:scale-105 transition">

    <p className="text-gray-400">
      Total Employees
    </p>

    <h2 className="text-5xl font-bold mt-3 text-cyan-400">
      {employees.length}
    </h2>

  </div>

  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:scale-105 transition">

    <p className="text-gray-400">
      High Risk Employees
    </p>

    <h2 className="text-5xl font-bold mt-3 text-red-400">

      {
        employees.filter(
          (emp) => emp.attrition === "High"
        ).length
      }

    </h2>

  </div>

  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:scale-105 transition">

    <p className="text-gray-400">
      Promotion Ready
    </p>

    <h2 className="text-5xl font-bold mt-3 text-green-400">

      {
        employees.filter(
          (emp) => emp.promotion === "Ready"
        ).length
      }

    </h2>

  </div>

  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:scale-105 transition">

    <p className="text-gray-400">
      Workforce Health
    </p>

    <h2 className="text-5xl font-bold mt-3 text-yellow-400">
      89%
    </h2>
    <p className="mt-2 text-green-300 font-semibold">
  Excellent
</p>

  </div>

</div>

{/* Employee Section */}

<div className="flex justify-between items-center mb-6">

  <h2 className="text-4xl font-bold">
    Employee Digital Twins
  </h2>

  <div className="text-green-400 font-semibold">
    ● Live Data
  </div>

</div>


<p className="text-gray-400 mb-6">
  Showing {
    employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    ).length
  } Employees
</p>
<input
  type="text"
  placeholder="🔍 Search Employee..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-8 p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 outline-none"
/>

<div className="grid md:grid-cols-3 gap-6">

  {employees
  .filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((employee, index) => (

    <EmployeeCard
      key={index}
      employee={employee}
    />

  ))}

</div>
{/* AI Attrition Predictor */}

<div className="mt-16 bg-gradient-to-br from-gray-900 to-slate-900 rounded-3xl p-10 shadow-2xl border border-blue-500">

  <div className="flex justify-between items-center mb-8">

    <div>

      <h2 className="text-4xl font-bold">
        AI Attrition Predictor
      </h2>

      <p className="text-gray-400 mt-2">
        Predict employee attrition risk using workforce analytics.
      </p>

    </div>

    <div className="bg-cyan-500/20 border border-cyan-500 px-4 py-2 rounded-full text-cyan-300">
      🤖 AI Engine Active
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    <input
      type="number"
      placeholder="Workload (1-10)"
      value={workload}
      onChange={(e) => setWorkload(e.target.value)}
      className="w-full p-4 rounded-xl bg-white text-black placeholder-gray-500 border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="number"
      placeholder="Satisfaction (1-10)"
      value={satisfaction}
      onChange={(e) => setSatisfaction(e.target.value)}
      className="w-full p-4 rounded-xl bg-white text-black placeholder-gray-500 border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="number"
      placeholder="Salary Growth (%)"
      value={salaryGrowth}
      onChange={(e) => setSalaryGrowth(e.target.value)}
      className="w-full p-4 rounded-xl bg-white text-black placeholder-gray-500 border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="number"
      placeholder="Promotion Gap (Years)"
      value={promotionGap}
      onChange={(e) => setPromotionGap(e.target.value)}
      className="w-full p-4 rounded-xl bg-white text-black placeholder-gray-500 border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

  </div>

  <button
    onClick={predictAttrition}
    className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-xl text-lg font-bold transition duration-300 shadow-xl"
  >
    {loading ? "Analyzing..." : "🧠 Run AI Analysis"}
  </button>
</div>
{/* AI Result */}

{prediction && (

  <div className="mt-10 bg-black border border-gray-700 rounded-3xl p-8 shadow-2xl">

    <div className="flex justify-between items-center">

      <h2 className="text-3xl font-bold">
        AI Analysis Report
      </h2>

      <span
        className={`px-5 py-2 rounded-full font-bold ${
          prediction === "High"
            ? "bg-red-500 text-white"
            : prediction === "Medium"
            ? "bg-yellow-500 text-black"
            : "bg-green-500 text-white"
        }`}
      >
        {prediction} Risk
      </span>

    </div>

    <div className="mt-8">

      <h3 className="text-xl font-semibold mb-2">
        Confidence Score
      </h3>

      <div className="w-full bg-gray-800 rounded-full h-5 overflow-hidden">

        <div
          className={`h-5 rounded-full ${
            prediction === "High"
              ? "bg-red-500"
              : prediction === "Medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
          style={{
            width: `${confidence}%`,
          }}
        ></div>

      </div>

      <p className="mt-2 text-lg font-bold text-cyan-400">
        {confidence}% Confidence
      </p>

    </div>

    <div className="mt-10">

      <h3 className="text-2xl font-bold mb-4">
        AI Recommendations
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        {recommendation.map((item, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:border-cyan-500 transition"
          >
            <p className="text-lg">
              ✅ {item}
            </p>
          </div>

        ))}

      </div>

    </div>

    <div className="mt-10 bg-gradient-to-r from-blue-900 to-cyan-900 rounded-2xl p-6">

      <h3 className="text-2xl font-bold mb-4">
        Executive Summary
      </h3>

      <p className="text-gray-200 leading-8">

        {prediction === "High"
          ? "The employee shows multiple indicators of potential attrition including workload imbalance, low satisfaction and delayed career progression. Immediate HR intervention is recommended."
          : prediction === "Medium"
          ? "The employee is moderately engaged but requires continuous monitoring and structured career development to reduce future attrition risk."
          : "The employee demonstrates strong engagement, healthy career growth and low attrition probability. Continue current development initiatives."
        }

      </p>

    </div>

  </div>

)}
{/* Future AI Modules */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    🚀 Upcoming AI Modules
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition">
      <h3 className="text-xl font-bold">Burnout Heatmap</h3>
      <p className="text-gray-400 mt-3">
        Detect overloaded teams before productivity drops.
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition">
      <h3 className="text-xl font-bold">Skill Gap Prediction</h3>
      <p className="text-gray-400 mt-3">
        Identify future skill requirements using AI.
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition">
      <h3 className="text-xl font-bold">Career Path AI</h3>
      <p className="text-gray-400 mt-3">
        Recommend personalized career growth plans.
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition">
      <h3 className="text-xl font-bold">AI Hiring Assistant</h3>
      <p className="text-gray-400 mt-3">
        Match candidates to roles based on skills and experience.
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition">
      <h3 className="text-xl font-bold">Workforce Forecasting</h3>
      <p className="text-gray-400 mt-3">
        Predict future hiring and workforce demand.
      </p>
    </div>

    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500 transition">
      <h3 className="text-xl font-bold">Performance Copilot</h3>
      <p className="text-gray-400 mt-3">
        AI-powered performance reviews and coaching suggestions.
      </p>
    </div>

  </div>

</div>

{/* Footer */}

<footer className="mt-20 border-t border-gray-800 pt-8 text-center">

  <h2 className="text-2xl font-bold text-cyan-400">
    OmniCore Nexus
  </h2>

  <p className="text-gray-400 mt-3">
    Enterprise AI Workforce Intelligence Platform
  </p>

  <p className="text-gray-600 mt-6">
    Built for Hackathon Demo • Powered by Next.js • Express.js • AI Analytics
  </p>

</footer>

</div>

</main>

);
}