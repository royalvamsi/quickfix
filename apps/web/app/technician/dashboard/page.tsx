"use client";
import Link from "next/link";
import { useState } from "react";

export default function TechDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "var(--navy-900)", color: "white", padding: "16px 20px" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>QuickFix Pro</p>
            <h1 style={{ fontWeight: 700, fontSize: 18 }}>Suresh Reddy (Electrician)</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: isOnline ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.1)", padding: "8px 16px", borderRadius: 100, border: `1px solid ${isOnline ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.2)"}` }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: isOnline ? "#10b981" : "var(--gray-400)" }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: isOnline ? "#10b981" : "white" }}>{isOnline ? "Online" : "Offline"}</span>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer", marginLeft: 8 }}>
              <div style={{ width: 40, height: 24, background: isOnline ? "#10b981" : "var(--gray-500)", borderRadius: 100, position: "relative", transition: "all 0.3s" }}>
                <div style={{ position: "absolute", top: 2, left: isOnline ? 18 : 2, width: 20, height: 20, borderRadius: "50%", background: "white", transition: "all 0.3s", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
              </div>
              <input type="checkbox" checked={isOnline} onChange={() => setIsOnline(!isOnline)} style={{ display: "none" }} />
            </label>
          </div>
        </div>
      </header>

      {/* Nav */}
      <div style={{ background: "white", borderBottom: "1px solid var(--gray-200)" }}>
        <div className="container" style={{ display: "flex", gap: 32, overflowX: "auto" }}>
          <Link href="/technician/dashboard" style={{ padding: "16px 0", color: "var(--blue-500)", fontWeight: 600, borderBottom: "2px solid var(--blue-500)", textDecoration: "none", whiteSpace: "nowrap" }}>Dashboard</Link>
          <Link href="/technician/jobs" style={{ padding: "16px 0", color: "var(--gray-500)", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>Job Requests</Link>
          <Link href="/technician/earnings" style={{ padding: "16px 0", color: "var(--gray-500)", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>Earnings</Link>
          <Link href="/technician/reviews" style={{ padding: "16px 0", color: "var(--gray-500)", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>Reviews</Link>
        </div>
      </div>

      <main className="container" style={{ flex: 1, padding: "24px", maxWidth: 800 }}>
        {/* KPI Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div className="card" style={{ padding: 20 }}>
            <p style={{ color: "var(--gray-500)", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>TODAY'S EARNINGS</p>
            <p style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 32, color: "var(--navy-900)" }}>₹1,250</p>
            <p style={{ color: "#059669", fontSize: 12, fontWeight: 600 }}>↑ 12% vs yesterday</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <p style={{ color: "var(--gray-500)", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>OVERALL RATING</p>
            <p style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 32, color: "var(--navy-900)" }}>4.9<span style={{ fontSize: 24, color: "#fbbf24", marginLeft: 4 }}>★</span></p>
            <p style={{ color: "var(--gray-500)", fontSize: 12, fontWeight: 500 }}>Based on 42 reviews</p>
          </div>
        </div>

        {/* Active Job Alert */}
        {isOnline && (
          <div style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)", borderRadius: 16, padding: 24, color: "white", marginBottom: 32, boxShadow: "var(--shadow-blue)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span className="badge" style={{ background: "rgba(255,255,255,0.2)", color: "white", border: "none" }}>Current Job</span>
              <span style={{ fontSize: 14, fontWeight: 600, opacity: 0.9 }}>ID: QF2847</span>
            </div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 4 }}>AC Gas Refill</h2>
            <p style={{ fontSize: 15, opacity: 0.8, marginBottom: 20 }}>Benz Circle, Vijayawada • Customer tracking you</p>
            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/technician/jobs/QF2847" style={{ background: "white", color: "var(--blue-600)", padding: "10px 20px", borderRadius: 8, fontWeight: 600, textDecoration: "none", flex: 1, textAlign: "center" }}>View Job Detail →</Link>
            </div>
          </div>
        )}

        {/* Recent Performance */}
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>This Week</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, textAlign: "center" }}>
            <div style={{ padding: 16, background: "var(--gray-50)", borderRadius: 12 }}>
              <p style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 4 }}>Jobs Done</p>
              <p style={{ fontWeight: 700, fontSize: 20, color: "var(--navy-900)" }}>18</p>
            </div>
            <div style={{ padding: 16, background: "var(--gray-50)", borderRadius: 12 }}>
              <p style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 4 }}>Acceptance</p>
              <p style={{ fontWeight: 700, fontSize: 20, color: "var(--navy-900)" }}>94%</p>
            </div>
            <div style={{ padding: 16, background: "var(--gray-50)", borderRadius: 12 }}>
              <p style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 4 }}>Total Time</p>
              <p style={{ fontWeight: 700, fontSize: 20, color: "var(--navy-900)" }}>22 hrs</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
