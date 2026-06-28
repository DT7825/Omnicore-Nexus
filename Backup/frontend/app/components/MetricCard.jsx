export default function MetricCard({ title, value }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        borderRadius: "12px",
        padding: "20px",
        width: "220px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "18px",
          color: "#555",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "15px",
          fontSize: "32px",
          color: "#000",
        }}
      >
        {value}
      </h1>
    </div>
  );
}