export default function AIInsights() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        marginTop: "40px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#111827",
        }}
      >
        🤖 AI Workforce Insights
      </h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          color: "#374151",
        }}
      >
        <div
          style={{
            padding: "15px",
            background: "#FEE2E2",
            borderRadius: "10px",
          }}
        >
          🔴 Rahul Shukla has a high probability of attrition.
          Schedule a retention discussion this week.
        </div>

        <div
          style={{
            padding: "15px",
            background: "#DCFCE7",
            borderRadius: "10px",
          }}
        >
          🟢 Priya Verma is ready for promotion based on current
          performance and adaptability.
        </div>

        <div
          style={{
            padding: "15px",
            background: "#FEF3C7",
            borderRadius: "10px",
          }}
        >
          🟠 Aman Singh should receive Kubernetes and Cloud
          Architecture training.
        </div>

        <div
          style={{
            padding: "15px",
            background: "#DBEAFE",
            borderRadius: "10px",
          }}
        >
          📈 Overall Workforce Health Score :
          <strong> 82 / 100</strong>
        </div>
      </div>
    </div>
  );
}