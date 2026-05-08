import Link from "next/link";
import Navbar from "@/components/Navbar"; // Replace with Tech specific header in production

const TRANSACTIONS = [
  { id: "TXN-9012", date: "Today, 14:45", desc: "AC Gas Refill (QF2847)", amount: "+₹450" },
  { id: "TXN-9011", date: "Yesterday, 18:20", desc: "Fan Installation (QF2831)", amount: "+₹200" },
  { id: "TXN-9009", date: "24 April 2026", desc: "Platform Fee Deduction", amount: "-₹50" },
  { id: "TXN-9008", date: "23 April 2026", desc: "Weekly Payout to Bank ending in 1234", amount: "-₹3,400" },
];

export default function EarningsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", padding: "16px 24px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid var(--gray-200)" }}>
         <Link href="/technician/dashboard" style={{ textDecoration: "none", color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "var(--gray-100)" }}>←</Link>
         <h1 style={{ fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>Earnings & Payouts</h1>
      </header>

      <main className="container" style={{ flex: 1, padding: "24px", maxWidth: 640 }}>
        {/* Wallet Balance Card */}
        <div style={{ background: "linear-gradient(135deg, #10b981, #059669)", borderRadius: 16, padding: 32, color: "white", marginBottom: 24, boxShadow: "0 8px 24px rgba(16,185,129,0.25)" }}>
          <p style={{ fontWeight: 600, opacity: 0.8, fontSize: 14, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Available to Withdraw</p>
          <p style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 48, marginBottom: 4 }}>₹1,650</p>
          <p style={{ opacity: 0.9, fontSize: 13, marginBottom: 24 }}>Next automated payout on: Friday, 28 Apr</p>
          
          <button style={{ background: "white", width: "100%", padding: 14, borderRadius: 12, border: "none", color: "#059669", fontWeight: 700, fontSize: 15, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            Withdraw Instantly
          </button>
        </div>

        {/* Summaries */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          <div className="card" style={{ padding: 20 }}>
            <p style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 600, marginBottom: 4 }}>THIS WEEK</p>
            <p style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>₹3,850</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <p style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 600, marginBottom: 4 }}>LIFETIME</p>
            <p style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>₹84,200</p>
          </div>
        </div>

        {/* Transactions */}
        <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 18, color: "var(--navy-900)", marginBottom: 16 }}>Recent Transactions</h2>
        <div className="card" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {TRANSACTIONS.map((txn, i) => (
             <div key={txn.id} style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < TRANSACTIONS.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
               <div>
                 <p style={{ fontWeight: 600, color: "var(--navy-900)", fontSize: 14, marginBottom: 4 }}>{txn.desc}</p>
                 <p style={{ color: "var(--gray-500)", fontSize: 12 }}>{txn.date} • {txn.id}</p>
               </div>
               <p style={{ fontWeight: 700, fontSize: 15, color: txn.amount.startsWith("+") ? "#059669" : "var(--gray-600)" }}>
                 {txn.amount}
               </p>
             </div>
          ))}
          <div style={{ padding: "12px", textAlign: "center", background: "var(--gray-50)", borderTop: "1px solid var(--gray-100)" }}>
            <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>View All History</button>
          </div>
        </div>
      </main>
    </div>
  );
}
