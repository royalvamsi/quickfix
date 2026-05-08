"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const params = useParams();
  const bookingId = params.bookingId || "QF2847";
  const [success, setSuccess] = useState(false);
  const [paying, setPaying] = useState(false);

  const handlePay = () => {
    setPaying(true);
    // Mock Razorpay delay
    setTimeout(() => {
      setPaying(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div className="card animate-fadeInUp" style={{ maxWidth: 480, width: "100%", padding: 40, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(16,185,129,0.15)", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Payment Successful!</h1>
          <p style={{ color: "var(--gray-500)", marginBottom: 32 }}>Thank you for using QuickFix. Your invoice has been sent to your registered email.</p>
          
          <div style={{ background: "var(--gray-50)", borderRadius: 16, padding: 24, marginBottom: 32, textAlign: "left", border: "1px dashed var(--gray-300)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ color: "var(--gray-500)" }}>Booking ID</span>
              <span style={{ fontWeight: 600, color: "var(--navy-900)" }}>#{bookingId}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ color: "var(--gray-500)" }}>Amount Paid</span>
              <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>₹599</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--gray-500)" }}>Payment Method</span>
              <span style={{ fontWeight: 600, color: "var(--navy-900)" }}>UPI</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Rate Technician</button>
            <Link href="/dashboard" className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>Return to Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", borderBottom: "1px solid var(--gray-200)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <h1 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)" }}>Checkout</h1>
          </div>
          <span className="badge badge-gray">Draft</span>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "32px 24px", maxWidth: 640 }}>
        <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 24 }}>Payment Summary</h2>

        <div className="card" style={{ overflow: "hidden", marginBottom: 24 }}>
          <div style={{ padding: 24, background: "var(--navy-900)", color: "white" }}>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Total Amount to Pay</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
              <span style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 40 }}>₹599</span>
            </div>
          </div>
          
          <div style={{ padding: 24 }}>
            <p style={{ fontWeight: 700, color: "var(--navy-900)", marginBottom: 16 }}>Bill Details</p>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ color: "var(--gray-600)" }}>Service Charge (MCB Replacement)</span>
              <span style={{ fontWeight: 500, color: "var(--navy-900)" }}>₹350</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ color: "var(--gray-600)" }}>Spare Parts (32A MCB)</span>
              <span style={{ fontWeight: 500, color: "var(--navy-900)" }}>₹250</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ color: "var(--gray-600)" }}>Convenience Fee</span>
              <span style={{ fontWeight: 500, color: "var(--navy-900)" }}>₹49</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, padding: "8px 12px", background: "rgba(16,185,129,0.1)", borderRadius: 8, color: "#059669" }}>
              <span style={{ fontWeight: 600 }}>Discount (FIRST50)</span>
              <span style={{ fontWeight: 600 }}>-₹50</span>
            </div>

            <div style={{ height: 1, borderTop: "1px dashed var(--gray-300)", margin: "16px 0" }} />
            
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: 16 }}>Total</span>
              <span style={{ fontWeight: 800, color: "var(--navy-900)", fontSize: 18 }}>₹599</span>
            </div>
          </div>
        </div>

        {/* Mock Payment Options */}
        <div className="card" style={{ padding: 24, marginBottom: 32 }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "var(--navy-900)", marginBottom: 16 }}>Select Payment Method</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ border: "2px solid var(--blue-500)", background: "rgba(37,99,235,0.05)", padding: 16, borderRadius: 12, display: "flex", alignItems: "center", gap: 16, cursor: "pointer" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", border: "6px solid var(--blue-500)", background: "white", flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>UPI</p>
                <p style={{ fontSize: 12, color: "var(--gray-500)" }}>Google Pay, PhonePe, Paytm</p>
              </div>
            </div>
            <div style={{ border: "1.5px solid var(--gray-200)", padding: 16, borderRadius: 12, display: "flex", alignItems: "center", gap: 16, cursor: "pointer" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid var(--gray-300)", flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>Credit / Debit Card</p>
                <p style={{ fontSize: 12, color: "var(--gray-500)" }}>Visa, Mastercard, RuPay</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <img src="https://razorpay.com/assets/razorpay-logo.svg" alt="Razorpay Secured" height="24" style={{ filter: "grayscale(1) opacity(0.5)" }} />
          </div>
        </div>

        <button className="btn-primary" style={{ width: "100%", justifyContent: "center", height: 56, fontSize: 16 }} onClick={handlePay} disabled={paying}>
          {paying ? "Processing Secure Payment..." : "Pay ₹599"}
        </button>
      </main>
    </div>
  );
}
