"use client";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", borderBottom: "1px solid var(--gray-200)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 12, height: 60 }}>
          <Link href="/dashboard" style={{ textDecoration: "none", color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "var(--gray-100)" }}>←</Link>
          <h1 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)" }}>Profile</h1>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "24px", maxWidth: 640 }}>
        <div className="card" style={{ padding: "32px 24px", textAlign: "center", marginBottom: 24 }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--blue-500)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 28, fontWeight: 700 }}>
            SJ
          </div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 20, color: "var(--navy-900)" }}>Sanjay Reddy</h2>
          <p style={{ color: "var(--gray-500)", fontSize: 14 }}>+91 98765 43210</p>
        </div>

        <div className="card" style={{ marginBottom: 24, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--gray-100)" }}>
            <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Saved Addresses</h3>
          </div>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, paddingBottom: 16, borderBottom: "1px solid var(--gray-100)", marginBottom: 16 }}>
              <span style={{ fontSize: 24 }}>🏠</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ fontWeight: 600, color: "var(--navy-900)", marginBottom: 4 }}>Home</h4>
                  <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Edit</button>
                </div>
                <p style={{ color: "var(--gray-500)", fontSize: 13, lineHeight: 1.5 }}>Flat 402, Sai Ram Residency, Benz Circle<br/>Vijayawada, Andhra Pradesh 520010</p>
              </div>
            </div>
            <button className="btn-outline" style={{ width: "100%", justifyContent: "center", borderStyle: "dashed" }}>+ Add New Address</button>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 32, overflow: "hidden" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--gray-100)" }}>
            <h3 style={{ fontWeight: 600, fontSize: 14, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Settings</h3>
          </div>
          <div>
            {[
              { label: "Notifications", icon: "🔔" },
              { label: "Payment Methods", icon: "💳" },
              { label: "Language", icon: "🌐", value: "English" },
            ].map((item, i) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: i < 2 ? "1px solid var(--gray-100)" : "none", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontWeight: 500, color: "var(--navy-900)" }}>{item.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {item.value && <span style={{ color: "var(--gray-500)", fontSize: 13 }}>{item.value}</span>}
                  <span style={{ color: "var(--gray-400)" }}>›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-outline" style={{ width: "100%", justifyContent: "center", color: "#dc2626", borderColor: "#dc2626" }} onClick={() => { localStorage.clear(); window.location.href = '/login'; }}>
          Log Out
        </button>
      </main>
    </div>
  );
}
