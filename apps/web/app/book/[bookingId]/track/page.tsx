"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function LiveTrackingPage() {
  const params = useParams();
  const bookingId = params.bookingId || "QF2847";
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi, I am on the way. Would reach in 15 mins.", sender: "tech", time: "14:02" },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { text: message, sender: "user", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute:"2-digit" }) }]);
    setMessage("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      {/* App Header */}
      <header style={{ background: "white", borderBottom: "1px solid var(--gray-200)", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/dashboard" style={{ textDecoration: "none", color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "var(--gray-100)" }}>
              ←
            </Link>
            <h1 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)" }}>Booking #{bookingId}</h1>
          </div>
          <span className="badge badge-green" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>Live</span>
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Map Embed Mock */}
        <div style={{ height: "40vh", minHeight: 300, background: "linear-gradient(135deg, #cbd5e1, #94a3b8)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          {/* Map Grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          {/* Mock Map Elements */}
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 140, height: 140, transform: "translate(-50%, -50%)", border: "2px dashed var(--blue-500)", borderRadius: "50%", opacity: 0.3 }} />
          
          <div style={{ position: "absolute", zIndex: 1, bottom: 20, left: 20, background: "white", padding: "10px 14px", borderRadius: 12, boxShadow: "var(--shadow-md)" }}>
            <p style={{ fontWeight: 700, color: "var(--navy-900)" }}>12 mins</p>
            <p style={{ color: "var(--gray-500)", fontSize: 12 }}>Technician ETA</p>
          </div>
          
          {/* Route Line Mock */}
          <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <path d="M100 100 Q 200 150 250 200" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" fill="none" className="animate-pulse-glow" />
          </svg>

          {/* Markers */}
          <div style={{ position: "absolute", top: 80, left: 80, fontSize: 32, transform: "translate(-50%, -100%)", zIndex: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}>🛵</div>
          <div style={{ position: "absolute", top: 200, left: 250, fontSize: 32, transform: "translate(-50%, -100%)", zIndex: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}>🏠</div>
        </div>

        {/* Info Panel */}
        <div style={{ flex: 1, background: "var(--gray-50)", padding: "24px 0", position: "relative" }}>
          <div className="container" style={{ maxWidth: 640 }}>
            {/* Technician Card */}
            <div className="card" style={{ padding: 20, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 20 }}>
                    SR
                  </div>
                  <div>
                    <h2 style={{ fontWeight: 700, fontSize: 17, color: "var(--navy-900)" }}>Suresh Reddy</h2>
                    <p style={{ color: "var(--gray-500)", fontSize: 13, marginBottom: 4 }}>Electrician • ★ 4.9</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span className="badge badge-blue">Vaccinated</span>
                      <span className="badge badge-gray">Verified</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a href="tel:+919876543210" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                    📞
                  </a>
                  <button onClick={() => setChatOpen(!chatOpen)} style={{ width: 44, height: 44, borderRadius: "50%", border: "none", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    💬
                  </button>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="card" style={{ padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 20 }}>Job Status</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { title: "Booking Confirmed", time: "13:45", active: true },
                  { title: "Technician Assigned", time: "13:50", active: true },
                  { title: "Technician En Route", time: "14:00", active: true, current: true },
                  { title: "Service Started", time: "Pending", active: false },
                  { title: "Job Completed", time: "Pending", active: false },
                ].map((s, i) => (
                  <div key={s.title} style={{ display: "flex", gap: 16, position: "relative" }}>
                    {i < 4 && <div style={{ position: "absolute", top: 20, left: 9, width: 2, height: "calc(100% + 4px)", background: s.active ? "var(--blue-500)" : "var(--gray-200)", zIndex: 0 }} />}
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: s.active ? "var(--blue-500)" : "white", border: `2px solid ${s.active ? "var(--blue-500)" : "var(--gray-300)"}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, marginTop: 2 }}>
                      {s.active && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />}
                    </div>
                    <div style={{ flex: 1, paddingBottom: 4 }}>
                      <p style={{ fontWeight: s.current ? 700 : 500, color: s.active ? "var(--navy-900)" : "var(--gray-400)", fontSize: 15 }}>{s.title}</p>
                      <p style={{ fontSize: 13, color: "var(--gray-400)" }}>{s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OTP Section Before Payment Mock */}
            <div className="card" style={{ padding: 24, textAlign: "center", border: "1.5px solid var(--blue-500)", background: "rgba(37,99,235,0.03)" }}>
              <p style={{ color: "var(--gray-600)", fontWeight: 500, marginBottom: 8 }}>Share this Start OTP with technician</p>
              <p style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 32, letterSpacing: "8px", color: "var(--navy-900)" }}>8421</p>
            </div>
            
            <div style={{ textAlign: "center", marginTop: 24 }}>
              {/* For demo purposes to navigate to next step */}
              <Link href={`/book/${bookingId}/payment`} className="btn-primary">
                Mock: Fast-forward to Payment →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Bot Overlay */}
      {chatOpen && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, top: 0, background: "rgba(0,0,0,0.5)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ background: "white", width: "100%", maxWidth: 480, height: "70vh", borderTopLeftRadius: 24, borderTopRightRadius: 24, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: 16, borderBottom: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontWeight: 700, color: "var(--navy-900)" }}>Suresh Reddy</p>
                <p style={{ fontSize: 12, color: "#10b981" }}>● Online</p>
              </div>
              <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "var(--gray-500)" }}>×</button>
            </div>
            <div style={{ flex: 1, padding: 16, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, background: "var(--gray-50)" }}>
              {messages.map((m, i) => (
                <div key={i} style={{ alignSelf: m.sender === "user" ? "flex-end" : "flex-start", maxWidth: "80%" }}>
                  <div style={{ padding: "10px 14px", borderRadius: 16, borderBottomRightRadius: m.sender === "user" ? 4 : 16, borderBottomLeftRadius: m.sender === "tech" ? 4 : 16, background: m.sender === "user" ? "var(--blue-500)" : "white", color: m.sender === "user" ? "white" : "var(--navy-900)", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", fontSize: 14 }}>
                    {m.text}
                  </div>
                  <p style={{ fontSize: 10, color: "var(--gray-400)", marginTop: 4, textAlign: m.sender === "user" ? "right" : "left" }}>{m.time}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} style={{ padding: 16, borderTop: "1px solid var(--gray-200)", background: "white", display: "flex", gap: 12 }}>
              <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message..." style={{ flex: 1, padding: "12px 16px", borderRadius: 100, border: "1px solid var(--gray-200)", outline: "none", fontSize: 14 }} />
              <button type="submit" disabled={!message.trim()} style={{ width: 44, height: 44, borderRadius: "50%", background: message.trim() ? "var(--blue-500)" : "var(--gray-200)", color: "white", border: "none", cursor: message.trim() ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                ↑
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
