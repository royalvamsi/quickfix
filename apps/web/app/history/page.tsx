"use client";
import Link from "next/link";

const BOOKINGS = [
  { id: "QF2847", service: "AC Gas Refill", start: "24 April 2026, 14:30", tech: "Mohammed Khan", price: "₹1,250", status: "Completed", icon: "❄️" },
  { id: "QF2109", service: "Switch Replacement", start: "15 April 2026, 10:00", tech: "Suresh Reddy", price: "₹450", status: "Completed", icon: "⚡" },
  { id: "QF1554", service: "Leaking Pipe Fix", start: "02 April 2026, 16:15", tech: "Kiran Kumar", price: "₹350", status: "Cancelled", icon: "🔧" },
];

export default function HistoryPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", borderBottom: "1px solid var(--gray-200)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 12, height: 60 }}>
          <Link href="/dashboard" style={{ textDecoration: "none", color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "var(--gray-100)" }}>←</Link>
          <h1 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)" }}>Booking History</h1>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "24px", maxWidth: 760 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", paddingBottom: 8 }}>
          <button className="badge" style={{ background: "var(--navy-900)", color: "white", padding: "8px 16px", border: "none" }}>All</button>
          <button className="badge" style={{ background: "white", color: "var(--gray-500)", border: "1px solid var(--gray-200)", padding: "8px 16px" }}>Completed</button>
          <button className="badge" style={{ background: "white", color: "var(--gray-500)", border: "1px solid var(--gray-200)", padding: "8px 16px" }}>Cancelled</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {BOOKINGS.map(b => (
            <div key={b.id} className="card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--gray-100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{b.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)" }}>{b.service}</h3>
                    <p style={{ color: "var(--gray-500)", fontSize: 13 }}>{b.start}</p>
                  </div>
                </div>
                <span className={`badge ${b.status === "Completed" ? "badge-green" : "badge-gray"}`}>{b.status}</span>
              </div>
              
              <div style={{ padding: "12px", background: "var(--gray-50)", borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontSize: 11, color: "var(--gray-400)", marginBottom: 2 }}>TECHNICIAN</p>
                  <p style={{ fontWeight: 600, fontSize: 13, color: "var(--navy-900)" }}>{b.tech}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 11, color: "var(--gray-400)", marginBottom: 2 }}>TOTAL</p>
                  <p style={{ fontWeight: 700, fontSize: 14, color: "var(--navy-900)" }}>{b.price}</p>
                </div>
              </div>

              {b.status === "Completed" && (
                <div style={{ display: "flex", gap: 12 }}>
                  <button className="btn-outline" style={{ flex: 1, padding: "8px", fontSize: 13, justifyContent: "center" }}>Download Invoice</button>
                  <button className="btn-outline" style={{ flex: 1, padding: "8px", fontSize: 13, justifyContent: "center", borderColor: "var(--gray-200)", color: "var(--navy-900)" }}>View Details</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
