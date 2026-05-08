import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing — Transparent & Fair" };

const PLANS = [
  {
    name: "Basic Visit",
    price: "₹49",
    priceNote: "visit fee (waived on booking)",
    color: "var(--gray-700)",
    bg: "white",
    features: ["Inspection & diagnosis", "1-hour service window", "Standard technician", "Digital invoice", "30-day service warranty"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "QuickFix Pro",
    price: "₹0",
    priceNote: "no subscription needed",
    color: "#2563eb",
    bg: "linear-gradient(135deg, #0a1628, #1e3a6e)",
    features: ["Everything in Basic", "Priority technician matching", "Live GPS tracking", "In-app chat", "90-day warranty on parts", "AI diagnosis on every booking", "Emergency booking available"],
    cta: "Book Now",
    popular: true,
  },
  {
    name: "Annual Shield",
    price: "₹2,499",
    priceNote: "per year for 1 home",
    color: "#f97316",
    bg: "white",
    features: ["12 free service visits", "All appliances covered", "Priority queue always", "Dedicated support agent", "Free annual home inspection", "Unlimited emergency calls"],
    cta: "Subscribe",
    popular: false,
  },
];

const SERVICE_RATES = [
  { service: "Electrician – Basic Fault", min: "₹299", max: "₹599", note: "Switches, fuses, minor wiring" },
  { service: "Electrician – Advanced", min: "₹599", max: "₹2,000", note: "Panel, rewiring, meter" },
  { service: "Plumber – Basic", min: "₹249", max: "₹499", note: "Tap, faucet, minor leak" },
  { service: "Plumber – Advanced", min: "₹499", max: "₹2,500", note: "Pipe replacement, heater" },
  { service: "AC Service & Cleaning", min: "₹399", max: "₹699", note: "Per unit" },
  { service: "AC Gas Refill", min: "₹800", max: "₹1,500", note: "Includes refrigerant cost" },
  { service: "Carpentry – Repair", min: "₹349", max: "₹1,200", note: "Furniture, door, lock" },
  { service: "Appliance Repair", min: "₹299", max: "₹1,500", note: "Washing machine, fridge etc." },
  { service: "Painting – per sq ft", min: "₹8", max: "₹25", note: "Interior/exterior, type dependent" },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "linear-gradient(135deg, #0a1628, #1a2d6e)", paddingTop: 120, paddingBottom: 60, textAlign: "center" }}>
        <div className="container">
          <span className="badge" style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)", marginBottom: 16 }}>Transparent Pricing</span>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", color: "white", letterSpacing: "-0.03em", marginBottom: 16 }}>
            No Surprises. Ever.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, maxWidth: 520, margin: "0 auto" }}>
            You see the price estimate before booking. You pay only after the job is done.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 64 }}>
            {PLANS.map(plan => (
              <div key={plan.name} style={{
                borderRadius: 20, padding: 32, position: "relative", overflow: "hidden",
                background: plan.bg,
                border: plan.popular ? "none" : "1px solid var(--gray-200)",
                boxShadow: plan.popular ? "0 16px 48px rgba(37,99,235,0.2)" : "var(--shadow-sm)",
                transform: plan.popular ? "scale(1.03)" : "scale(1)"
              }}>
                {plan.popular && (
                  <div style={{ position: "absolute", top: 20, right: 20 }}>
                    <span className="badge badge-orange" style={{ fontSize: 11 }}>⭐ Most Popular</span>
                  </div>
                )}
                <h3 style={{ fontWeight: 700, fontSize: 16, color: plan.popular ? "rgba(255,255,255,0.6)" : "var(--gray-500)", marginBottom: 8 }}>{plan.name}</h3>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 40, color: plan.popular ? "white" : "var(--navy-900)" }}>{plan.price}</span>
                </div>
                <p style={{ color: plan.popular ? "rgba(255,255,255,0.5)" : "var(--gray-400)", fontSize: 13, marginBottom: 28 }}>{plan.priceNote}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.popular ? "rgba(16,185,129,0.2)" : "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke={plan.popular ? "#10b981" : "#2563eb"} strokeWidth="3" strokeLinecap="round"/></svg>
                      </div>
                      <span style={{ color: plan.popular ? "rgba(255,255,255,0.8)" : "var(--gray-600)", fontSize: 14 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/login" className={plan.popular ? "btn-orange" : "btn-outline"} style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Service rate table */}
          <div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 28, color: "var(--navy-900)", marginBottom: 8, textAlign: "center" }}>
              Service Rate Chart
            </h2>
            <p style={{ color: "var(--gray-500)", textAlign: "center", marginBottom: 32, fontSize: 15 }}>Indicative prices. Final price shown before booking confirmation.</p>
            <div className="card" style={{ overflow: "hidden", padding: 0 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "var(--navy-900)" }}>
                    <th style={{ padding: "14px 20px", textAlign: "left", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 13 }}>Service</th>
                    <th style={{ padding: "14px 20px", textAlign: "right", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 13 }}>Min</th>
                    <th style={{ padding: "14px 20px", textAlign: "right", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 13 }}>Max</th>
                    <th style={{ padding: "14px 20px", textAlign: "left", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 13 }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICE_RATES.map((r, i) => (
                    <tr key={r.service} style={{ background: i % 2 === 0 ? "white" : "var(--gray-50)", borderBottom: "1px solid var(--gray-100)" }}>
                      <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--navy-900)", fontSize: 14 }}>{r.service}</td>
                      <td style={{ padding: "14px 20px", textAlign: "right", color: "#059669", fontWeight: 700, fontSize: 14 }}>{r.min}</td>
                      <td style={{ padding: "14px 20px", textAlign: "right", color: "var(--orange-600)", fontWeight: 700, fontSize: 14 }}>{r.max}</td>
                      <td style={{ padding: "14px 20px", color: "var(--gray-500)", fontSize: 13 }}>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
