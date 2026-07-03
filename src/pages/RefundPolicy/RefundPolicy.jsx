import React from "react";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-page">
      <div className="refund-header">
        <div className="container">
          <h1 className="refund-title">Refund Policy</h1>
          <p className="refund-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="container refund-content">
        <section className="refund-section">
          <h2>Effective Date: [DD/MM/YYYY]</h2>
          <p>
            This Refund Policy applies to all purchases made through Dr Mom 2.0. The Platform provides digital
            educational subscription services. Because access is delivered instantly after successful payment,
            refunds are limited.
          </p>
        </section>

        <section className="refund-section">
          <h2>1. Eligible Refund Cases</h2>
          <p>Refund requests may be approved if:</p>
          <ul>
            <li>Duplicate payment.</li>
            <li>Multiple deductions for one order.</li>
            <li>Payment successful but subscription not activated.</li>
            <li>Technical failure preventing access that cannot be resolved.</li>
            <li>Incorrect amount charged due to system error.</li>
          </ul>
        </section>

        <section className="refund-section">
          <h2>2. Non-Refundable Cases</h2>
          <p>Refunds are not provided for:</p>
          <ul>
            <li>Change of mind.</li>
            <li>Lack of interest.</li>
            <li>Failure to use the subscription.</li>
            <li>Internet issues.</li>
            <li>Device incompatibility.</li>
            <li>Accidental purchase.</li>
            <li>Expired subscription.</li>
            <li>Violation of Terms.</li>
            <li>Sharing account credentials.</li>
            <li>Download restriction dissatisfaction.</li>
          </ul>
        </section>

        <section className="refund-section">
          <h2>3. Refund Request Procedure</h2>
          <p>Users must contact support within 7 days of the transaction. Please include:</p>
          <ul>
            <li>Registered Email</li>
            <li>Mobile Number</li>
            <li>Razorpay Payment ID</li>
            <li>Transaction Date</li>
            <li>Description of the issue</li>
          </ul>
        </section>

        <section className="refund-section">
          <h2>4. Processing Time</h2>
          <p>
            Approved refunds are processed within 7–10 business days. Actual credit time depends on banks
            and payment providers.
          </p>
        </section>

        <section className="refund-section">
          <h2>5. Subscription Cancellation</h2>
          <p>
            Users may discontinue future renewals at any time. Cancellation prevents future billing but does
            not refund the current active subscription.
          </p>
        </section>

        <section className="refund-section">
          <h2>6. Failed Payments</h2>
          <p>
            If payment fails, no subscription will be activated until successful payment is received.
          </p>
        </section>

        <section className="refund-section">
          <h2>7. Chargebacks</h2>
          <p>
            Users are encouraged to contact customer support before initiating a chargeback. Fraudulent
            chargebacks may result in account suspension pending investigation.
          </p>
        </section>

        <section className="refund-section">
          <h2>8. Contact Us</h2>
          <p>For refund inquiries, please reach out to us:</p>
          <ul className="contact-list">
            <li>Email: refunds@drmom2.0.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: Dr Mom 2.0 Learning Platform, 123 Education Street, Learning City, LC 12345</li>
          </ul>
          <p>
            Our support team is available Monday to Friday, 9 AM – 6 PM (IST) to assist you with any refund
            related questions.
          </p>
        </section>

        <section className="refund-section">
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

export default RefundPolicy;
