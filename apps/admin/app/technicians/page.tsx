"use client";
import { useState } from "react";

const INITIAL_TECHS = [
  { id: "T-89", name: "Ramesh Kumar", trade: "Plumber", city: "Vijayawada", kycStatus: "Pending", rating: "-", jobs: 0 },
  { id: "T-88", name: "Suresh Reddy", trade: "Electrician", city: "Guntur", kycStatus: "Verified", rating: "4.9", jobs: 18 },
  { id: "T-87", name: "Abdul Wahab", trade: "AC Technician", city: "Vijayawada", kycStatus: "Verified", rating: "4.7", jobs: 105 },
];

export default function TechniciansPage() {
  const [techs, setTechs] = useState(INITIAL_TECHS);
  const [approvalDoc, setApprovalDoc] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setTechs(techs.map(t => t.id === id ? { ...t, kycStatus: "Verified" } : t));
    setApprovalDoc(null);
  };

  return (
    <div className="animate-fadeIn">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>Partner Management</h1>
        <button className="btn-primary">+ Add Partner Manually</button>
      </div>

      {approvalDoc && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div className="card animate-fadeInUp" style={{ width: 600, padding: 32, position: "relative" }}>
            <button onClick={() => setApprovalDoc(null)} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "var(--gray-500)" }}>×</button>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 16, color: "var(--navy-900)" }}>KYC Review: {approvalDoc}</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
               <div style={{ height: 200, background: "var(--gray-100)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gray-500)", border: "1px dashed var(--gray-300)" }}>
                 [Mock Aadhaar Photo]
               </div>
               <div style={{ height: 200, background: "var(--gray-100)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gray-500)", border: "1px dashed var(--gray-300)" }}>
                 [Mock Live Selfie]
               </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--gray-50)", padding: 16, borderRadius: 8, marginBottom: 24 }}>
              <div>
                <p style={{ fontSize: 13, color: "var(--gray-500)" }}>Aadhaar Number</p>
                <p style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", letterSpacing: 2 }}>8293 4910 2384</p>
              </div>
              <span className="badge badge-green">Match 98%</span>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn-outline" style={{ flex: 1, color: "#dc2626", borderColor: "#dc2626" }} onClick={() => setApprovalDoc(null)}>Reject</button>
              <button className="btn-primary" style={{ flex: 2 }} onClick={() => handleApprove(approvalDoc)}>Approve & Activate</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
        <div className="card" style={{ flex: 1, padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--orange-500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📋</div>
          <div>
            <p style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 600 }}>PENDING APPROVALS</p>
            <p style={{ fontSize: 24, fontWeight: 800, color: "var(--navy-900)", fontFamily: "Plus Jakarta Sans,sans-serif" }}>{techs.filter(t => t.kycStatus === "Pending").length}</p>
          </div>
        </div>
        <div className="card" style={{ flex: 1, padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(37,99,235,0.1)", color: "var(--blue-500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>👷‍♂️</div>
          <div>
            <p style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 600 }}>ACTIVE TECHNICIANS</p>
            <p style={{ fontSize: 24, fontWeight: 800, color: "var(--navy-900)", fontFamily: "Plus Jakarta Sans,sans-serif" }}>{techs.filter(t => t.kycStatus === "Verified").length}</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--gray-50)", color: "var(--gray-500)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Technician</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Trade & City</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>Stats</th>
              <th style={{ padding: "16px 20px", fontWeight: 600 }}>KYC Status</th>
              <th style={{ padding: "16px 20px", fontWeight: 600, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {techs.map((t, i) => (
              <tr key={t.id} style={{ borderBottom: i < techs.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
                <td style={{ padding: "16px 20px" }}>
                  <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: "var(--gray-500)" }}>{t.id}</p>
                </td>
                <td style={{ padding: "16px 20px" }}>
                  <p style={{ fontSize: 14, color: "var(--navy-900)", fontWeight: 500 }}>{t.trade}</p>
                  <p style={{ fontSize: 13, color: "var(--gray-500)" }}>{t.city}</p>
                </td>
                <td style={{ padding: "16px 20px" }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <span style={{ color: "#fbbf24" }}>★</span>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{t.rating}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <span style={{ color: "var(--blue-500)", fontSize: 14 }}>💼</span>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{t.jobs}</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: "16px 20px" }}>
                  <span className={`badge ${t.kycStatus === "Verified" ? "badge-green" : "badge-orange"}`}>{t.kycStatus}</span>
                </td>
                <td style={{ padding: "16px 20px", textAlign: "right" }}>
                  {t.kycStatus === "Pending" ? (
                    <button className="btn-primary" style={{ padding: "6px 12px", fontSize: 13 }} onClick={() => setApprovalDoc(t.id)}>Review</button>
                  ) : (
                    <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, cursor: "pointer" }}>Manage</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
