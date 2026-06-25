import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import { apiRequest } from "../../utils/api";
import "./Payment.css";

const loadRazorpay = () =>
  new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, classInfo, video, chapter } = location.state || {};
  const selectedVideo = video || null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successOrder, setSuccessOrder] = useState(null);
  const [error, setError] = useState("");

  const activePlan = plan || (selectedVideo
    ? {
        name: selectedVideo.title,
        price: selectedVideo.price || "₹19",
        period: "Single Video",
        color: classInfo?.color || "#38bdf8",
        features: [
          `Chapter: ${selectedVideo.chapter}`,
          `Class: ${classInfo?.fullLabel || "Selected Class"}`,
          "HD video access",
          "Downloadable notes",
        ],
      }
    : { name: "Class Package", price: "₹499", period: "per class/year", color: "#34d399", features: [] });

  const activeClass = classInfo || { fullLabel: "Selected Class", emoji: "📚", color: "#34d399" };

  const handlePay = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all contact details.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const courseId = selectedVideo?.courseId || plan?.courseId || classInfo?.courseId;
      if (!courseId) throw new Error("No course is linked to this item yet — contact support.");

      const sdkReady = await loadRazorpay();
      if (!sdkReady) throw new Error("Could not load payment gateway. Check your internet connection.");

      const order = await apiRequest("/payments/orders", {
        method: "POST",
        body: JSON.stringify({ courseId }),
      });

      await new Promise((resolve, reject) => {
        const rzp = new window.Razorpay({
          key: order.order.razorpayKeyId,
          amount: order.order.amountInPaise,
          currency: "INR",
          name: "Dr Mom 2.0",
          description: order.order.course?.title || activePlan.name,
          order_id: order.order.razorpayOrderId,
          prefill: { name, email, contact: phone },
          theme: { color: activePlan.color || "#6c63ff" },
          handler: async (response) => {
            try {
              await apiRequest("/payments/verify", {
                method: "POST",
                body: JSON.stringify({
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                }),
              });
              setSuccessOrder(order.order);
              setSuccess(true);
              resolve();
            } catch (err) {
              reject(err);
            }
          },
          modal: {
            ondismiss: () => reject(new Error("Payment cancelled.")),
          },
        });
        rzp.open();
      });
    } catch (err) {
      setError(err.message || "Payment could not be started.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="payment-page page-wrapper">
        <ParticleBackground density={40} />
        <div className="container payment-success">
          <div className="payment-success__card glass-panel">
            <div className="payment-success__icon">🎉</div>
            <h2 className="payment-success__title">Payment Successful!</h2>
            <p className="payment-success__sub">
              Welcome to Dr Mom 2.0! Your <strong>{activePlan.name}</strong> is now active.
            </p>
            <div className="payment-success__detail">
              <span>{activeClass.emoji} {activeClass.fullLabel}</span>
              <span className="payment-success__amount" style={{ color: activePlan.color }}>
                {activePlan.price}
              </span>
            </div>
            {successOrder && (
              <p className="payment-success__receipt">
                Order ID: <code>{successOrder.razorpayOrderId || successOrder.id}</code>
              </p>
            )}
            <div className="payment-success__actions">
              <button
                className="btn btn-primary"
                onClick={() => navigate(classInfo ? `/classes/${classInfo.id}` : "/classes")}
              >
                Start Learning →
              </button>
              <Link to="/" className="btn btn-outline">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page page-wrapper">
      <ParticleBackground density={35} />

      <div className="payment-breadcrumb">
        <div className="container payment-breadcrumb__inner">
          <Link to="/" className="payment-breadcrumb__link">Home</Link>
          <span>›</span>
          {classInfo && (
            <>
              <Link to={`/classes/${classInfo.id}`} className="payment-breadcrumb__link">
                {classInfo.fullLabel}
              </Link>
              <span>›</span>
            </>
          )}
          <span className="payment-breadcrumb__current">Payment</span>
        </div>
      </div>

      <div className="container payment-grid">

        {/* Order Summary */}
        <aside className="payment-summary">
          <div className="payment-summary__card glass-panel">
            <h3 className="payment-summary__heading">Order Summary</h3>

            <div className="payment-summary__plan" style={{ "--plan-color": activePlan.color }}>
              <div className="payment-summary__plan-top">
                <span className="payment-summary__emoji">{activeClass.emoji}</span>
                <div>
                  <p className="payment-summary__plan-name">{activePlan.name}</p>
                  <p className="payment-summary__class">{activeClass.fullLabel}</p>
                </div>
              </div>
              <div className="payment-summary__price-row">
                <span className="payment-summary__price" style={{ color: activePlan.color }}>
                  {activePlan.price}
                </span>
                <span className="payment-summary__period">{activePlan.period}</span>
              </div>
              {selectedVideo && (
                <div className="payment-summary__video-detail">
                  <p><strong>Lesson:</strong> {selectedVideo.title}</p>
                  <p><strong>Chapter:</strong> {selectedVideo.chapter}</p>
                </div>
              )}
              {chapter && !selectedVideo && (
                <div className="payment-summary__video-detail">
                  <p><strong>Chapter:</strong> {chapter}</p>
                </div>
              )}
            </div>

            <ul className="payment-summary__features">
              {(activePlan.features || []).map((f) => (
                <li key={f}>
                  <span className="payment-summary__check" style={{ color: activePlan.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="payment-summary__total">
              <div className="payment-summary__row">
                <span>Subtotal</span>
                <span>{activePlan.price}</span>
              </div>
              <div className="payment-summary__row">
                <span>GST (18%)</span>
                <span className="payment-summary__gst">Included</span>
              </div>
              <div className="payment-summary__row payment-summary__row--total">
                <span>Total</span>
                <span style={{ color: activePlan.color }}>{activePlan.price}</span>
              </div>
            </div>

            <div className="payment-summary__secure">
              <span>🔒</span>
              <span>256-bit SSL · Powered by Razorpay</span>
            </div>
          </div>
        </aside>

        {/* Payment Form */}
        <main className="payment-form-section">
          <div className="payment-form-card glass-panel">
            <h2 className="payment-form__title">Complete Your Purchase</h2>
            <p style={{ fontSize: 13, color: "var(--text3)", marginBottom: 24 }}>
              You'll be redirected to Razorpay's secure checkout to pay by UPI, card, net banking, or wallet.
            </p>

            <form className="payment-form" onSubmit={handlePay}>
              {error && <p className="login-error">{error}</p>}

              <h4 className="pf-section-label">Contact Details</h4>
              <div className="pf-row">
                <div className="pf-field">
                  <label htmlFor="pf-name">Full Name</label>
                  <input
                    id="pf-name" type="text" required placeholder="Parent / Guardian name"
                    value={name} onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="pf-field">
                  <label htmlFor="pf-email">Email</label>
                  <input
                    id="pf-email" type="email" required placeholder="Receipt will be sent here"
                    value={email} onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="pf-field">
                <label htmlFor="pf-phone">Mobile Number</label>
                <input
                  id="pf-phone" type="tel" required placeholder="+91 98765 43210"
                  value={phone} onChange={e => setPhone(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="payment-submit-btn"
                disabled={loading}
                style={{ "--plan-color": activePlan.color }}
              >
                {loading ? (
                  <span className="payment-submit-btn__loading">
                    <span className="payment-spinner" />
                    Opening Checkout...
                  </span>
                ) : (
                  <>Pay {activePlan.price} Securely 🔒</>
                )}
              </button>

              <p className="payment-form__disclaimer">
                By completing this purchase you agree to Dr Mom 2.0's{" "}
                <a href="#!">Terms of Service</a> and <a href="#!">Refund Policy</a>.
                Payments are processed securely by Razorpay. 7-day money-back guarantee.
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payment;
