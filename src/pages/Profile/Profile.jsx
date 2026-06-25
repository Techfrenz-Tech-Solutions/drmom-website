import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { apiRequest } from "../../utils/api";
import { getStoredUser, clearStoredUser } from "../../utils/auth";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = getStoredUser();

  const [profile, setProfile] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("courses");

  useEffect(() => {
    if (!storedUser) {
      navigate("/login");
      return;
    }
    Promise.all([
      apiRequest("/users/me"),
      apiRequest("/users/me/enrollments"),
      apiRequest("/users/me/orders"),
      apiRequest("/users/me/progress"),
    ])
      .then(([profileData, enrollData, ordersData, progressData]) => {
        setProfile(profileData.user);
        setEnrollments(enrollData.enrollments || []);
        setOrders(ordersData.orders || []);
        setProgress(progressData.progress || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await clearStoredUser();
    navigate("/");
  };

  const completedCount = progress.filter((p) => p.completed).length;

  if (loading) {
    return (
      <div className="page-wrapper" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LoadingSpinner text="Loading your profile..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <span style={{ fontSize: "3rem" }}>⚠️</span>
        <p style={{ color: "var(--text-muted)" }}>{error}</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper" style={{ minHeight: "100vh" }}>
      <ParticleBackground density={30} />

      <div className="container" style={{ paddingTop: "6rem", paddingBottom: "4rem", maxWidth: "900px" }}>
        {/* Header card */}
        <div className="glass-panel" style={{ padding: "2rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "linear-gradient(135deg, #6b3fa0, #0d9488)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2rem", fontWeight: 700, color: "#fff", flexShrink: 0,
          }}>
            {profile?.name?.[0]?.toUpperCase() || "U"}
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0, fontSize: "1.6rem", fontFamily: "var(--font-display, sans-serif)" }}>{profile?.name}</h1>
            <p style={{ margin: "0.25rem 0 0", color: "var(--text-muted, #94a3b8)", fontSize: "0.9rem" }}>{profile?.email}</p>
            {profile?.gradeLabel && (
              <span style={{ display: "inline-block", marginTop: "0.4rem", padding: "0.2rem 0.7rem", borderRadius: "999px", background: "#6b3fa022", color: "#6b3fa0", fontSize: "0.8rem", fontWeight: 600 }}>
                {profile.gradeLabel}
              </span>
            )}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <div style={{ textAlign: "center", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "0.75rem" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{enrollments.length}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted, #94a3b8)" }}>Enrolled</div>
            </div>
            <div style={{ textAlign: "center", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "0.75rem" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{completedCount}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted, #94a3b8)" }}>Completed</div>
            </div>
            <div style={{ textAlign: "center", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "0.75rem" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{orders.length}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted, #94a3b8)" }}>Orders</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {[
            { id: "courses", label: "📚 My Courses" },
            { id: "orders", label: "🧾 Orders" },
            { id: "progress", label: "📊 Progress" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={activeTab === id ? "btn btn-primary" : "btn btn-outline"}
              style={{ fontSize: "0.875rem" }}
            >
              {label}
            </button>
          ))}
          <button onClick={handleLogout} className="btn btn-outline" style={{ marginLeft: "auto", fontSize: "0.875rem", color: "#f87171", borderColor: "#f87171" }}>
            Logout
          </button>
        </div>

        {/* My Courses tab */}
        {activeTab === "courses" && (
          <div>
            {enrollments.length === 0 ? (
              <div className="glass-panel" style={{ padding: "3rem", textAlign: "center" }}>
                <span style={{ fontSize: "3rem" }}>📭</span>
                <p style={{ color: "var(--text-muted, #94a3b8)", marginTop: "1rem" }}>No courses enrolled yet.</p>
                <Link to="/classes" className="btn btn-primary" style={{ marginTop: "1rem" }}>Browse Classes</Link>
              </div>
            ) : (
              <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                {enrollments.map((e) => (
                  <div key={e.id} className="glass-panel" style={{ padding: "1.25rem" }}>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{e.course?.title || "Course"}</h3>
                    <p style={{ margin: "0 0 1rem", fontSize: "0.8rem", color: "var(--text-muted, #94a3b8)", textTransform: "capitalize" }}>
                      {e.source?.toLowerCase()} access
                    </p>
                    {e.course?.slug && (
                      <Link to={`/classes/${e.course.slug}`} className="btn btn-outline" style={{ fontSize: "0.8rem", padding: "0.4rem 0.8rem" }}>
                        Start Learning →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Orders tab */}
        {activeTab === "orders" && (
          <div>
            {orders.length === 0 ? (
              <div className="glass-panel" style={{ padding: "3rem", textAlign: "center" }}>
                <span style={{ fontSize: "3rem" }}>🧾</span>
                <p style={{ color: "var(--text-muted, #94a3b8)", marginTop: "1rem" }}>No orders yet.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {orders.map((order) => (
                  <div key={order.id} className="glass-panel" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{order.course?.title}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted, #94a3b8)" }}>
                        {new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>₹{Math.round((order.amountInPaise || 0) / 100)}</div>
                      <span style={{
                        fontSize: "0.75rem", padding: "0.15rem 0.6rem", borderRadius: "999px",
                        background: order.status === "PAID" ? "#0d948822" : "#f8717122",
                        color: order.status === "PAID" ? "#0d9488" : "#f87171",
                        fontWeight: 600,
                      }}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Progress tab */}
        {activeTab === "progress" && (
          <div>
            {progress.length === 0 ? (
              <div className="glass-panel" style={{ padding: "3rem", textAlign: "center" }}>
                <span style={{ fontSize: "3rem" }}>📊</span>
                <p style={{ color: "var(--text-muted, #94a3b8)", marginTop: "1rem" }}>Start watching lessons to track your progress.</p>
                <Link to="/classes" className="btn btn-primary" style={{ marginTop: "1rem" }}>Browse Classes</Link>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {progress.map((p) => {
                  const pct = p.watchedSeconds ? Math.min(100, Math.round((p.watchedSeconds / 600) * 100)) : 0;
                  return (
                    <div key={p.lessonId} className="glass-panel" style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                          <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>Lesson ID: {p.lessonId.slice(0, 8)}…</span>
                          <span style={{ fontSize: "0.8rem", color: p.completed ? "#0d9488" : "var(--text-muted, #94a3b8)" }}>
                            {p.completed ? "✓ Completed" : `${Math.floor((p.watchedSeconds || 0) / 60)}m watched`}
                          </span>
                        </div>
                        <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}>
                          <div style={{ height: "100%", width: `${pct}%`, background: p.completed ? "#0d9488" : "#6b3fa0", borderRadius: 3, transition: "width 0.3s" }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
