import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
          backgroundColor: "#F3F4F6",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}