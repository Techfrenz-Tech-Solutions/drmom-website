import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredUser, clearStoredUser } from "../../utils/auth";
import "./Dashboard.css";

const SUBJECTS = [
  { name: "Mathematics", icon: "🔢", progress: 75, color: "#6b3fa0", bg: "linear-gradient(135deg,#3B1E54,#6b3fa0)", lessons: 12, total: 16 },
  { name: "English",     icon: "📖", progress: 60, color: "#1e3a8a", bg: "linear-gradient(135deg,#1e3a8a,#3b5bdb)", lessons: 9,  total: 15 },
  { name: "Science",     icon: "🌿", progress: 40, color: "#065f46", bg: "linear-gradient(135deg,#065f46,#059669)", lessons: 6,  total: 14 },
  { name: "Hindi",       icon: "🪔", progress: 55, color: "#92400e", bg: "linear-gradient(135deg,#92400e,#d97706)", lessons: 8,  total: 13 },
];

const BADGES = [
  { icon: "🥇", label: "First Lesson",   earned: true  },
  { icon: "🔥", label: "3-Day Streak",   earned: true  },
  { icon: "📖", label: "Bookworm",       earned: true  },
  { icon: "🧮", label: "Math Wizard",    earned: false },
  { icon: "🌟", label: "Star Student",   earned: false },
  { icon: "🏆", label: "Top Performer",  earned: false },
];

const LEADERBOARD = [
  { rank: 1, name: "Arjun K.",   score: 980, avatar: "AK" },
  { rank: 2, name: "Priya S.",   score: 940, avatar: "PS" },
  { rank: 3, name: "Rohan M.",   score: 910, avatar: "RM" },
  { rank: 4, name: "You",        score: 870, avatar: "ME", isMe: true },
  { rank: 5, name: "Sneha R.",   score: 820, avatar: "SR" },
];

const NAV = [
  { icon: "🏠", label: "Home",     to: "/" },
  { icon: "📚", label: "Courses",  to: "/courses" },
  { icon: "💬", label: "Contact",  to: "/contact" },
  { icon: "ℹ️",  label: "About",   to: "/about" },
];

