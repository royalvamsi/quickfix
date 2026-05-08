"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const SERVICES = [
  { icon: "⚡", name: "Electrical", desc: "Wiring, switches, panels, fans & more", price: "₹299", color: "#f97316" },
  { icon: "🔧", name: "Plumbing", desc: "Leaks, clogs, water heaters & fixtures", price: "₹249", color: "#2563eb" },
  { icon: "❄️", name: "AC Repair", desc: "Servicing, gas refill, installation", price: "₹399", color: "#06b6d4" },
  { icon: "🪚", name: "Carpentry", desc: "Furniture repair, doors, wardrobes", price: "₹349", color: "#8b5cf6" },
  { icon: "📱", name: "Appliances", desc: "Washing machine, fridge, microwave", price: "₹299", color: "#ec4899" },
  { icon: "🎨", name: "Painting", desc: "Interior, exterior, texture painting", price: "₹999", color: "#10b981" },
];

const STEPS = [
  { step: "01", title: "Describe Your Issue", desc: "Type it out or upload a photo. Our AI analyses it instantly.", icon: "📸" },
  { step: "02", title: "Get AI Diagnosis", desc: "Receive cost estimates and a recommended fix plan in seconds.", icon: "🤖" },
  { step: "03", title: "Book a Technician", desc: "Choose instant booking or schedule at your convenience.", icon: "📅" },
  { step: "04", title: "Track & Pay", desc: "Live GPS tracking, in-app chat, secure payment after completion.", icon: "✅" },
];

const TESTIMONIALS = [
  { name: "Priya Reddy", city: "Vijayawada", role: "Homeowner", text: "Found an electrician in under 10 minutes. The live tracking feature is brilliant — I knew exactly when he'd arrive!", rating: 5, avatar: "PR" },
  { name: "Ravi Kumar", city: "Guntur", role: "Apartment Resident", text: "AC repaired same day, transparent pricing, no surprises. QuickFix has completely changed how I handle home repairs.", rating: 5, avatar: "RK" },
  { name: "Sunita Sharma", city: "Visakhapatnam", role: "Tenant", text: "The AI diagnosis accurately identified my plumbing issue and the cost was exactly as estimated. Highly recommended!", rating: 5, avatar: "SS" },
];

