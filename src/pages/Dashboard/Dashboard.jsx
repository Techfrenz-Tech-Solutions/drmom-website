import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import { getStoredUser } from "../../utils/auth";

// Placeholder landing spot for the Student Dashboard nav link.
// Full dashboard (progress, recommendations, etc.) is a future build-out —
// this just gives logged-in users a real page instead of a 404 in the meantime.
const Dashboard = () => {
  const navigate = useNavigate();
  const user = getStoredUser();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="page-wrapper" style={{ minHeight: "100vh" }}>
      <ParticleBackground density={30} />

      <div
        className="container"
        style={{
          paddingTop: "8rem",
          paddingBottom: "6rem",
          maxWidth: "700px",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1.25rem",
        }}
      >
        <span style={{ fontSize: "3rem" }}>🚧</span>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display, sans-serif)", fontSize: "1.8rem" }}>
          Student Dashboard
        </h1>
        <p style={{ margin: 0, color: "var(--text-muted, #94a3b8)", maxWidth: "480px" }}>
          Hi {user.name?.split(" ")[0] || "there"} — your dashboard is on its way. Progress
          tracking, recommendations, and more are coming soon.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link to="/classes" className="btn btn-primary">Browse Classes</Link>
          <Link to="/" className="btn btn-outline">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
