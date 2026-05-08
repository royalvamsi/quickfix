import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About QuickFix" };

const TEAM = [
  { name: "Arjun Reddy", role: "Co-Founder & CEO", city: "Vijayawada", avatar: "AR", color: "#2563eb" },
  { name: "Priya Sharma", role: "Co-Founder & CTO", city: "Hyderabad", avatar: "PS", color: "#7c3aed" },
  { name: "Venkat Rao", role: "Head of Operations", city: "Visakhapatnam", avatar: "VR", color: "#f97316" },
  { name: "Deepa Krishna", role: "Head of Design", city: "Guntur", avatar: "DK", color: "#10b981" },
];

const VALUES = [
  { icon: "🛡️", title: "Trust First", desc: "Every technician is background-verified, skill-tested, and rated by real customers." },
  { icon: "💡", title: "Radical Transparency", desc: "You see the price before you confirm. No hidden charges, ever." },
  { icon: "⚡", title: "Speed Matters", desc: "Average technician dispatch in 15 minutes. Emergency service available 24/7." },
  { icon: "🤝", title: "Empower Locals", desc: "We give skilled workers in Tier-2 cities access to consistent, well-paying work." },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "linear-gradient(135deg,#0a1628,#1a2d6e)", paddingTop: 120, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <span className="badge" style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.3)", marginBottom: 16 }}>Our Story</span>
            <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
              Building Trust in<br />Home Repairs
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.8, maxWidth: 580 }}>
              QuickFix was born out of frustration. Our founders spent hours trying to find a trustworthy electrician in Vijayawada — and when they found one, there was no way to verify his credentials, track his arrival, or dispute an unfair bill. We built QuickFix to fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <span className="badge badge-blue" style={{ marginBottom: 12 }}>Our Mission</span>
              <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "var(--navy-900)", letterSpacing: "-0.02em", marginBottom: 16 }}>
                Making Quality Home Repair Accessible to All
              </h2>
              <p style={{ color: "var(--gray-600)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                India has millions of skilled technicians in smaller cities who lack access to consistent, well-paying work. At the same time, millions of homeowners can't find trustworthy help. QuickFix bridges this gap.
              </p>
              <p style={{ color: "var(--gray-600)", fontSize: 16, lineHeight: 1.8 }}>
                We use technology — AI diagnosis, live tracking, digital payments — to create a fair, efficient marketplace where both customers and professionals thrive.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Cities Served", value: "3+" },
                { label: "Technicians", value: "2,000+" },
                { label: "Jobs Completed", value: "85,000+" },
                { label: "Avg. Rating", value: "4.8★" },
              ].map(s => (
                <div key={s.label} style={{ background: "var(--gray-50)", borderRadius: 16, padding: "24px 20px", textAlign: "center", border: "1px solid var(--gray-200)" }}>
                  <p style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 32, color: "var(--navy-900)", marginBottom: 4 }}>{s.value}</p>
                  <p style={{ color: "var(--gray-500)", fontSize: 14 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "var(--navy-900)", letterSpacing: "-0.02em" }}>Our Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {VALUES.map(v => (
              <div key={v.title} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: 14, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,36px)", color: "var(--navy-900)", letterSpacing: "-0.02em" }}>The Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, maxWidth: 860, margin: "0 auto" }}>
            {TEAM.map(m => (
              <div key={m.name} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${m.color}, ${m.color}80)`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 22, margin: "0 auto 14px" }}>{m.avatar}</div>
                <p style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: 15 }}>{m.name}</p>
                <p style={{ color: "var(--blue-500)", fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{m.role}</p>
                <p style={{ color: "var(--gray-400)", fontSize: 12 }}>📍 {m.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
