import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import Icon from "../../components/Icon/Icon";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getPendingGoogleSignup, completeGoogleSignup } from "../../utils/auth";
import "../Login/Login.css";

const CLASS_OPTIONS = ["LKG", "UKG", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"];

const ERROR_MESSAGES = {
  PENDING_SIGNUP_EXPIRED: "This sign-up link has expired. Please start again with Google.",
  GOOGLE_EMAIL_NOT_VERIFIED: "That Google account's email isn't verified.",
  EMAIL_ALREADY_EXISTS: "An account with this email already exists. Please log in with your password, then link Google from your account.",
};

const CompleteSignup = () => {
  const navigate = useNavigate();
  const [token] = useState(() => new URLSearchParams(window.location.search).get("token") || "");
  const [pending, setPending] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [loadingPending, setLoadingPending] = useState(true);

  const [form, setForm] = useState({ name: "", class: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!token) {
      setLoadError("This sign-up link is missing or invalid.");
      setLoadingPending(false);
      return;
    }
    getPendingGoogleSignup(token)
      .then((data) => {
        setPending(data);
        setForm((f) => ({ ...f, name: data.name || "" }));
      })
      .catch((err) => setLoadError(ERROR_MESSAGES[err.code] || err.message || "This sign-up link is invalid."))
      .finally(() => setLoadingPending(false));
  }, [token]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!form.name.trim()) {
      setSubmitError("Please enter a name.");
      return;
    }
    if (!form.class) {
      setSubmitError("Please select a class.");
      return;
    }
    setSubmitting(true);
    try {
      await completeGoogleSignup({ pendingToken: token, name: form.name.trim(), gradeLabel: form.class });
      navigate("/");
    } catch (err) {
      setSubmitError(ERROR_MESSAGES[err.code] || err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingPending) {
    return (
      <div className="page-wrapper" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LoadingSpinner text="Loading..." />
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="page-wrapper" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "2rem", textAlign: "center" }}>
        <span style={{ fontSize: "3rem" }}>⚠️</span>
        <p style={{ color: "var(--text-muted)", maxWidth: "420px" }}>{loadError}</p>
        <Link to="/login" className="btn btn-primary">Back to Login</Link>
      </div>
    );
  }

  return (
    <div className="login-page page-wrapper">
      <ParticleBackground density={30} />

      <div className="login-container" style={{ gridTemplateColumns: "1fr" }}>
        <div className="login-right">
          <div className="login-form-card glass-panel">
            <p className="login-form__welcome">Just a few more details</p>

            <form className="login-form" onSubmit={handleSubmit}>
              {/* Google email — read-only */}
              <div className="login-field">
                <label htmlFor="google-email">Google Account</label>
                <div className="login-field__wrap">
                  <span className="login-field__icon"><Icon name="mail" size={16} /></span>
                  <input id="google-email" type="email" value={pending?.email || ""} readOnly disabled />
                </div>
              </div>

              {/* Name */}
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

              {/* Class */}
              <div className="login-field">
                <label htmlFor="class">Select Class</label>
                <div className="login-field__wrap">
                  <span className="login-field__icon"><Icon name="bookOpen" size={16} /></span>
                  <select id="class" name="class" required value={form.class} onChange={handleChange}>
                    <option value="">-- Select Class --</option>
                    {CLASS_OPTIONS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {submitError && <p className="login-error">{submitError}</p>}

              <button type="submit" className="btn btn-primary login-submit" disabled={submitting}>
                {submitting ? (
                  <span className="login-submit__loading">
                    <span className="login-spinner" />
                    Creating account...
                  </span>
                ) : (
                  "Complete Sign Up →"
                )}
              </button>

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

export default CompleteSignup;
