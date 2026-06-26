import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BottomNav from "./components/BottomNav/BottomNav";
import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import BookLoader from "./components/BookLoader/BookLoader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { getStoredUser, setStoredUser } from "./utils/auth";
import { apiRequest } from "./utils/api";
import "./styles/global.css";

// Lazy-loaded pages for code splitting
const Home    = lazy(() => import("./pages/Home/Home"));
const About   = lazy(() => import("./pages/About/About"));
const Classes = lazy(() => import("./pages/Classes/Classes"));
const VideoContent = lazy(() => import("./pages/VideoContent/VideoContent"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Login   = lazy(() => import("./pages/Login/Login"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

const PageLoader = () => (
  <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <LoadingSpinner text="Loading page..." />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  // On startup, verify the stored session is still valid against the backend.
  // If the user was deleted or deactivated, the 401 interceptor in api.js
  // will clear localStorage and redirect to /login automatically.
  useEffect(() => {
    if (getStoredUser()) {
      apiRequest("/auth/me")
        .then((data) => { if (data?.user) setStoredUser(data.user); })
        .catch(() => {});
    }
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
          <Route path="/classes"           element={<Classes />} />
          <Route path="/classes/:classId"  element={<VideoContent />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="/login"             element={<Login />} />
          <Route path="/payment"           element={<Payment />} />
          <Route path="/profile"           element={<Profile />} />
          {/* 404 */}
          <Route path="*" element={
            <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "2rem", textAlign: "center" }}>
              <span style={{ fontSize: "4rem" }}>🌌</span>
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
