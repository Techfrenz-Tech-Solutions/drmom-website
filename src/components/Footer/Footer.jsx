import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import "./Footer.css";

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.5 6.2c-.2-.9-.9-1.6-1.8-1.8C19.4 4 12 4 12 4s-7.4 0-9.7.4A2.1 2.1 0 0 0 .5 6.2 21.8 21.8 0 0 0 0 12a21.8 21.8 0 0 0 .5 5.8 2.1 2.1 0 0 0 1.8 1.8c2.3.4 9.7.4 9.7.4s7.4 0 9.7-.4a2.1 2.1 0 0 0 1.8-1.8A21.8 21.8 0 0 0 24 12a21.8 21.8 0 0 0-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm8 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 1A4 4 0 008 9.5 4 4 0 0012 13.5 4 4 0 0016 9.5 4 4 0 0012 6.5zm0 2a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.46 6c-.77.34-1.6.56-2.46.66a4.27 4.27 0 001.88-2.35 8.49 8.49 0 01-2.7 1.03 4.24 4.24 0 00-7.2 3.86A12.03 12.03 0 013 5.16a4.24 4.24 0 001.31 5.65 4.21 4.21 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.16 4.26 4.26 0 01-1.91.07 4.24 4.24 0 003.96 2.95A8.5 8.5 0 012 19.54a12.04 12.04 0 006.52 1.91c7.83 0 12.12-6.49 12.12-12.12 0-.18 0-.35-.01-.53A8.65 8.65 0 0024 6.64a8.35 8.35 0 01-2.4.66 4.22 4.22 0 001.84-2.33" />
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={Logo} alt="Dr Mom 2.0" className="footer__logo-img" />
          </Link>
          <p className="footer__tagline">
            Empowering young minds with world-class interactive learning.
            Built with ❤️ for curious kids everywhere.
          </p>
          <div className="footer__socials">
            {SOCIAL_LINKS.map(({ label, icon }) => (
              <a key={label} href="#!" className="footer__social-link" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Platform</h4>
          <ul className="footer__links">
            {[
              { to: "/classes", label: "Courses" },
              // { to: "/classes", label: "LKG & UKG" },
              // { to: "/classes", label: "Grade 1–3" },
              // { to: "/classes", label: "Grade 4–5" },
              { to: "/about", label: "About Us" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="footer__col">
          <h4 className="footer__col-title">Support</h4>
          <ul className="footer__links">
            {[
              { to: "/contact", label: "Contact Us" },
              { to: "#!", label: "Help Centre" },
              { to: "#!", label: "Privacy Policy" },
              { to: "#!", label: "Terms of Use" },
              { to: "/login", label: "Student Login" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment */}
        <div className="footer__col footer__col--payment">
          <h4 className="footer__col-title">Payment</h4>
          {/* <p className="footer__payment-desc">Safe &amp; secure payments</p> */}
          <div className="footer__payment-badges">
            {/* Visa */}
            {/* <span className="footer__payment-badge" aria-label="Visa">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect width="48" height="48" rx="6" fill="#1A1F71"/>
                <text x="24" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="Arial">VISA</text>
              </svg>
            </span> */}
            {/* Mastercard */}
            {/* <span className="footer__payment-badge" aria-label="Mastercard">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect width="48" height="48" rx="6" fill="#252525"/>
                <circle cx="18" cy="24" r="10" fill="#EB001B"/>
                <circle cx="30" cy="24" r="10" fill="#F79E1B"/>
                <path d="M24 16.3a10 10 0 010 15.4A10 10 0 0124 16.3z" fill="#FF5F00"/>
              </svg>
            </span> */}
            {/* UPI */}
            {/* <span className="footer__payment-badge" aria-label="UPI">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect width="48" height="48" rx="6" fill="#FFFFFF"/>
                <text x="24" y="20" textAnchor="middle" fill="#6B3FA0" fontSize="8" fontWeight="bold" fontFamily="Arial">UPI</text>
                <polygon points="14,22 24,38 34,22 29,22 24,30 19,22" fill="#097939"/>
                <polygon points="19,22 24,14 29,22" fill="#ED752E"/>
              </svg>
            </span> */}
            {/* Net Banking */}
            {/* <span className="footer__payment-badge" aria-label="Net Banking">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect width="48" height="48" rx="6" fill="#0066CC"/>
                <text x="24" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="Arial">NET</text>
                <text x="24" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="Arial">BANKING</text>
              </svg>
            </span> */}
            {/* Razorpay */}
            {/* <span className="footer__payment-badge" aria-label="Razorpay">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect width="48" height="48" rx="6" fill="#072654"/>
                <text x="24" y="30" textAnchor="middle" fill="#3395FF" fontSize="8" fontWeight="bold" fontFamily="Arial">Razorpay</text>
              </svg>
            </span> */}
          </div>
          {/* <p className="footer__payment-secure">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="footer__lock-icon">
              <path d="M10 1a4 4 0 00-4 4v2H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4z" fill="currentColor"/>
            </svg>
            256-bit
          </p> */}
        </div>

        {/* Newsletter */}
        <div className="footer__col footer__newsletter">
          <h4 className="footer__col-title">Stay Updated</h4>
          <p className="footer__newsletter-desc">
            Get learning tips and new content alerts in your inbox.
          </p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="footer__input"
              aria-label="Email address"
            />
            <button type="submit" className="footer__form-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          © {year} Dr Mom 2.0 Learning Platform. All rights reserved.
        </p>
        <p className="footer__made">
          Designed for curious young minds 🌟
        </p>
      </div>
    </footer>
  );
};

export default Footer;