/* Circular progress SVG */
const Ring = ({ pct, color, size = 80 }) => {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} className="dash-ring">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={8} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={8}
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x="50%" y="50%" textAnchor="middle" dy="0.35em"
        fill="#fff" fontSize="14" fontWeight="700">{pct}%</text>
    </svg>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const user     = getStoredUser();
  const [greeting, setGreeting] = useState("");
  const [activeNav, setActiveNav] = useState("Dashboard");

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening");
  }, []);

  const firstName = user?.name?.split(" ")[0] || "Student";
  const initials  = user?.name?.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() || "ST";

  const handleLogout = async () => { await clearStoredUser(); navigate("/"); };

  return (
    <div className="db-page">

      {/* ══ Sidebar ══ */}
      <aside className="db-sidebar">
        <div className="db-sidebar__brand">
          <span className="db-sidebar__brand-icon">🎓</span>
          <span className="db-sidebar__brand-name">Dr Mom 2.0</span>
        </div>

        <div className="db-sidebar__profile">
          <div className="db-sidebar__avatar">{initials}</div>
          <div>
            <p className="db-sidebar__username">{firstName}</p>
            <span className="db-sidebar__badge-pill">Grade 2</span>
          </div>
        </div>

        <nav className="db-sidebar__nav">
          <p className="db-sidebar__nav-group">Navigation</p>
          <button
            className="db-sidebar__link db-sidebar__link--active"
            onClick={() => setActiveNav("Dashboard")}
          >
            <span>📊</span> Dashboard
          </button>
          {NAV.map(({ icon, label, to }) => (
            <Link key={label} to={to} className="db-sidebar__link">
              <span>{icon}</span> {label}
            </Link>
          ))}
        </nav>

        {user && (
          <button className="db-sidebar__logout" onClick={handleLogout}>
            <span>🚪</span> Logout
          </button>
        )}
        {!user && (
          <Link to="/login" className="db-sidebar__login-cta">
            <span>🔑</span> Login
          </Link>
        )}
      </aside>

      {/* ══ Main ══ */}
      <main className="db-main">

        {/* Hero Banner */}
        <div className="db-hero">
          <div className="db-hero__orb db-hero__orb--1" />
          <div className="db-hero__orb db-hero__orb--2" />
          <div className="db-hero__text">
            <p className="db-hero__sub">{greeting} 👋</p>
            <h1 className="db-hero__title">
              {user ? `Welcome back, ${firstName}!` : "Student Dashboard"}
            </h1>
            <p className="db-hero__desc">
              {user
                ? "You're on a 4-day streak 🔥 Keep it up!"
                : "Login to track your progress and continue learning."}
            </p>
            {!user && (
              <Link to="/login" className="db-hero__cta">Login to get started →</Link>
            )}
          </div>
          <div className="db-hero__stats">
            {[
              { v: "12", l: "Lessons" },
              { v: "4",  l: "Day Streak" },
              { v: "3",  l: "Badges" },
              { v: "870",l: "Points" },
            ].map(({ v, l }) => (
              <div key={l} className="db-hero__stat">
                <span className="db-hero__stat-val">{v}</span>
                <span className="db-hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two-column grid */}
        <div className="db-grid">

          {/* Left col */}
          <div className="db-col">

            {/* Subject Progress */}
            <div className="db-card">
              <div className="db-card__head">
                <h2 className="db-card__title">📚 Subject Progress</h2>
                <Link to="/courses" className="db-card__link">View all →</Link>
              </div>
              <div className="db-subjects">
                {SUBJECTS.map(({ name, icon, progress, bg, color, lessons, total }) => (
                  <div key={name} className="db-subject" style={{ "--subj-bg": bg }}>
                    <div className="db-subject__left">
                      <div className="db-subject__icon">{icon}</div>
                      <div>
                        <p className="db-subject__name">{name}</p>
                        <p className="db-subject__meta">{lessons}/{total} lessons</p>
                      </div>
                    </div>
                    <Ring pct={progress} color={color} size={64} />
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Challenge */}
            <div className="db-card db-challenge">
              <div className="db-challenge__orb" />
              <div className="db-challenge__content">
                <span className="db-challenge__tag">⚡ Daily Challenge</span>
                <h3 className="db-challenge__title">Solve 5 Math Problems</h3>
                <p className="db-challenge__desc">Complete today's challenge and earn 50 bonus points!</p>
                <div className="db-challenge__bar">
                  <div className="db-challenge__fill" style={{ width: "60%" }} />
                </div>
                <p className="db-challenge__progress">3 / 5 completed</p>
                <Link to="/courses" className="db-challenge__btn">Continue Challenge →</Link>
              </div>
            </div>

          </div>

          {/* Right col */}
          <div className="db-col">

            {/* Leaderboard */}
            <div className="db-card">
              <div className="db-card__head">
                <h2 className="db-card__title">🏆 Leaderboard</h2>
                <span className="db-card__tag">This Week</span>
              </div>
              <div className="db-leaderboard">
                {LEADERBOARD.map(({ rank, name, score, avatar, isMe }) => (
                  <div key={rank} className={`db-lb-row ${isMe ? "db-lb-row--me" : ""}`}>
                    <span className={`db-lb-rank db-lb-rank--${rank <= 3 ? rank : "rest"}`}>
                      {rank <= 3 ? ["🥇","🥈","🥉"][rank - 1] : rank}
                    </span>
                    <div className="db-lb-avatar">{avatar}</div>
                    <span className="db-lb-name">{name}{isMe ? " (You)" : ""}</span>
                    <span className="db-lb-score">{score} pts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="db-card">
              <div className="db-card__head">
                <h2 className="db-card__title">🎖️ My Badges</h2>
                <span className="db-card__tag">3 / 6 earned</span>
              </div>
              <div className="db-badges">
                {BADGES.map(({ icon, label, earned }) => (
                  <div key={label} className={`db-badge ${earned ? "db-badge--earned" : "db-badge--locked"}`}>
                    <span className="db-badge__icon">{earned ? icon : "🔒"}</span>
                    <span className="db-badge__label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
