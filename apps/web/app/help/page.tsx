"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQS = [
  { q: "How do I book a technician?", a: "Simply select your service category, upload a photo of the issue (optional), get an AI-powered diagnosis and quote, then confirm the booking. The whole process takes under 3 minutes." },
  { q: "Are the technicians background verified?", a: "Yes! Every technician on QuickFix goes through identity verification, skill assessment, and reference checks. We also verify their Aadhaar and relevant trade certificates." },
  { q: "What if the technician doesn't show up?", a: "If a confirmed technician cancels or doesn't arrive, we immediately dispatch another available professional and apply a ₹100 credit to your account." },
  { q: "How does AI Diagnosis work?", a: "Upload a photo or video of the problem. Our AI, powered by OpenAI Vision, analyses it, identifies the likely issue, and provides a cost estimate. It works on electrical, plumbing, AC, and appliance problems." },
  { q: "What payment methods are accepted?", a: "We accept UPI (GPay, PhonePe, Paytm), debit/credit cards, and net banking through Razorpay. Cash is not accepted. Payment happens only after service completion." },
  { q: "Can I schedule a booking in advance?", a: "Yes, you can schedule bookings up to 7 days in advance. Choose any available 2-hour slot that works for you." },
  { q: "What is the warranty on repairs?", a: "All repairs come with a minimum 30-day quality warranty. If the issue recurs within the warranty period, we send a technician back at no extra charge." },
  { q: "How do I become a technician on QuickFix?", a: "Visit /technician/register, complete your profile, upload documents for KYC verification, and complete a skill assessment. Approval typically takes 2-3 business days." },
  { q: "Is QuickFix available 24/7?", a: "The app is always available for booking. Emergency services are dispatched 24/7. Scheduled bookings are available 7 AM – 9 PM." },
  { q: "How are technician prices set?", a: "Prices are set by our platform based on service type, complexity, parts required, and distance. Technicians cannot charge above the quoted amount." },
];

export default function HelpPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main>
      <Navbar />

      <section style={{ background: "linear-gradient(135deg,#0a1628,#1a2d6e)", paddingTop: 120, paddingBottom: 60, textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", color: "white", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Help Center
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 32 }}>Find quick answers to common questions.</p>
          <div style={{ maxWidth: 500, margin: "0 auto", position: "relative" }}>
            <input className="input" placeholder="Search help articles..." style={{ paddingLeft: 44, background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.2)", color: "white", borderRadius: 12 }} />
            <svg style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 24, color: "var(--navy-900)", marginBottom: 24 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: "hidden", cursor: "pointer" }} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px" }}>
                  <h3 style={{ fontWeight: 600, fontSize: 15, color: "var(--navy-900)" }}>{faq.q}</h3>
                  <svg style={{ flexShrink: 0, marginLeft: 12, transition: "transform 0.2s", transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)" }} width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                {openIdx === i && (
                  <div style={{ padding: "0 24px 18px", borderTop: "1px solid var(--gray-100)" }}>
                    <p style={{ color: "var(--gray-600)", fontSize: 14, lineHeight: 1.75, paddingTop: 14 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 28, textAlign: "center", marginTop: 40 }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "var(--navy-900)", marginBottom: 8 }}>Still need help?</p>
            <p style={{ color: "var(--gray-500)", fontSize: 14, marginBottom: 20 }}>Our support team is available Mon–Sat, 8 AM – 8 PM</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <a href="tel:+919876543210" className="btn-primary">📞 Call Us</a>
              <a href="mailto:support@quickfix.in" className="btn-outline">✉️ Email Support</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
