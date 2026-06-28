"use client";

import { useState } from "react";

export default function PredictorSection() {
  const [workload, setWorkload] = useState("");
  const [satisfaction, setSatisfaction] = useState("");
  const [salaryGrowth, setSalaryGrowth] = useState("");
  const [promotionGap, setPromotionGap] = useState("");
  const [prediction, setPrediction] = useState("");

  async function predict() {
    try {
      const response = await fetch(
        "http://localhost:5000/predict-attrition",
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
    } catch (err) {
      alert("Backend not connected");
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#111827",
    backgroundColor: "#FFFFFF",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        marginBottom: "40px",
        background: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#111827", marginBottom: "20px" }}>
        🤖 AI Attrition Predictor
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        <input
          style={inputStyle}
          type="number"
          placeholder="Workload (1-10)"
          value={workload}
          onChange={(e) => setWorkload(e.target.value)}
        />

        <input
          style={inputStyle}
          type="number"
          placeholder="Satisfaction (1-10)"
          value={satisfaction}
          onChange={(e) => setSatisfaction(e.target.value)}
        />

        <input
          style={inputStyle}
          type="number"
          placeholder="Salary Growth (%)"
          value={salaryGrowth}
          onChange={(e) => setSalaryGrowth(e.target.value)}
        />

        <input
          style={inputStyle}
          type="number"
          placeholder="Promotion Gap (Years)"
          value={promotionGap}
          onChange={(e) => setPromotionGap(e.target.value)}
        />
      </div>

      <button
        onClick={predict}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          background: "#2563EB",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Predict Attrition Risk
      </button>

      {prediction && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "8px",
            background:
              prediction === "High"
                ? "#FEE2E2"
                : prediction === "Medium"
                ? "#FEF3C7"
                : "#DCFCE7",
            color:
              prediction === "High"
                ? "#B91C1C"
                : prediction === "Medium"
                ? "#92400E"
                : "#166534",
            fontWeight: "bold",
          }}
        >
          Predicted Attrition Risk: {prediction}
        </div>
      )}
    </div>
  );
}