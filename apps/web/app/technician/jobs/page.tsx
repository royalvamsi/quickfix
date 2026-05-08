"use client";
import Link from "next/link";
import { useState } from "react";

const JOBS = [
  { id: "QF2849", service: "MCB Replacement", address: "Flat 201, Lotus Apts, Patamata", distance: "2.4 km", estFee: "₹350", urgency: "High", time: "Instant" },
  { id: "QF2850", service: "Fan Installation", address: "Plot 42, Auto Nagar", distance: "4.1 km", estFee: "₹250", urgency: "Normal", time: "Today, 18:00" },
];

export default function TechJobsPage() {
  const [accepted, setAccepted] = useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", padding: "16px 24px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid var(--gray-200)" }}>
        <Link href="/technician/dashboard" style={{ textDecoration: "none", color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "var(--gray-100)" }}>←</Link>
        <h1 style={{ fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>New Job Requests</h1>
      </header>

      <main className="container" style={{ flex: 1, padding: "24px", maxWidth: 640 }}>
        {accepted && (
          <div style={{ background: "linear-gradient(135deg, #10b981, #059669)", color: "white", padding: 20, borderRadius: 12, marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 12px rgba(16,185,129,0.3)" }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: 16 }}>Job Accepted!</p>
              <p style={{ opacity: 0.9, fontSize: 13 }}>Please navigate to the location.</p>
            </div>
            <Link href={`/technician/jobs/${accepted}`} style={{ background: "white", color: "#059669", padding: "8px 16px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>Go to Job</Link>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {JOBS.map(j => (
            <div key={j.id} className="card" style={{ padding: 20, opacity: accepted === j.id ? 0.5 : 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>{j.service}</h2>
                    {j.urgency === "High" && <span className="badge badge-red">Urgent</span>}
                  </div>
                  <p style={{ color: "var(--gray-500)", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "var(--blue-500)" }}>📍</span> {j.distance} away
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 2 }}>Est. Fee</p>
                  <p style={{ fontWeight: 800, fontSize: 18, color: "var(--navy-900)" }}>{j.estFee}</p>
                </div>
              </div>

              <div style={{ background: "var(--gray-50)", padding: 12, borderRadius: 8, marginBottom: 20 }}>
                <p style={{ color: "var(--navy-900)", fontSize: 14 }}>{j.address}</p>
                <p style={{ color: "var(--gray-500)", fontSize: 13, marginTop: 4 }}>Scheduled: {j.time}</p>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn-outline" style={{ flex: 1, justifyContent: "center", color: "var(--gray-500)", borderColor: "var(--gray-300)" }}>Decline</button>
                <button className="btn-primary" style={{ flex: 2, justifyContent: "center" }} onClick={() => setAccepted(j.id)}>Accept Job ✓</button>
              </div>
            </div>
          ))}
        </div>
        
        {(!JOBS.length || (accepted && JOBS.length === 1)) && (
          <div style={{ padding: 48, textAlign: "center" }}>
             <p style={{ fontSize: 32, marginBottom: 12 }}>📡</p>
             <p style={{ color: "var(--gray-500)", fontSize: 15 }}>Scanning for nearby jobs...</p>
          </div>
        )}
      </main>
    </div>
  );
}
