export default function AdminDashboardPage() {
  return (
    <div className="animate-fadeIn">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 28, color: "var(--navy-900)" }}>Overview</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <select className="input" style={{ width: "auto" }}>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Month</option>
          </select>
          <button className="btn-primary">Download Report</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
        {[
          { label: "Total Revenue", val: "₹1,42,500", trend: "+12.5%", pos: true },
          { label: "Active Jobs", val: "124", trend: "+4.2%", pos: true },
          { label: "Tech Online", val: "84/112", trend: "-2.1%", pos: false },
          { label: "Open Complaints", val: "8", trend: "+2", pos: false },
        ].map(k => (
          <div key={k.label} className="card" style={{ padding: 20 }}>
            <p style={{ color: "var(--gray-500)", fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{k.label}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span className="font-display" style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>{k.val}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: k.pos ? "#059669" : "#dc2626" }}>{k.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
        {/* Mock Chart Area */}
        <div className="card" style={{ padding: 20, display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Revenue vs Jobs (Last 7 Days)</h2>
          <div style={{ flex: 1, minHeight: 300, display: "flex", alignItems: "flex-end", gap: 12, paddingTop: 20 }}>
            {[30, 45, 60, 40, 75, 55, 90].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", gap: 8 }}>
                <div style={{ width: "100%", height: `${h}%`, background: "var(--blue-500)", borderRadius: "4px 4px 0 0", opacity: 0.8 }} />
                <p style={{ textAlign: "center", fontSize: 12, color: "var(--gray-500)" }}>D{i+1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="card" style={{ padding: 20 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Requires Attention</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ padding: 12, background: "rgba(249,115,22,0.1)", borderRadius: 8, border: "1px solid rgba(249,115,22,0.2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span className="badge" style={{ background: "var(--orange-500)", color: "white" }}>KYC Pending</span>
                <span style={{ fontSize: 12, color: "var(--gray-500)" }}>2m ago</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: 14, color: "var(--navy-900)" }}>Ramesh Kumar (Plumber)</p>
              <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, fontSize: 13, marginTop: 8, cursor: "pointer" }}>Review Docs →</button>
            </div>

            <div style={{ padding: 12, background: "rgba(239,68,68,0.1)", borderRadius: 8, border: "1px solid rgba(239,68,68,0.2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span className="badge badge-red">Escalation</span>
                <span style={{ fontSize: 12, color: "var(--gray-500)" }}>15m ago</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: 14, color: "var(--navy-900)" }}>Dispute: QF1992</p>
              <p style={{ fontSize: 13, color: "var(--gray-600)" }}>Customer reports technician overcharging.</p>
              <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, fontSize: 13, marginTop: 8, cursor: "pointer" }}>View Ticket →</button>
            </div>

            <div style={{ padding: 12, border: "1px solid var(--gray-200)", borderRadius: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span className="badge badge-blue">System Alert</span>
                <span style={{ fontSize: 12, color: "var(--gray-500)" }}>1h ago</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: 14, color: "var(--navy-900)" }}>Surge Pricing Active</p>
              <p style={{ fontSize: 13, color: "var(--gray-600)" }}>High demand in Patamata area (x1.5).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
