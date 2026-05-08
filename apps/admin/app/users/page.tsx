const USERS = [
  { id: "U-182", name: "Sanjay Reddy", phone: "+91 98765 43210", email: "sanjay@example.com", joined: "12 Apr 2026", status: "Active", bookings: 4 },
  { id: "U-181", name: "Priya Sharma", phone: "+91 91234 56789", email: "-", joined: "10 Apr 2026", status: "Active", bookings: 1 },
  { id: "U-180", name: "Venkatesh Rao", phone: "+91 99887 76655", email: "venkat@mail.com", joined: "05 Apr 2026", status: "Suspended", bookings: 12 },
];

export default function UsersPage() {
  return (
    <div className="animate-fadeIn">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>Customer Management</h1>
        <button className="btn-primary">Export CSV</button>
      </div>

      <div className="card" style={{ overflow: "hidden" }}>
        <div style={{ padding: 16, borderBottom: "1px solid var(--gray-200)", display: "flex", gap: 16 }}>
          <input className="input" placeholder="Search name, phone, ID..." style={{ maxWidth: 300 }} />
          <select className="input" style={{ maxWidth: 150 }}>
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--gray-50)", color: "var(--gray-500)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>User Info</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Contact</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Joined</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Bookings</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Status</th>
              <th style={{ padding: "16px 20px", fontWeight: 600, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((u, i) => (
              <tr key={u.id} style={{ borderBottom: i < USERS.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
                <td style={{ padding: "16px 20px" }}>
                  <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>{u.name}</p>
                  <p style={{ fontSize: 12, color: "var(--gray-500)" }}>{u.id}</p>
                </td>
                <td style={{ padding: "16px 20px" }}>
                  <p style={{ fontSize: 14, color: "var(--navy-900)" }}>{u.phone}</p>
                  <p style={{ fontSize: 13, color: "var(--gray-500)" }}>{u.email}</p>
                </td>
                <td style={{ padding: "16px 20px", color: "var(--gray-600)", fontSize: 14 }}>{u.joined}</td>
                <td style={{ padding: "16px 20px", color: "var(--gray-600)", fontSize: 14 }}>
                  <span style={{ background: "var(--gray-100)", padding: "4px 12px", borderRadius: 100, fontWeight: 600 }}>{u.bookings}</span>
                </td>
                <td style={{ padding: "16px 20px" }}>
                  <span className={`badge ${u.status === "Active" ? "badge-green" : "badge-red"}`}>{u.status}</span>
                </td>
                <td style={{ padding: "16px 20px", textAlign: "right" }}>
                  <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, cursor: "pointer", marginRight: 16 }}>View</button>
                  <button style={{ background: "none", border: "none", color: "var(--gray-400)", cursor: "pointer" }}>⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ padding: "16px 20px", borderTop: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--gray-500)", fontSize: 14 }}>
          <span>Showing 1 to 3 of 150 entries</span>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn-outline" style={{ padding: "6px 12px", fontSize: 13 }} disabled>Prev</button>
            <button className="btn-outline" style={{ padding: "6px 12px", fontSize: 13 }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
