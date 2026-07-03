import { useState, useEffect } from "react";
import "./TermsOfUse.css";

const TOC = [
  { id: "intro",     label: "Effective Date" },
  { id: "defs",      label: "1. Definitions" },
  { id: "elig",      label: "2. Eligibility" },
  { id: "reg",       label: "3. Registration" },
  { id: "account",   label: "4. Student Account" },
  { id: "subs",      label: "5. Subscription Plans" },
  { id: "renewal",   label: "6. Renewal" },
  { id: "payment",   label: "7. Payment" },
  { id: "edu",       label: "8. Educational Purpose" },
  { id: "ip",        label: "9. Intellectual Property" },
  { id: "prohibit",  label: "10. Prohibited Activities" },
  { id: "tech",      label: "11. Technical Availability" },
  { id: "terminate", label: "12. Termination" },
  { id: "modify",    label: "13. Modification" },
  { id: "law",       label: "14. Governing Law" },
  { id: "contact",   label: "15. Contact Information" },
  { id: "assurance", label: "Data Privacy Assurance" },
];

const Section = ({ id, icon, title, children }) => (
  <section className="terms-section" id={id}>
    <div className="terms-section-head">
      <div className="terms-section-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
    <div className="terms-section-body">{children}</div>
  </section>
);

const TermsOfUse = () => {
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
    <div className="terms-page">
      <div className="terms-header">
        <div className="terms-header-inner">
          <div className="terms-badge">
            <span className="terms-badge-dot" />
            Legal Document
          </div>
          <h1 className="terms-title">Terms of Use</h1>
          <p className="terms-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="terms-layout">
        {/* Sidebar TOC */}
        <aside className="terms-toc">
          <p className="terms-toc-title">On this page</p>
          <ul className="terms-toc-list">
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? "terms-toc-active" : ""}
                  onClick={(e) => handleTocClick(e, id)}
                >
                  {activeId === id && <span className="terms-toc-indicator" />}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="terms-sections">
          <Section id="intro" icon="📄" title="Effective Date: [DD/MM/YYYY]">
            <p>Welcome to Dr Mom 2.0, an online learning platform dedicated to providing quality educational content for students studying in Classes 1 to 5. By accessing or using this website, mobile application, or any of our services ("Platform"), you agree to comply with these Terms of Use. If you do not agree with these terms, please discontinue using the Platform immediately.</p>
          </Section>

          <Section id="defs" icon="📖" title="1. Definitions">
            <ul>
              <li><strong>Platform</strong> refers to Dr Mom 2.0.</li>
              <li><strong>Student</strong> refers to a registered learner.</li>
              <li><strong>Parent/Guardian</strong> refers to the legal guardian responsible for a minor.</li>
              <li><strong>Subscription</strong> refers to a paid plan that grants access to educational content.</li>
              <li><strong>Content</strong> includes videos, PDFs, worksheets, quizzes, assignments, images, graphics, software, animations, and downloadable educational materials.</li>
            </ul>
          </Section>

          <Section id="elig" icon="🎓" title="2. Eligibility">
            <p>The Platform is intended only for students enrolled in Classes 1 to 5. Students below 18 years of age should register only with the consent and supervision of a parent or legal guardian. Parents are responsible for monitoring the child's activities on the Platform.</p>
          </Section>

          <Section id="reg" icon="📝" title="3. Registration">
            <p>Users must register before accessing premium educational content. During registration, users must provide:</p>
            <ul>
              {["Student Name","Parent/Guardian Name","Mobile Number","Email Address","Password","Class","School (Optional)"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>Users agree that all information submitted is accurate and complete. Providing false information may result in suspension of the account.</p>
          </Section>

          <Section id="account" icon="👤" title="4. Student Account">
            <p>Each student shall maintain only one account. Users are responsible for:</p>
            <ul>
              {["Keeping passwords confidential.","Logging out from shared devices.","Preventing unauthorized access."].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>The Platform shall not be liable for any loss arising from compromised login credentials.</p>
          </Section>

          <Section id="subs" icon="⭐" title="5. Subscription Plans">
            <p>Premium educational content is available through subscription plans. Subscription benefits include:</p>
            <ul>
              {["Video Lessons","Chapter-wise Learning","Practice Worksheets","Assessments","Mock Tests","Learning Materials","Progress Tracking"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>Subscriptions remain active only for the selected duration. Upon expiry, premium access automatically ends until renewed.</p>
          </Section>

          <Section id="renewal" icon="🔁" title="6. Renewal">
            <p>Subscriptions may be renewed monthly or according to the selected plan. Failure to renew will suspend access to premium educational content. Previously completed progress records may remain available subject to our retention policy.</p>
          </Section>

          <Section id="payment" icon="💳" title="7. Payment">
            <p>Payments are securely processed through Razorpay. Accepted payment methods may include:</p>
            <ul>
              {["UPI","Debit Cards","Credit Cards","Net Banking","Wallets","EMI (if available)"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>We do not store card details. Payment confirmation depends upon authorization from your financial institution.</p>
          </Section>

          <Section id="edu" icon="🏫" title="8. Educational Purpose">
            <p>The Platform is intended solely for educational purposes. Completion of any course does not guarantee:</p>
            <ul>
              {["Academic rank","Examination success","Admission","Employment","Certification by any Government authority"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>Student performance depends upon individual effort.</p>
          </Section>

          <Section id="ip" icon="©️" title="9. Intellectual Property">
            <p>All educational materials are owned by the Platform. This includes:</p>
            <ul>
              {["Videos","Lesson Plans","PDFs","Graphics","Logos","Website Design","Source Code","Quizzes","Animations","Audio"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>Users shall not reproduce or distribute any content without written permission.</p>
          </Section>

          <Section id="prohibit" icon="🚫" title="10. Prohibited Activities">
            <p>Users shall not:</p>
            <ul>
              {["Download protected videos.","Screen record lessons.","Share subscriptions.","Sell educational materials.","Copy PDFs.","Upload Platform content to YouTube.","Reverse engineer the website.","Attempt hacking.","Use bots.","Abuse teachers or administrators."].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>Violation may result in permanent account suspension.</p>
          </Section>

          <Section id="tech" icon="⚡" title="11. Technical Availability">
            <p>Although we strive for uninterrupted service, temporary downtime may occur because of:</p>
            <ul>
              {["Server Maintenance","Software Updates","Internet Failure","Power Failure","Third-party Service Interruptions","Natural Disasters"].map(i => <li key={i}>{i}</li>)}
            </ul>
            <p>The Platform is not liable for such interruptions.</p>
          </Section>

          <Section id="terminate" icon="🔐" title="12. Termination">
            <p>The Platform reserves the right to terminate accounts without notice if users:</p>
            <ul>
              {["Violate these Terms.","Commit payment fraud.","Share copyrighted materials.","Engage in abusive conduct."].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="modify" icon="✏️" title="13. Modification">
            <p>The Platform may modify these Terms at any time. Continued use after updates constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section id="law" icon="⚖️" title="14. Governing Law">
            <p>These Terms are governed by the laws of India. All disputes shall be subject to the jurisdiction of the courts located in [City, State].</p>
          </Section>

          <Section id="contact" icon="📞" title="15. Contact Information">
            <p>If you have questions about these Terms of Use, please contact us:</p>
            <ul className="contact-list">
              <li>Email: legal@drmom2.0.com</li>
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

export default TermsOfUse;
