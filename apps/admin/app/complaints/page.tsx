"use client";

const COMPLAINTS = [
  { id: "TKT-001", user: "Sanjay Reddy", tech: "Suresh R.", subject: "Overcharged for MCB replace", priority: "High", status: "Open", date: "2 hrs ago" },
  { id: "TKT-002", user: "Priya S.", tech: "Abdul W.", subject: "AC coolting issue recurred", priority: "Medium", status: "In Progress", date: "1 day ago" },
  { id: "TKT-003", user: "Venkatesh R.", tech: "Kiran K.", subject: "Technician was late by 2 hrs", priority: "Low", status: "Resolved", date: "4 days ago" },
];

export default function ComplaintsPage() {
  return (
    <div className="animate-fadeIn">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>Complaints & Support Tickets</h1>
        <button className="btn-outline">Export Log</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
        <div className="card" style={{ padding: 20, borderLeft: "4px solid #ef4444" }}>
          <p style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 600 }}>OPEN TICKETS</p>
          <p style={{ fontSize: 28, fontWeight: 800, color: "var(--navy-900)" }}>8</p>
        </div>
        <div className="card" style={{ padding: 20, borderLeft: "4px solid #f59e0b" }}>
          <p style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 600 }}>IN PROGRESS</p>
          <p style={{ fontSize: 28, fontWeight: 800, color: "var(--navy-900)" }}>14</p>
        </div>
        <div className="card" style={{ padding: 20, borderLeft: "4px solid #10b981" }}>
          <p style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 600 }}>RESOLVED (THIS WEEK)</p>
          <p style={{ fontSize: 28, fontWeight: 800, color: "var(--navy-900)" }}>45</p>
        </div>
      </div>

      <div className="card" style={{ overflow: "hidden" }}>
        <div style={{ padding: 16, borderBottom: "1px solid var(--gray-200)", display: "flex", gap: 16 }}>
          <input className="input" placeholder="Search ticket ID or subject..." style={{ maxWidth: 300 }} />
          <select className="input" style={{ maxWidth: 150 }}>
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--gray-50)", color: "var(--gray-500)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Ticket ID</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Subject</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Parties</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Priority</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Status</th>
              <th style={{ padding: "16px 20px", fontWeight: 600, textAlign: "right" }}>Act</th>
            </tr>
          </thead>
          <tbody>
            {COMPLAINTS.map((t, i) => (
              <tr key={t.id} style={{ borderBottom: i < COMPLAINTS.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
                <td style={{ padding: "16px 20px" }}>
                  <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>{t.id}</p>
                  <p style={{ fontSize: 12, color: "var(--gray-500)" }}>{t.date}</p>
                </td>
                <td style={{ padding: "16px 20px", color: "var(--navy-900)", fontWeight: 500, maxWidth: 250, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{t.subject}</td>
                <td style={{ padding: "16px 20px" }}>
                  <p style={{ fontSize: 13, color: "var(--navy-900)" }}>C: {t.user}</p>
                  <p style={{ fontSize: 13, color: "var(--navy-900)" }}>T: {t.tech}</p>
                </td>
                <td style={{ padding: "16px 20px" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: t.priority === "High" ? "#dc2626" : t.priority === "Medium" ? "#f59e0b" : "#10b981" }}>{t.priority}</span>
                </td>
                <td style={{ padding: "16px 20px" }}>
                  <span className={`badge ${t.status === "Open" ? "badge-red" : t.status === "In Progress" ? "badge-orange" : "badge-gray"}`}>{t.status}</span>
                </td>
                <td style={{ padding: "16px 20px", textAlign: "right" }}>
                  <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, cursor: "pointer" }}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
