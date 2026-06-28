export default function Navbar() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "18px 30px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#111827",
          }}
        >
          OmniCore Nexus
        </h2>

        <p
          style={{
            margin: 0,
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          AI Workforce Intelligence Platform
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          fontSize: "18px",
        }}
      >
        <span>🔔</span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#2563EB",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            A
          </div>

          <div>
            <strong>Admin</strong>

            <p
              style={{
                margin: 0,
                color: "#6B7280",
                fontSize: "12px",
              }}
            >
              HR Director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}