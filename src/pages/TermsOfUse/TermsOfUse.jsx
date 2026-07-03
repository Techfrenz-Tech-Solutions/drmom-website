import React from "react";
import "./TermsOfUse.css";

const TermsOfUse = () => {
  return (
    <div className="terms-page">
      <div className="terms-header">
        <div className="container">
          <h1 className="terms-title">Terms of Use</h1>
          <p className="terms-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container terms-content">
        <section className="terms-section">
          <h2>Effective Date: [DD/MM/YYYY]</h2>
          <p>
            Welcome to Dr Mom 2.0, an online learning platform dedicated to providing quality educational content
            for students studying in Classes 1 to 5. By accessing or using this website, mobile application, or
            any of our services ("Platform"), you agree to comply with these Terms of Use. If you do not agree
            with these terms, please discontinue using the Platform immediately.
          </p>
        </section>

        <section className="terms-section">
          <h2>1. Definitions</h2>
          <ul>
            <li><strong>Platform</strong> refers to Dr Mom 2.0.</li>
            <li><strong>Student</strong> refers to a registered learner.</li>
            <li><strong>Parent/Guardian</strong> refers to the legal guardian responsible for a minor.</li>
            <li><strong>Subscription</strong> refers to a paid plan that grants access to educational content.</li>
            <li><strong>Content</strong> includes videos, PDFs, worksheets, quizzes, assignments, images, graphics, software, animations, and downloadable educational materials.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>2. Eligibility</h2>
          <p>
            The Platform is intended only for students enrolled in Classes 1 to 5. Students below 18 years of age
            should register only with the consent and supervision of a parent or legal guardian. Parents are
            responsible for monitoring the child's activities on the Platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Registration</h2>
          <p>Users must register before accessing premium educational content. During registration, users must provide:</p>
          <ul>
            <li>Student Name</li>
            <li>Parent/Guardian Name</li>
            <li>Mobile Number</li>
            <li>Email Address</li>
            <li>Password</li>
            <li>Class</li>
            <li>School (Optional)</li>
          </ul>
          <p>
            Users agree that all information submitted is accurate and complete. Providing false information may
            result in suspension of the account.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Student Account</h2>
          <p>Each student shall maintain only one account. Users are responsible for:</p>
          <ul>
            <li>Keeping passwords confidential.</li>
            <li>Logging out from shared devices.</li>
            <li>Preventing unauthorized access.</li>
          </ul>
          <p>The Platform shall not be liable for any loss arising from compromised login credentials.</p>
        </section>

        <section className="terms-section">
          <h2>5. Subscription Plans</h2>
          <p>Premium educational content is available through subscription plans. Subscription benefits include:</p>
          <ul>
            <li>Video Lessons</li>
            <li>Chapter-wise Learning</li>
            <li>Practice Worksheets</li>
            <li>Assessments</li>
            <li>Mock Tests</li>
            <li>Learning Materials</li>
            <li>Progress Tracking</li>
          </ul>
          <p>
            Subscriptions remain active only for the selected duration. Upon expiry, premium access automatically
            ends until renewed.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Renewal</h2>
          <p>
            Subscriptions may be renewed monthly or according to the selected plan. Failure to renew will suspend
            access to premium educational content. Previously completed progress records may remain available
            subject to our retention policy.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Payment</h2>
          <p>Payments are securely processed through Razorpay. Accepted payment methods may include:</p>
          <ul>
            <li>UPI</li>
            <li>Debit Cards</li>
            <li>Credit Cards</li>
            <li>Net Banking</li>
            <li>Wallets</li>
            <li>EMI (if available)</li>
          </ul>
          <p>
            We do not store card details. Payment confirmation depends upon authorization from your financial
            institution.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Educational Purpose</h2>
          <p>The Platform is intended solely for educational purposes. Completion of any course does not guarantee:</p>
          <ul>
            <li>Academic rank</li>
            <li>Examination success</li>
            <li>Admission</li>
            <li>Employment</li>
            <li>Certification by any Government authority</li>
          </ul>
          <p>Student performance depends upon individual effort.</p>
        </section>

        <section className="terms-section">
          <h2>9. Intellectual Property</h2>
          <p>All educational materials are owned by the Platform. This includes:</p>
          <ul>
            <li>Videos</li>
            <li>Lesson Plans</li>
            <li>PDFs</li>
            <li>Graphics</li>
            <li>Logos</li>
            <li>Website Design</li>
            <li>Source Code</li>
            <li>Quizzes</li>
            <li>Animations</li>
            <li>Audio</li>
          </ul>
          <p>Users shall not reproduce or distribute any content without written permission.</p>
        </section>

        <section className="terms-section">
          <h2>10. Prohibited Activities</h2>
          <p>Users shall not:</p>
          <ul>
            <li>Download protected videos.</li>
            <li>Screen record lessons.</li>
            <li>Share subscriptions.</li>
            <li>Sell educational materials.</li>
            <li>Copy PDFs.</li>
            <li>Upload Platform content to YouTube.</li>
            <li>Reverse engineer the website.</li>
            <li>Attempt hacking.</li>
            <li>Use bots.</li>
            <li>Abuse teachers or administrators.</li>
          </ul>
          <p>Violation may result in permanent account suspension.</p>
        </section>

        <section className="terms-section">
          <h2>11. Technical Availability</h2>
          <p>Although we strive for uninterrupted service, temporary downtime may occur because of:</p>
          <ul>
            <li>Server Maintenance</li>
            <li>Software Updates</li>
            <li>Internet Failure</li>
            <li>Power Failure</li>
            <li>Third-party Service Interruptions</li>
            <li>Natural Disasters</li>
          </ul>
          <p>The Platform is not liable for such interruptions.</p>
        </section>

        <section className="terms-section">
          <h2>12. Termination</h2>
          <p>The Platform reserves the right to terminate accounts without notice if users:</p>
          <ul>
            <li>Violate these Terms.</li>
            <li>Commit payment fraud.</li>
            <li>Share copyrighted materials.</li>
            <li>Engage in abusive conduct.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>13. Modification</h2>
          <p>
            The Platform may modify these Terms at any time. Continued use after updates constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. All disputes shall be subject to the jurisdiction of
            the courts located in [City, State].
          </p>
        </section>

        <section className="terms-section">
          <h2>15. Contact Information</h2>
          <p>If you have questions about these Terms of Use, please contact us:</p>
          <ul className="contact-list">
            <li>Email: legal@drmom2.0.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: Dr Mom 2.0 Learning Platform, 123 Education Street, Learning City, LC 12345</li>
          </ul>
        </section>

        <section className="terms-section">
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

export default TermsOfUse;
