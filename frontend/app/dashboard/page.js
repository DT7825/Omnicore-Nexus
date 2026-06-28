"use client";

import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import MetricCard from "../components/MetricCard";
import EmployeeSection from "../components/EmployeeSection";
import ChartsSection from "../components/ChartsSection";
import PredictorSection from "../components/PredictorSection";
import AIInsights from "../components/AIInsights";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalEmployees: 0,
    highRisk: 0,
    burnoutRisk: 0,
    promotionReady: 0,
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadDashboard();
    loadEmployees();
  }, []);

  async function loadDashboard() {
    try {
      const response = await fetch("http://localhost:5000/dashboard");
      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadEmployees() {
    try {
      const response = await fetch("http://localhost:5000/employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>

      {/* Dashboard Header */}

      <div
        style={{
          marginBottom: "35px",
        }}
      >
        <h1
          style={{
            color: "#111827",
            fontSize: "38px",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          OmniCore Nexus Executive Dashboard
        </h1>

        <p
          style={{
            color: "#6B7280",
            fontSize: "18px",
            margin: 0,
          }}
        >
          AI Workforce Intelligence Operating System
        </p>
      </div>

      {/* KPI Cards */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "45px",
        }}
      >
        <MetricCard
          title="👥 Total Employees"
          value={dashboardData.totalEmployees}
        />

        <MetricCard
          title="🔴 High Risk"
          value={dashboardData.highRisk}
        />

        <MetricCard
          title="🟠 Burnout Risk"
          value={dashboardData.burnoutRisk}
        />

        <MetricCard
          title="🟢 Promotion Ready"
          value={dashboardData.promotionReady}
        />
      </div>

      {/* Workforce Analytics */}

      <ChartsSection />

      {/* Employee Digital Twins */}

      <EmployeeSection
        employees={employees}
      />

      {/* AI Attrition Predictor */}

      <PredictorSection />

      {/* AI Workforce Insights */}

      <AIInsights />

    </Layout>
  );
}