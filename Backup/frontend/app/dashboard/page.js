"use client";

import { useEffect, useState } from "react";
import MetricCard from "../components/MetricCard";
import Layout from "../components/Layout";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalEmployees: 0,
    highRisk: 0,
    burnoutRisk: 0,
    promotionReady: 0,
  });

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const response = await fetch("http://localhost:5000/dashboard");
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <Layout>
      <h1
        style={{
          marginBottom: "30px",
          color: "#111827",
        }}
      >
        OmniCore Nexus Executive Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
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
    </Layout>
  );
}