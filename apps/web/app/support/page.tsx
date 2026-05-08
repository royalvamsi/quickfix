"use client";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", borderBottom: "1px solid var(--gray-200)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 12, height: 60 }}>
          <Link href="/dashboard" style={{ textDecoration: "none", color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "var(--gray-100)" }}>←</Link>
          <h1 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)" }}>Help & Support</h1>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "24px", maxWidth: 640 }}>
        <div className="card" style={{ padding: 24, marginBottom: 24 }}>
          <h2 style={{ fontWeight: 700, fontSize: 18, color: "var(--navy-900)", marginBottom: 16 }}>Need immediate help?</h2>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="tel:+919876543210" className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>Call Support</a>
            <button className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>Chat with us</button>
          </div>
        </div>

        <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 18, color: "var(--navy-900)", marginBottom: 16 }}>Raise a Ticket</h2>
        <div className="card" style={{ padding: 24, marginBottom: 32 }}>
          <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Related Booking (Optional)</label>
              <select className="input" style={{ cursor: "pointer" }}>
                <option value="">Select a recent booking</option>
                <option>QF2847 - AC Gas Refill - Completed</option>
                <option>QF2109 - Switch Replacement - Completed</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Issue Type</label>
              <select className="input" style={{ cursor: "pointer" }}>
                <option>Quality of service</option>
                <option>Technician behavior</option>
                <option>Payment / Pricing issue</option>
                <option>App bug / Technical issue</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Description</label>
              <textarea className="input" rows={4} placeholder="Please describe your issue in detail..." />
            </div>
            <button type="button" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Submit Ticket</button>
          </form>
        </div>

        <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 18, color: "var(--navy-900)", marginBottom: 16 }}>My Tickets</h2>
        <div className="card" style={{ padding: 24, textAlign: "center" }}>
          <p style={{ color: "var(--gray-500)", fontSize: 14 }}>You have no open tickets.</p>
        </div>
      </main>
    </div>
  );
}
