import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import Icon from "../../components/Icon/Icon";
import { setStoredUser } from "../../utils/auth";
import "./Login.css";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", class: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (mode === "register" && form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (mode === "register" && form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const name = mode === "register" && form.name
        ? form.name.trim()
        : (form.name || form.email.split("@")[0]).trim();
      setStoredUser({ name: name || "Student", email: form.email.trim(), class: form.class || "" });
      navigate("/");
    }, 1200);
  };

  return (
    <div className="login-page page-wrapper">
      <ParticleBackground density={50} />

      <div className="login-container">
        {/* Left Panel */}
        <div className="login-left">
          <div className="login-left__content">
            <Link to="/" className="login-logo">
              <span className="login-logo__icon">DM</span>
              Dr Mom <span className="login-logo__accent">2.0</span>
            </Link>
            <h2 className="login-left__title">
              Start Your<br />
              <span className="gradient-text">Learning Journey</span>
            </h2>
            <p className="login-left__sub">
              Access thousands of premium video lessons, track your progress,
              and grow with India's best EdTech platform.
            </p>

            <div className="login-left__features">
              {[
                { icon: "video",     text: "2,000+ HD Video Lessons" },
                { icon: "clipboard", text: "Practice Worksheets & Notes" },
                { icon: "barChart",  text: "Real-time Progress Tracking" },
                { icon: "users",     text: "Expert-certified Teachers" },
              ].map(({ icon, text }) => (
                <div key={text} className="login-left__feature">
                  <span className="login-left__feature-icon"><Icon name={icon} size={18} /></span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="login-left__reviews">
              <div className="login-left__avatars">
                {["A", "B", "C", "D"].map((l, i) => (
                  <span key={l} className="login-left__avatar"
                    style={{ background: ["#6b3fa0", "#0d9488", "#c2410c", "#1e40af"][i] }}>
                    {l}
                  </span>
                ))}
              </div>
              <p>Joined by <strong>50,000+</strong> happy learners</p>
            </div>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="login-right">
          <div className="login-form-card glass-panel">
            <div className="login-tabs">
              <button
                className={`login-tab ${mode === "login" ? "login-tab--active" : ""}`}
                onClick={() => { setMode("login"); setError(""); }}
              >
                Sign In
              </button>
              <button
                className={`login-tab ${mode === "register" ? "login-tab--active" : ""}`}
                onClick={() => { setMode("register"); setError(""); }}
              >
                Create Account
              </button>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <p className="login-form__welcome">
                {mode === "login" ? "Welcome back!" : "Join Dr Mom 2.0 today"}
              </p>

              {/* Name — register only */}
              {mode === "register" && (
                <div className="login-field">
                  <label htmlFor="name">Student Name</label>
                  <div className="login-field__wrap">
                    <span className="login-field__icon"><Icon name="user" size={16} /></span>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Enter student's full name"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {/* Class — register only */}
              {mode === "register" && (
                <div className="login-field">
                  <label htmlFor="class">Select Class</label>
                  <div className="login-field__wrap">
                    <span className="login-field__icon"><Icon name="bookOpen" size={16} /></span>
                    <select id="class" name="class" required value={form.class} onChange={handleChange}>
                      <option value="">-- Select Class --</option>
                      {["LKG", "UKG", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="login-field">
                <label htmlFor="email">Email Address</label>
                <div className="login-field__wrap">
                  <span className="login-field__icon"><Icon name="mail" size={16} /></span>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="parent@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="login-field">
                <label htmlFor="password">Password</label>
                <div className="login-field__wrap">
                  <span className="login-field__icon"><Icon name="lock" size={16} /></span>
                  <input
                    id="password" name="password"
                    type={showPass ? "text" : "password"} required
                    placeholder="Enter your password"
                    value={form.password} onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="login-field__toggle"
                    onClick={() => setShowPass((p) => !p)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    <Icon name={showPass ? "eyeOff" : "eye"} size={16} />
                  </button>
                </div>
              </div>

              {/* Confirm Password — register only */}
              {mode === "register" && (
                <div className="login-field">
                  <label htmlFor="confirm">Confirm Password</label>
                  <div className="login-field__wrap">
                    <span className="login-field__icon"><Icon name="key" size={16} /></span>
                    <input
                      id="confirm" name="confirm"
                      type={showPass ? "text" : "password"} required
                      placeholder="Re-enter password"
                      value={form.confirm} onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {mode === "login" && (
                <div className="login-forgot"><a href="#!">Forgot password?</a></div>
              )}

              {error && <p className="login-error">{error}</p>}

              <button type="submit" className="btn btn-primary login-submit" disabled={loading}>
                {loading ? (
                  <span className="login-submit__loading">
                    <span className="login-spinner" />
                    {mode === "login" ? "Signing in..." : "Creating account..."}
                  </span>
                ) : (
                  mode === "login" ? "Sign In →" : "Create Account →"
                )}
              </button>

              <p className="login-form__footer">
                {mode === "login" ? (
                  <>{" "}
                    <button type="button" className="login-switch login-switch--google" onClick={() => setMode("register")}>
                      <svg className="login-switch__gicon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Sign Up with Google
                    </button>
                  </>
                ) : (
                  <>{" "}
                    <button type="button" className="login-switch login-switch--google" onClick={() => setMode("login")}>
                      <svg className="login-switch__gicon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Sign In with Google
                    </button>
                  </>
                )}
              </p>

              <p className="login-terms">
                By continuing, you agree to Dr Mom 2.0's{" "}
                <a href="#!">Terms</a> and <a href="#!">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
