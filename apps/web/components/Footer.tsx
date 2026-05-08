"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-900)", color: "rgba(255,255,255,0.6)", paddingTop: 64, paddingBottom: 40 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 20, color: "white" }}>
                Quick<span style={{ color: "#f97316" }}>Fix</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Connecting homeowners with verified local technicians in Tier-2 and Tier-3 Indian cities. Fast, transparent, and trustworthy.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["Vijayawada", "Guntur", "Visakhapatnam"].map(city => (
                <span key={city} className="badge badge-navy" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", fontSize: 11 }}>{city}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Services", links: ["Electrical", "Plumbing", "AC Repair", "Carpentry", "Appliances"] },
            { title: "Company", links: ["About", "How it Works", "Pricing", "Contact", "Help Center"] },
            { title: "For Pros", links: ["Register", "KYC Process", "Earnings", "Support"] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: "white", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(l => (
                  <li key={l}>
                    <Link href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13 }}>© 2026 QuickFix Technologies Pvt. Ltd. All rights reserved.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(l => (
              <Link key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
