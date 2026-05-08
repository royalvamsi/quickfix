import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QuickFix Admin",
  description: "QuickFix Platform Administration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h1 className="font-display" style={{ fontSize: 24, fontWeight: 800 }}>
                Quick<span style={{ color: "var(--orange-500)" }}>Fix</span> HQ
              </h1>
            </div>
            
            <nav style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <p style={{ fontSize: 11, color: "var(--gray-400)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", paddingLeft: 8, marginBottom: 4 }}>Overview</p>
              <Link href="/" style={{ padding: "10px 16px", borderRadius: 8, color: "white", textDecoration: "none", fontWeight: 600, background: "rgba(255,255,255,0.1)" }}>
                Dashboard
              </Link>
              <Link href="/analytics" style={{ padding: "10px 16px", borderRadius: 8, color: "var(--gray-300)", textDecoration: "none", fontWeight: 500 }}>
                Analytics & Map
              </Link>

              <p style={{ fontSize: 11, color: "var(--gray-400)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", paddingLeft: 8, marginTop: 16, marginBottom: 4 }}>Management</p>
              <Link href="/users" style={{ padding: "10px 16px", borderRadius: 8, color: "var(--gray-300)", textDecoration: "none", fontWeight: 500 }}>
                Customers
              </Link>
              <Link href="/technicians" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", borderRadius: 8, color: "var(--gray-300)", textDecoration: "none", fontWeight: 500 }}>
                <span>Technicians</span>
                <span className="badge" style={{ background: "var(--orange-500)", color: "white" }}>3 New</span>
              </Link>
              <Link href="/services" style={{ padding: "10px 16px", borderRadius: 8, color: "var(--gray-300)", textDecoration: "none", fontWeight: 500 }}>
                Services & Pricing
              </Link>

              <p style={{ fontSize: 11, color: "var(--gray-400)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", paddingLeft: 8, marginTop: 16, marginBottom: 4 }}>Support</p>
              <Link href="/complaints" style={{ padding: "10px 16px", borderRadius: 8, color: "var(--gray-300)", textDecoration: "none", fontWeight: 500 }}>
                Complaints
              </Link>
            </nav>

            <div style={{ padding: "24px 16px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--blue-500)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>A</div>
              <div>
                <p style={{ fontWeight: 600, fontSize: 14 }}>Admin User</p>
                <p style={{ fontSize: 12, color: "var(--gray-400)" }}>Superadmin</p>
              </div>
            </div>
          </aside>

          {/* Main Context */}
          <div className="main-content">
            <header className="topbar">
              <div style={{ display: "flex", gap: 16 }}>
                <input className="input" placeholder="Search booking ID, user..." style={{ width: 320, background: "var(--gray-50)" }} />
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <button style={{ border: "none", background: "none", position: "relative", cursor: "pointer", fontSize: 20 }}>
                  🔔
                  <span style={{ position: "absolute", top: 2, right: 0, width: 8, height: 8, background: "#ef4444", borderRadius: "50%" }} />
                </button>
              </div>
            </header>

            <main className="content-area">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
