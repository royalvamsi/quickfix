import Link from "next/link";

const REVIEWS = [
  { id: 1, customer: "Ravi K.", rating: 5, time: "Yesterday", comment: "Suresh arrived on time and fixed the AC gas leak quickly. Very professional." },
  { id: 2, customer: "Sunita M.", rating: 4, time: "3 days ago", comment: "Good work on the fan installation. Left the area clean after." },
  { id: 3, customer: "Anil P.", rating: 5, time: "1 week ago", comment: "Identified the MCB issue properly via the app and came prepared with the part. Quick service." },
];

export default function TechReviewsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", padding: "16px 24px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid var(--gray-200)" }}>
         <Link href="/technician/dashboard" style={{ textDecoration: "none", color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "var(--gray-100)" }}>←</Link>
         <h1 style={{ fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>Customer Reviews</h1>
      </header>

      <main className="container" style={{ flex: 1, padding: "24px", maxWidth: 640 }}>
        <div className="card" style={{ padding: 32, textAlign: "center", marginBottom: 32, background: "linear-gradient(135deg, white, var(--gray-50))" }}>
          <p style={{ fontWeight: 600, color: "var(--gray-600)", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: 12, marginBottom: 8 }}>Overall Platform Rating</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 48, color: "var(--navy-900)" }}>4.9</span>
            <span style={{ fontSize: 36, color: "#fbbf24" }}>★</span>
          </div>
          <p style={{ color: "var(--gray-500)", fontSize: 14 }}>Based on 42 verified customer reviews</p>
        </div>

        <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 18, color: "var(--navy-900)", marginBottom: 16 }}>Recent Feedback</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {REVIEWS.map(r => (
            <div key={r.id} className="card" style={{ padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--navy-900)" }}>{r.customer}</p>
                  <p style={{ fontSize: 12, color: "var(--gray-500)" }}>{r.time}</p>
                </div>
                <div style={{ display: "flex", gap: 2 }}>
                  {"★".repeat(r.rating).split("").map((s, idx) => (
                    <span key={idx} style={{ color: "#fbbf24", fontSize: 16 }}>{s}</span>
                  ))}
                  {"★".repeat(5 - r.rating).split("").map((s, idx) => (
                    <span key={`empty-${idx}`} style={{ color: "var(--gray-200)", fontSize: 16 }}>{s}</span>
                  ))}
                </div>
              </div>
              <p style={{ color: "var(--gray-600)", fontSize: 14, lineHeight: 1.6 }}>"{r.comment}"</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
