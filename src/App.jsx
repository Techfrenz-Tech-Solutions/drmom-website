import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BottomNav from "./components/BottomNav/BottomNav";
import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import BookLoader from "./components/BookLoader/BookLoader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { getStoredUser, setStoredUser } from "./utils/auth";
import { apiRequest, API_BASE_URL } from "./utils/api";
import Icon from "./components/Icon/Icon";
import "./styles/global.css";

const Home         = lazy(() => import("./pages/Home/Home"));
const About        = lazy(() => import("./pages/About/About"));
const Classes      = lazy(() => import("./pages/Classes/Classes"));
const VideoContent = lazy(() => import("./pages/VideoContent/VideoContent"));
const Courses      = lazy(() => import("./pages/Courses/Courses"));
const CourseDetail = lazy(() => import("./pages/CourseDetail/CourseDetail"));
const Contact      = lazy(() => import("./pages/Contact/Contact"));
const Login        = lazy(() => import("./pages/Login/Login"));
const Payment      = lazy(() => import("./pages/Payment/Payment"));
const Dashboard    = lazy(() => import("./pages/Dashboard/Dashboard"));
const CompleteSignup = lazy(() => import("./pages/CompleteSignup/CompleteSignup"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const TermsOfUse   = lazy(() => import("./pages/TermsOfUse/TermsOfUse"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy/RefundPolicy"));

const PageLoader = () => (
  <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <LoadingSpinner text="Loading page..." />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getStoredUser()) {
      apiRequest("/auth/me")
        .then((data) => { if (data?.user) setStoredUser(data.user); })
        .catch(() => {});
      return;
    }

    // No stored user yet — could just be a first-time anonymous visitor, or
    // could be landing here right after a Google OAuth redirect (session
    // cookie set, localStorage not yet synced). Use a plain fetch, not
    // apiRequest, so an expected 401 for anonymous visitors doesn't trigger
    // apiRequest's global "redirect to /login" side effect.
    fetch(`${API_BASE_URL}/auth/me`, { credentials: "include" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => { if (data?.user) setStoredUser(data.user); })
      .catch(() => {});
  }, []);

  return (
    <BrowserRouter>
      {loading && <BookLoader onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/about"             element={<About />} />
          {/* Course-first browsing is now the primary path — see Courses/CourseDetail.
              /classes redirects there; /classes/:classId (VideoContent) stays mounted
              and working for any existing links, it's just no longer linked from nav. */}
          <Route path="/courses"           element={<Courses />} />
          <Route path="/courses/:courseSlug" element={<CourseDetail />} />
          <Route path="/classes"           element={<Navigate to="/courses" replace />} />
          <Route path="/classes/:classId"  element={<VideoContent />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="/login"             element={<Login />} />
          <Route path="/payment"           element={<Payment />} />
          <Route path="/dashboard"         element={<Dashboard />} />
          <Route path="/complete-signup"   element={<CompleteSignup />} />
          <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
          <Route path="/terms-of-use"      element={<TermsOfUse />} />
          <Route path="/refund-policy"     element={<RefundPolicy />} />
          {/* 404 */}
          <Route path="*" element={
            <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "2rem", textAlign: "center" }}>
              <Icon name="galaxy" size={64} color="var(--medium-purple)" />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--text-primary)" }}>Page Not Found</h2>
              <p style={{ color: "var(--text-muted)" }}>Looks like this page went on a space adventure.</p>
              <a href="/" className="btn btn-primary">Go Home →</a>
            </div>
          } />
        </Routes>
      </Suspense>
      <BottomNav />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
