import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <div className="container">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container policy-content">
        <section className="policy-section">
          <h2>Effective Date: [DD/MM/YYYY]</h2>
          <p>
            At Dr Mom 2.0, protecting your privacy is one of our highest priorities. This Privacy Policy explains
            how we collect, use, process, store, and protect personal information.
          </p>
        </section>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li>Student Name</li>
            <li>Parent Name</li>
            <li>Date of Birth</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Class</li>
            <li>School</li>
            <li>Address (Optional)</li>
            <li>Profile Picture (Optional)</li>
            <li>Device Information</li>
            <li>Browser Information</li>
            <li>IP Address</li>
            <li>Login History</li>
            <li>Subscription Details</li>
            <li>Transaction IDs</li>
            <li>Support Requests</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>Our servers automatically collect:</p>
          <ul>
            <li>Device Type</li>
            <li>Browser Type</li>
            <li>Operating System</li>
            <li>Language Preference</li>
            <li>Cookies</li>
            <li>IP Address</li>
            <li>Time Zone</li>
            <li>Login Date</li>
            <li>Session Duration</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. Payment Information</h2>
          <p>
            Payments are processed securely by Razorpay. We never collect or store:
          </p>
          <ul>
            <li>Credit Card Number</li>
            <li>CVV</li>
            <li>UPI PIN</li>
            <li>Internet Banking Password</li>
            <li>Debit Card PIN</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Information</h2>
          <p>Information is used to:</p>
          <ul>
            <li>Create Accounts</li>
            <li>Verify Users</li>
            <li>Activate Subscriptions</li>
            <li>Process Payments</li>
            <li>Improve Learning Experience</li>
            <li>Send Notifications</li>
            <li>Provide Customer Support</li>
            <li>Prevent Fraud</li>
            <li>Maintain Security</li>
            <li>Generate Learning Reports</li>
            <li>Monitor Website Performance</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Cookies</h2>
          <p>Cookies help us:</p>
          <ul>
            <li>Keep users logged in</li>
            <li>Remember preferences</li>
            <li>Improve loading speed</li>
            <li>Analyze website usage</li>
          </ul>
          <p>Users may disable cookies through browser settings.</p>
        </section>

        <section className="policy-section">
          <h2>5. Children's Privacy</h2>
          <p>
            Since our Platform serves children under 13 years, parents are encouraged to supervise their child's use.
            We do not knowingly collect unnecessary personal information from children.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Data Security</h2>
          <p>We employ:</p>
          <ul>
            <li>SSL Encryption</li>
            <li>Secure Servers</li>
            <li>Password Encryption</li>
            <li>Firewall Protection</li>
            <li>Role-Based Access</li>
            <li>Secure Authentication</li>
          </ul>
          <p>Despite these measures, no internet transmission is completely secure.</p>
        </section>

        <section className="policy-section">
          <h2>7. Data Sharing</h2>
          <p>We may share information only with:</p>
          <ul>
            <li>Razorpay</li>
            <li>Cloud Hosting Providers</li>
            <li>SMS Service Providers</li>
            <li>Email Service Providers</li>
            <li>Government Authorities when legally required</li>
          </ul>
          <p>We never sell personal information.</p>
        </section>

        <section className="policy-section">
          <h2>8. User Rights</h2>
          <p>Parents may request:</p>
          <ul>
            <li>Profile correction</li>
            <li>Data deletion</li>
            <li>Account closure</li>
            <li>Subscription details</li>
            <li>Transaction history</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Retention</h2>
          <p>
            Information is retained as long as necessary for legal, educational, accounting, or security purposes.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. Policy Changes</h2>
          <p>
            We may revise this Privacy Policy periodically. Changes become effective immediately after publication.
          </p>
        </section>

        <section className="policy-section">
          <h2>11. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul className="contact-list">
            <li>Email: privacy@drmom2.0.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: Dr Mom 2.0 Learning Platform, 123 Education Street, Learning City, LC 12345</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data Privacy Assurance</h2>
          <p>
            We assure users that all data collected is accessible only to authorized Administrators and Teachers
            for the purpose of monitoring student performance. No unauthorized third party will be permitted to
            access the collected data.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