const STATS = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "2,000+", label: "Verified Technicians" },
  { value: "15 min", label: "Avg. Response Time" },
  { value: "4.8★", label: "Average Rating" },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* ─── HERO ─── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg, #0a1628 0%, #0f2048 45%, #1a2d6e 100%)",
        position: "relative", overflow: "hidden", paddingTop: 80
      }}>
        {/* Blobs */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 40, paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316", display: "inline-block" }} />
                <span style={{ color: "#fb923c", fontSize: 13, fontWeight: 600 }}>Now serving Vijayawada · Guntur · Visakhapatnam</span>
              </div>

              <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 58px)", color: "white", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Home Repairs,{" "}
                <span style={{ background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Fixed Fast
                </span>
                <br />With{" "}
                <span style={{ background: "linear-gradient(135deg, #fb923c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Verified Pros
                </span>
              </h1>

              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Upload a photo of your issue. Get AI-powered diagnosis. Book a trusted technician in minutes. Transparent pricing, live tracking, secure payment.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
                <Link href="/login" className="btn-orange" style={{ fontSize: 16, padding: "14px 28px" }}>
                  Book a Technician
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/how-it-works" className="btn-ghost">
                  How it works
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M10 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </Link>
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  { icon: "✓", text: "Background Verified Pros" },
                  { icon: "🔒", text: "Secure Payments" },
                  { icon: "📍", text: "Live Tracking" },
                ].map(b => (
                  <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#10b981", fontSize: 14, fontWeight: 700 }}>{b.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: 500 }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — app mockup */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div className="animate-float" style={{ width: 320, background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: 24, boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }}>
                {/* Mock card header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Active Booking</p>
                    <p style={{ color: "white", fontWeight: 700, fontSize: 16 }}>AC Repair #QF2847</p>
                  </div>
                  <span className="badge badge-green" style={{ background: "rgba(16,185,129,0.15)", color: "#10b981" }}>Live</span>
                </div>

                {/* Map placeholder */}
                <div style={{ height: 140, background: "linear-gradient(135deg, #1e3a6e, #2a4a8a)", borderRadius: 12, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                  <div style={{ textAlign: "center", zIndex: 1 }}>
                    <div style={{ fontSize: 32, marginBottom: 4 }}>🗺️</div>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Technician en route</p>
                    <p style={{ color: "#60a5fa", fontSize: 14, fontWeight: 600 }}>ETA: 12 minutes</p>
                  </div>
                </div>

                {/* Technician */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "white", fontSize: 16, flexShrink: 0 }}>MK</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "white", fontWeight: 600, fontSize: 14 }}>Mohammed Khan</p>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>AC Specialist · ⭐ 4.9 (312 jobs)</p>
                  </div>
                  <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.4)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>

                {/* Steps progress */}
                <div style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
                  {["Assigned", "En Route", "Arrived", "Done"].map((s, i) => (
                    <div key={s} style={{ flex: 1, textAlign: "center" }}>
                      <div style={{ height: 4, background: i < 2 ? "#2563eb" : "rgba(255,255,255,0.1)", borderRadius: 2, marginBottom: 6 }} />
                      <p style={{ fontSize: 10, color: i < 2 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)" }}>{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div style={{ position: "absolute", top: 20, left: -20, background: "white", borderRadius: 12, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 20 }}>⚡</span>
                <div>
                  <p style={{ fontSize: 11, color: "#64748b", fontWeight: 500 }}>Response Time</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#0a1628" }}>~15 min</p>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 30, right: -20, background: "white", borderRadius: 12, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 20 }}>⭐</span>
                <div>
                  <p style={{ fontSize: 11, color: "#64748b", fontWeight: 500 }}>Platform Rating</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#0a1628" }}>4.8 / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: "white", padding: "48px 0", borderBottom: "1px solid var(--gray-100)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
            {STATS.map(s => (
              <div key={s.label}>
                <p style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", color: "var(--navy-900)", letterSpacing: "-0.02em" }}>{s.value}</p>
                <p style={{ color: "var(--gray-500)", fontSize: 14, fontWeight: 500, marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-blue" style={{ marginBottom: 12 }}>Our Services</span>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,42px)", color: "var(--navy-900)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Everything Your Home Needs
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
              From a dripping tap to a full electrical rewire — our experts handle it all.
            </p>
          </div>

          <div className="grid-services">
            {SERVICES.map(svc => (
              <Link key={svc.name} href={`/services`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: 24, cursor: "pointer" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${svc.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: "var(--navy-900)", marginBottom: 6 }}>{svc.name}</h3>
                  <p style={{ color: "var(--gray-500)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{svc.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: svc.color, fontWeight: 700, fontSize: 15 }}>From {svc.price}</span>
                    <span style={{ color: svc.color, fontSize: 18 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-orange" style={{ marginBottom: 12 }}>Simple Process</span>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,42px)", color: "var(--navy-900)", letterSpacing: "-0.02em", marginBottom: 12 }}>
              From Problem to Solution in 4 Steps
            </h2>
          </div>

          <div className="grid-steps">
            {STEPS.map((step, i) => (
              <div key={step.step} style={{ position: "relative" }}>
                {i < STEPS.length - 1 && (
                  <div style={{ position: "absolute", top: 28, left: "calc(50% + 36px)", right: "-50%", height: 2, background: "linear-gradient(90deg, var(--blue-400), transparent)", zIndex: 0, display: "none" }} className="step-connector" />
                )}
                <div style={{ textAlign: "center", padding: "32px 24px", background: "var(--gray-50)", borderRadius: 20, border: "1px solid var(--gray-200)", transition: "all 0.3s", cursor: "default", position: "relative", zIndex: 1 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "white"; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--gray-50)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue-500), var(--blue-600))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 16px", boxShadow: "var(--shadow-blue)" }}>{step.icon}</div>
                  <div style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontSize: 12, fontWeight: 700, color: "var(--blue-500)", letterSpacing: "0.08em", marginBottom: 8 }}>STEP {step.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: "var(--navy-900)", marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ color: "var(--gray-500)", fontSize: 14, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI DIAGNOSIS BANNER ─── */}
      <section style={{ background: "linear-gradient(135deg, var(--navy-900), #1a2d6e)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <span className="badge" style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.3)", marginBottom: 16 }}>🤖 AI-Powered</span>
              <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.5vw,40px)", color: "white", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>
                Let AI Diagnose Your Issue Before You Book
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
                Take a photo or video of the problem. Our AI, powered by OpenAI Vision, analyses it and tells you exactly what's wrong, the likely cost, and which specialist you need.
              </p>
              <div style={{ display: "flex", gap: 16, flexDirection: "column", marginBottom: 32 }}>
                {["Instant fault identification", "Accurate cost estimation", "Part & skill recommendations", "No guesswork — ever"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/book" className="btn-orange">Try AI Diagnosis Free</Link>
            </div>

            {/* Mock AI card */}
            <div>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 28, backdropFilter: "blur(12px)" }}>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 16 }}>AI DIAGNOSIS RESULT</p>
                <div style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 12, padding: 16, marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 24 }}>🔍</span>
                    <div>
                      <p style={{ color: "white", fontWeight: 600, marginBottom: 6 }}>Faulty MCB / Circuit Breaker</p>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.6 }}>The tripped breaker indicates overloading. Likely needs replacement of a 32A MCB. No wiring damage detected in upload.</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Estimated Cost", value: "₹450–₹700" },
                    { label: "Est. Duration", value: "45–60 min" },
                    { label: "Specialist", value: "Electrician" },
                    { label: "Urgency", value: "High" },
                  ].map(item => (
                    <div key={item.label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "12px 14px" }}>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 4 }}>{item.label}</p>
                      <p style={{ color: "white", fontWeight: 700, fontSize: 15 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Book Electrician Now →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge badge-green" style={{ background: "rgba(16,185,129,0.1)", color: "#059669", marginBottom: 12 }}>Loved by Customers</span>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,40px)", color: "var(--navy-900)", letterSpacing: "-0.02em" }}>
              What Our Customers Say
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="card" style={{ padding: 28 }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {"★".repeat(t.rating).split("").map((s, i) => (
                    <span key={i} style={{ color: "#fbbf24", fontSize: 18 }}>{s}</span>
                  ))}
                </div>
                <p style={{ color: "var(--gray-700)", fontSize: 15, lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue-500), var(--navy-700))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 15 }}>{t.avatar}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: 14 }}>{t.name}</p>
                    <p style={{ color: "var(--gray-500)", fontSize: 12 }}>{t.role} · {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #7c3aed 100%)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,46px)", color: "white", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Ready to Fix It?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Join 50,000+ happy customers who trust QuickFix for all their home repair needs.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/login" className="btn-orange" style={{ fontSize: 16, padding: "14px 32px" }}>Book a Technician</Link>
            <Link href="/technician/register" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", fontSize: 16, backdropFilter: "blur(8px)", transition: "all 0.2s" }}>
              Join as a Technician
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
