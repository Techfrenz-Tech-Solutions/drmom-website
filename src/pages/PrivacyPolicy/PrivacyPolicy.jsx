import { useState, useEffect } from "react";
import "./PrivacyPolicy.css";

const TOC = [
  { id: "intro",     label: "Effective Date" },
  { id: "collect",   label: "1. Information We Collect" },
  { id: "payment",   label: "2. Payment Information" },
  { id: "use",       label: "3. How We Use Information" },
  { id: "cookies",   label: "4. Cookies" },
  { id: "children",  label: "5. Children's Privacy" },
  { id: "security",  label: "6. Data Security" },
  { id: "sharing",   label: "7. Data Sharing" },
  { id: "rights",    label: "8. User Rights" },
  { id: "retain",    label: "9. Retention" },
  { id: "changes",   label: "10. Policy Changes" },
  { id: "contact",   label: "11. Contact Us" },
  { id: "assurance", label: "Data Privacy Assurance" },
];

const Section = ({ id, icon, title, children }) => (
  <section className="policy-section" id={id}>
    <div className="policy-section-head">
      <div className="policy-section-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
    <div className="policy-section-body">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  const [activeId, setActiveId] = useState(TOC[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="policy-page">
      <div className="policy-header">
        <div className="policy-header-inner">
          <div className="policy-badge">
            <span className="policy-badge-dot" />
            Legal Document
          </div>
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="policy-layout">
        {/* Sidebar TOC */}
        <aside className="policy-toc">
          <p className="policy-toc-title">On this page</p>
          <ul className="policy-toc-list">
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? "policy-toc-active" : ""}
                  onClick={(e) => handleTocClick(e, id)}
                >
                  {activeId === id && <span className="policy-toc-indicator" />}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="policy-sections">
          <Section id="intro" icon="📋" title="Effective Date: [DD/MM/YYYY]">
            <p>At Dr Mom 2.0, protecting your privacy is one of our highest priorities. This Privacy Policy explains how we collect, use, process, store, and protect personal information.</p>
          </Section>

          <Section id="collect" icon="🗂️" title="1. Information We Collect">
            <p>We may collect:</p>
            <ul>
              {["Student Name","Parent Name","Date of Birth","Email Address","Phone Number","Class","School","Address (Optional)","Profile Picture (Optional)","Device Information","Browser Information","IP Address","Login History","Subscription Details","Transaction IDs","Support Requests"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <h3>Information Collected Automatically</h3>
            <p>Our servers automatically collect:</p>
            <ul>
              {["Device Type","Browser Type","Operating System","Language Preference","Cookies","IP Address","Time Zone","Login Date","Session Duration"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="payment" icon="💳" title="2. Payment Information">
            <p>Payments are processed securely by Razorpay. We never collect or store:</p>
            <ul>
              {["Credit Card Number","CVV","UPI PIN","Internet Banking Password","Debit Card PIN"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="use" icon="⚙️" title="3. How We Use Information">
            <p>Information is used to:</p>
            <ul>
              {["Create Accounts","Verify Users","Activate Subscriptions","Process Payments","Improve Learning Experience","Send Notifications","Provide Customer Support","Prevent Fraud","Maintain Security","Generate Learning Reports","Monitor Website Performance"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="cookies" icon="🍪" title="4. Cookies">
            <p>Cookies help us:</p>
            <ul>
              {["Keep users logged in","Remember preferences","Improve loading speed","Analyze website usage"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>Users may disable cookies through browser settings.</p>
          </Section>

          <Section id="children" icon="🧒" title="5. Children's Privacy">
            <p>Since our Platform serves children under 13 years, parents are encouraged to supervise their child's use. We do not knowingly collect unnecessary personal information from children.</p>
          </Section>

          <Section id="security" icon="🔒" title="6. Data Security">
            <p>We employ:</p>
            <ul>
              {["SSL Encryption","Secure Servers","Password Encryption","Firewall Protection","Role-Based Access","Secure Authentication"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>Despite these measures, no internet transmission is completely secure.</p>
          </Section>

          <Section id="sharing" icon="🤝" title="7. Data Sharing">
            <p>We may share information only with:</p>
            <ul>
              {["Razorpay","Cloud Hosting Providers","SMS Service Providers","Email Service Providers","Government Authorities when legally required"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>We never sell personal information.</p>
          </Section>

          <Section id="rights" icon="✅" title="8. User Rights">
            <p>Parents may request:</p>
            <ul>
              {["Profile correction","Data deletion","Account closure","Subscription details","Transaction history"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="retain" icon="🗃️" title="9. Retention">
            <p>Information is retained as long as necessary for legal, educational, accounting, or security purposes.</p>
          </Section>

          <Section id="changes" icon="🔄" title="10. Policy Changes">
            <p>We may revise this Privacy Policy periodically. Changes become effective immediately after publication.</p>
          </Section>

          <Section id="contact" icon="�" title="11. Contact Us">
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <ul className="contact-list">
              <li>Email: privacy@drmom2.0.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Dr Mom 2.0 Learning Platform, 123 Education Street, Learning City, LC 12345</li>
            </ul>
          </Section>

          <Section id="assurance" icon="🛡️" title="Data Privacy Assurance">
            <p>We assure users that all data collected is accessible only to authorized Administrators and Teachers for the purpose of monitoring student performance. No unauthorized third party will be permitted to access the collected data.</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
