import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home Repair Services" };

const CATEGORIES = [
  {
    icon: "⚡", name: "Electrical", color: "#f97316",
    services: ["Switch & Socket Repair", "Fan Installation & Repair", "MCB / Fuse Box", "Wiring & Rewiring", "LED Light Installation", "Inverter & UPS Setup"],
    price: "From ₹299", time: "30–90 min"
  },
  {
    icon: "🔧", name: "Plumbing", color: "#2563eb",
    services: ["Tap & Faucet Repair", "Clogged Drain / Pipe", "Water Heater Service", "Toilet Repair", "Pipe Leakage Fix", "Water Tank Cleaning"],
    price: "From ₹249", time: "45–120 min"
  },
  {
    icon: "❄️", name: "AC Repair", color: "#06b6d4",
    services: ["AC Service & Cleaning", "Gas Refilling", "AC Installation", "Cooling Problem Fix", "AC PCB Repair", "Remote Replacement"],
    price: "From ₹399", time: "60–180 min"
  },
  {
    icon: "🪚", name: "Carpentry", color: "#8b5cf6",
    services: ["Furniture Repair", "Door Lock Fix", "Wardrobe Installation", "Bed Assembly", "Wooden Flooring", "Cabinet Making"],
    price: "From ₹349", time: "60–240 min"
  },
  {
    icon: "📱", name: "Appliance Repair", color: "#ec4899",
    services: ["Washing Machine", "Refrigerator Repair", "Microwave Oven", "Dishwasher Fix", "Water Purifier", "Geyser Repair"],
    price: "From ₹299", time: "45–120 min"
  },
  {
    icon: "🎨", name: "Painting", color: "#10b981",
    services: ["Interior Painting", "Exterior Painting", "Texture Painting", "Waterproofing", "Wall Putty", "Polish & Varnish"],
    price: "From ₹999", time: "Per day"
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "linear-gradient(135deg, #0a1628, #1a2d6e)", paddingTop: 120, paddingBottom: 60, textAlign: "center" }}>
        <div className="container">
          <span className="badge" style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.3)", marginBottom: 16 }}>All Services</span>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", color: "white", letterSpacing: "-0.03em", marginBottom: 16 }}>
            Professional Home Repair Services
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}>
            Verified technicians for every home need. Transparent pricing, guaranteed quality.
          </p>
          <Link href="/book" className="btn-orange" style={{ fontSize: 15 }}>Book Now</Link>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
            {CATEGORIES.map(cat => (
              <div key={cat.name} className="card" style={{ padding: 28, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)` }} />
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${cat.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{cat.icon}</div>
                  <div>
                    <h2 style={{ fontWeight: 700, fontSize: 20, color: "var(--navy-900)" }}>{cat.name}</h2>
                    <p style={{ color: cat.color, fontWeight: 600, fontSize: 13 }}>{cat.price} · {cat.time}</p>
                  </div>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {cat.services.map(s => (
                    <li key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke={cat.color} strokeWidth="2.5" strokeLinecap="round"/></svg>
                      <span style={{ color: "var(--gray-600)", fontSize: 14 }}>{s}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="btn-primary" style={{ width: "100%", justifyContent: "center", background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)`, boxShadow: `0 4px 16px ${cat.color}40` }}>
                  Book {cat.name} Expert
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
