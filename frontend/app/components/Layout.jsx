import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

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
          padding: "30px",
          background: "#F3F4F6",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        {children}
      </div>
    </div>
  );
}