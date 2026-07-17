import { useState, useEffect } from "react";
import "./RefundPolicy.css";

const TOC = [
  { id: "intro",     label: "Effective Date" },
  { id: "eligible",  label: "1. Eligible Refund Cases" },
  { id: "nonref",    label: "2. Non-Refundable Cases" },
  { id: "procedure", label: "3. Refund Request Procedure" },
  { id: "process",   label: "4. Processing Time" },
  { id: "cancel",    label: "5. Subscription Cancellation" },
  { id: "failed",    label: "6. Failed Payments" },
  { id: "charge",    label: "7. Chargebacks" },
  { id: "contact",   label: "8. Contact Us" },
  { id: "assurance", label: "Data Privacy Assurance" },
];

const Section = ({ id, icon, title, children }) => (
  <section className="refund-section" id={id}>
    <div className="refund-section-head">
      <div className="refund-section-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
    <div className="refund-section-body">{children}</div>
  </section>
);

const RefundPolicy = () => {
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
    <div className="refund-page">
      <div className="refund-header">
        <div className="refund-header-inner">
          <div className="refund-badge">
            <span className="refund-badge-dot" />
            Legal Document
          </div>
          <h1 className="refund-title">Refund Policy</h1>
          <p className="refund-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="refund-layout">
        {/* Sidebar TOC */}
        <aside className="refund-toc">
          <p className="refund-toc-title">On this page</p>
          <ul className="refund-toc-list">
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? "refund-toc-active" : ""}
                  onClick={(e) => handleTocClick(e, id)}
                >
                  {activeId === id && <span className="refund-toc-indicator" />}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="refund-sections">
          <Section id="intro" icon="📋" title="Effective Date: [DD/MM/YYYY]">
            <p>This Refund Policy applies to all purchases made through Dr Mom 2.0. The Platform provides digital educational subscription services. Because access is delivered instantly after successful payment, refunds are limited.</p>
          </Section>

          <Section id="eligible" icon="✅" title="1. Eligible Refund Cases">
            <p>Refund requests may be approved if:</p>
            <ul>
              {["Duplicate payment.","Multiple deductions for one order.","Payment successful but subscription not activated.","Technical failure preventing access that cannot be resolved.","Incorrect amount charged due to system error."].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="nonref" icon="🚫" title="2. Non-Refundable Cases">
            <p>Refunds are not provided for:</p>
            <ul>
              {["Change of mind.","Lack of interest.","Failure to use the subscription.","Internet issues.","Device incompatibility.","Accidental purchase.","Expired subscription.","Violation of Terms.","Sharing account credentials.","Download restriction dissatisfaction."].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="procedure" icon="📝" title="3. Refund Request Procedure">
            <p>Users must contact support within 7 days of the transaction. Please include:</p>
            <ul>
              {["Registered Email","Mobile Number","Razorpay Payment ID","Transaction Date","Description of the issue"].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Section>

          <Section id="process" icon="⏱️" title="4. Processing Time">
            <p>Approved refunds are processed within 7–10 business days. Actual credit time depends on banks and payment providers.</p>
          </Section>

          <Section id="cancel" icon="🔁" title="5. Subscription Cancellation">
            <p>Users may discontinue future renewals at any time. Cancellation prevents future billing but does not refund the current active subscription.</p>
          </Section>

          <Section id="failed" icon="⚠️" title="6. Failed Payments">
            <p>If payment fails, no subscription will be activated until successful payment is received.</p>
          </Section>

          <Section id="charge" icon="🏦" title="7. Chargebacks">
            <p>Users are encouraged to contact customer support before initiating a chargeback. Fraudulent chargebacks may result in account suspension pending investigation.</p>
          </Section>

          <Section id="contact" icon="📞" title="8. Contact Us">
            <p>For refund inquiries, please reach out to us:</p>
            <ul className="contact-list">
              <li>Email: refunds@drmom2.0.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: Dr Mom 2.0 Learning Platform, 123 Education Street, Learning City, LC 12345</li>
            </ul>
            <p>Our support team is available Monday to Friday, 9 AM – 6 PM (IST) to assist you with any refund related questions.</p>
          </Section>

          <Section id="assurance" icon="🛡️" title="Data Privacy Assurance">
            <p>We assure users that all data collected is accessible only to authorized Administrators and Teachers for the purpose of monitoring student performance. No unauthorized third party will be permitted to access the collected data.</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
