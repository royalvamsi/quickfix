import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "How QuickFix Works" };

const STEPS = [
  {
    n: "01", icon: "📱", title: "Create Your Account",
    desc: "Sign up with your phone number using OTP or Google. Takes under 60 seconds.",
    detail: "No passwords to remember. Just your phone number or Google account. Your profile is pre-filled and you can add your home address right away.",
    color: "#2563eb"
  },
  {
    n: "02", icon: "📸", title: "Describe or Upload Your Issue",
    desc: "Type what's wrong or take a photo/video. Our AI will do the rest.",
    detail: "Our AI Vision system, powered by OpenAI, analyses your uploaded media and identifies the fault, likely causes, and parts needed — all within seconds.",
    color: "#7c3aed"
  },
  {
    n: "03", icon: "🤖", title: "Receive AI Diagnosis & Quote",
    desc: "Get a transparent cost estimate and recommended service type before booking.",
    detail: "No more surprise bills. We show you the price range upfront based on technician rates, parts cost, and travel time. You approve before any work starts.",
    color: "#f97316"
  },
  {
    n: "04", icon: "📅", title: "Choose Your Slot",
    desc: "Book instantly or schedule up to 7 days ahead. Emergency slots available.",
    detail: "Need someone right now? Choose 'Instant Booking' and a technician is dispatched immediately. Planning ahead? Schedule any time in the next week.",
    color: "#06b6d4"
  },
  {
    n: "05", icon: "📍", title: "Track Your Technician Live",
    desc: "Watch your technician navigate to you in real time. Chat directly in-app.",
    detail: "Live GPS tracking powered by Google Maps Platform shows exactly where your technician is and gives an accurate ETA. Chat if you need to share more details.",
    color: "#10b981"
  },
  {
    n: "06", icon: "✅", title: "Service & Secure Payment",
    desc: "Technician completes the job. Pay only after you're satisfied.",
    detail: "Payment is collected only after job completion. Pay via UPI, card, or net banking through our Razorpay integration. Get a digital invoice instantly.",
    color: "#ec4899"
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "linear-gradient(135deg, #0a1628, #1a2d6e)", paddingTop: 120, paddingBottom: 60, textAlign: "center" }}>
        <div className="container">
          <span className="badge" style={{ background: "rgba(37,99,235,0.2)", color: "#60a5fa", border: "1px solid rgba(60,160,250,0.3)", marginBottom: 16 }}>Simple Process</span>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", color: "white", letterSpacing: "-0.03em", marginBottom: 16 }}>
            How QuickFix Works
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, maxWidth: 520, margin: "0 auto" }}>
            From broken to fixed in 6 simple steps. Designed for ease, built on trust.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
            {STEPS.map((step, i) => (
              <div key={step.n} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                {/* Timeline */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${step.color}15`, border: `2px solid ${step.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>
                    {step.icon}
                  </div>
                  {i < STEPS.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 32, background: "linear-gradient(to bottom, var(--gray-200), transparent)", marginTop: 8 }} />}
                </div>
                {/* Content */}
                <div style={{ flex: 1, paddingBottom: 24 }}>
                  <div style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontSize: 12, fontWeight: 700, color: step.color, letterSpacing: "0.1em", marginBottom: 6 }}>STEP {step.n}</div>
                  <h2 style={{ fontWeight: 700, fontSize: 22, color: "var(--navy-900)", marginBottom: 8 }}>{step.title}</h2>
                  <p style={{ color: "var(--gray-600)", fontSize: 16, fontWeight: 500, marginBottom: 10 }}>{step.desc}</p>
                  <p style={{ color: "var(--gray-500)", fontSize: 14, lineHeight: 1.7, background: "var(--gray-50)", padding: "14px 18px", borderRadius: 10, borderLeft: `3px solid ${step.color}` }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
