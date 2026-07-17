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
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%"  stopColor="#fdf497" />
            <stop offset="10%" stopColor="#fdf497" />
            <stop offset="20%" stopColor="#fd5949" />
            <stop offset="45%" stopColor="#d6249f" />
            <stop offset="80%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="url(#ig-grad)" />
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
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
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms-of-use", label: "Terms of Use" },
              { to: "/refund-policy", label: "Refund Policy" },
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
