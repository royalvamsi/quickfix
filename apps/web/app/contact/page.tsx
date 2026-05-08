import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "linear-gradient(135deg,#0a1628,#1a2d6e)", paddingTop: 120, paddingBottom: 60, textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,52px)", color: "white", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Get in Touch
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17 }}>We&apos;re here to help. Reach us through any channel below.</p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "flex-start" }}>
            {/* Info */}
            <div>
              <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 24, color: "var(--navy-900)", marginBottom: 24 }}>Contact Information</h2>
              {[
                { icon: "📞", label: "Phone / WhatsApp", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: "✉️", label: "Email", value: "support@quickfix.in", href: "mailto:support@quickfix.in" },
                { icon: "🕐", label: "Support Hours", value: "Mon–Sat, 8 AM – 8 PM" },
                { icon: "🚨", label: "Emergency", value: "24/7 urgent dispatch" },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--navy-900)", fontSize: 14, marginBottom: 2 }}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} style={{ color: "var(--blue-500)", fontSize: 15, textDecoration: "none" }}>{c.value}</a>
                      : <p style={{ color: "var(--gray-500)", fontSize: 15 }}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 32 }}>
                <p style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: 16, marginBottom: 12 }}>Our Service Cities</p>
                {["Vijayawada", "Guntur", "Visakhapatnam"].map(city => (
                  <div key={city} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ color: "#f97316" }}>📍</span>
                    <span style={{ color: "var(--gray-700)", fontSize: 15 }}>{city}, Andhra Pradesh</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card" style={{ padding: 36 }}>
              <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 22, color: "var(--navy-900)", marginBottom: 24 }}>Send us a Message</h2>
              <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: "var(--gray-700)", marginBottom: 6 }}>Name</label>
                    <input className="input" placeholder="Your full name" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: "var(--gray-700)", marginBottom: 6 }}>Phone</label>
                    <input className="input" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: "var(--gray-700)", marginBottom: 6 }}>Email</label>
                  <input className="input" type="email" placeholder="you@email.com" />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: "var(--gray-700)", marginBottom: 6 }}>Subject</label>
                  <select className="input" style={{ cursor: "pointer" }}>
                    <option value="">Select a topic</option>
                    <option>General Enquiry</option>
                    <option>Booking Issue</option>
                    <option>Technician Registration</option>
                    <option>Payment Problem</option>
                    <option>Complaint / Feedback</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: "var(--gray-700)", marginBottom: 6 }}>Message</label>
                  <textarea className="input" rows={4} placeholder="Describe your query in detail..." style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", width: "100%" }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
