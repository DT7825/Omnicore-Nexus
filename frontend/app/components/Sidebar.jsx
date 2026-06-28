export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#111827",
        color: "white",
        padding: "25px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        OmniCore Nexus
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "18px",
        }}
      >
        <div>🏠 Dashboard</div>

        <div>👥 Employees</div>

        <div>📊 Analytics</div>

        <div>🤖 AI Insights</div>

        <div>⚙️ Settings</div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "25px",
        }}
      >
        👤 Admin
      </div>
    </div>
  );
}