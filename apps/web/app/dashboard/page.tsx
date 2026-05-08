"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SERVICES = [
  { id: "s1", name: "Electrician", icon: "⚡", bg: "#f9731615", color: "#f97316" },
  { id: "s2", name: "Plumber", icon: "🔧", bg: "#2563eb15", color: "#2563eb" },
  { id: "s3", name: "AC Repair", icon: "❄️", bg: "#06b6d415", color: "#06b6d4" },
  { id: "s4", name: "Carpentry", icon: "🪚", bg: "#8b5cf615", color: "#8b5cf6" },
  { id: "s5", name: "Appliances", icon: "📱", bg: "#ec489915", color: "#ec4899" },
  { id: "s6", name: "Painting", icon: "🎨", bg: "#10b98115", color: "#10b981" },
];

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Simple mock auth guard
    if (!localStorage.getItem("qf_token")) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      {/* App Header */}
      <header style={{ background: "white", borderBottom: "1px solid var(--gray-200)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 20, color: "var(--navy-900)" }}>QuickFix</span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--gray-100)", padding: "8px 12px", borderRadius: 100 }}>
              <span>📍</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--navy-900)" }}>Vijayawada</span>
            </div>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--blue-500)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
              SJ
            </div>
          </div>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "32px 24px" }}>
        {/* Welcome */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 4 }}>Hi, Sanjay 👋</h1>
          <p style={{ color: "var(--gray-500)", fontSize: 15 }}>What do you need help with today?</p>
        </div>

        {/* Global Search / AI Entry */}
        <div className="card" style={{ padding: 24, marginBottom: 40, background: "linear-gradient(135deg, white, var(--gray-50))" }}>
          <h2 style={{ fontWeight: 700, fontSize: 17, color: "var(--navy-900)", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span>🤖</span> Don't know what to book? Let AI help.
          </h2>
          <div style={{ display: "flex", gap: 12 }}>
            <input className="input" placeholder="E.g., 'My ceiling fan is making a noise' or 'AC not cooling'" style={{ flex: 1 }} />
            <Link href="/book" className="btn-primary">Analyze</Link>
          </div>
        </div>

        {/* Service Grid */}
        <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 20, color: "var(--navy-900)", marginBottom: 20 }}>Categories</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 16, marginBottom: 48 }}>
          {SERVICES.map(s => (
            <Link key={s.id} href="/book" style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: 20, textAlign: "center", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--navy-900)" }}>{s.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Active Booking (Mock logic for presentation) */}
        <div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 20, color: "var(--navy-900)", marginBottom: 20 }}>Recent Bookings</h2>
          <div className="card" style={{ padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>✅</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)" }}>Plumbing Service</h3>
                  <span className="badge badge-gray">Completed</span>
                </div>
                <p style={{ color: "var(--gray-500)", fontSize: 13 }}>Fix leaking sink • Yesterday, 14:30 • ₹350</p>
              </div>
            </div>
            <div>
              <Link href="/book/history" className="btn-outline" style={{ padding: "8px 16px", fontSize: 13 }}>View Invoice</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
