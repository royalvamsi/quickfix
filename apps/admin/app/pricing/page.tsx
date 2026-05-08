"use client";
import { useState } from "react";

export default function PricingPage() {
  const [surge, setSurge] = useState(false);

  return (
    <div className="animate-fadeIn">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>Pricing Engine</h1>
        <button className="btn-primary">Save Changes</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Base Fees */}
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Platform Base Fees</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Convenience Fee (Fixed)</label>
                <div style={{ display: "flex" }}>
                   <div style={{ padding: "10px 14px", background: "var(--gray-50)", border: "1px solid var(--gray-200)", borderRight: "none", borderTopLeftRadius: 8, borderBottomLeftRadius: 8, color: "var(--gray-600)" }}>₹</div>
                   <input className="input" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} defaultValue="49" />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Platform Commission (%)</label>
                <div style={{ display: "flex" }}>
                   <input className="input" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} defaultValue="15" />
                   <div style={{ padding: "10px 14px", background: "var(--gray-50)", border: "1px solid var(--gray-200)", borderLeft: "none", borderTopRightRadius: 8, borderBottomRightRadius: 8, color: "var(--gray-600)" }}>%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Pricing */}
          <div className="card" style={{ padding: 24 }}>
             <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Dynamic Multipliers</h2>
             
             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, border: "1px solid var(--blue-500)", background: "rgba(37,99,235,0.05)", borderRadius: 12, marginBottom: 16 }}>
               <div>
                 <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>Surge Pricing (Rain / High Demand)</p>
                 <p style={{ fontSize: 13, color: "var(--gray-600)" }}>Applies a multiplier to base service fees across the platform</p>
               </div>
               <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                 {surge && <input className="input" style={{ width: 80, padding: 8 }} defaultValue="1.5x" />}
                 <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <div style={{ width: 44, height: 26, background: surge ? "var(--blue-500)" : "var(--gray-300)", borderRadius: 100, position: "relative", transition: "all 0.3s" }}>
                      <div style={{ position: "absolute", top: 3, left: surge ? 21 : 3, width: 20, height: 20, borderRadius: "50%", background: "white", transition: "all 0.3s", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
                    </div>
                    <input type="checkbox" checked={surge} onChange={() => setSurge(!surge)} style={{ display: "none" }} />
                 </label>
               </div>
             </div>

             <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Distance Fee Multiplier (per km after 5km)</label>
                <div style={{ display: "flex", maxWidth: 200 }}>
                   <div style={{ padding: "10px 14px", background: "var(--gray-50)", border: "1px solid var(--gray-200)", borderRight: "none", borderTopLeftRadius: 8, borderBottomLeftRadius: 8, color: "var(--gray-600)" }}>₹</div>
                   <input className="input" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} defaultValue="12" />
                </div>
             </div>
          </div>
        </div>

        <div className="card" style={{ padding: 24, height: "fit-content" }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Live Fee Preview</h2>
          <div style={{ background: "var(--gray-50)", padding: 16, borderRadius: 12, border: "1px dashed var(--gray-300)" }}>
            <p style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 12 }}>EXAMPLE: 350₹ SERVICE, 3KM DISTANCE</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
              <span>Base Service</span>
              <span style={{ fontWeight: 600 }}>₹350.00</span>
            </div>
            {surge && (
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, color: "#dc2626" }}>
                <span>Surge (1.5x)</span>
                <span style={{ fontWeight: 600 }}>₹175.00</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
              <span>Distance (0km > 5)</span>
              <span style={{ fontWeight: 600 }}>₹0.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 14 }}>
              <span>Conv. Fee</span>
              <span style={{ fontWeight: 600 }}>₹49.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid var(--gray-200)", fontSize: 16 }}>
              <span style={{ fontWeight: 700, color: "var(--navy-900)" }}>Total to Customer</span>
              <span style={{ fontWeight: 800, color: "var(--navy-900)" }}>₹{surge ? "574.00" : "399.00"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 13, color: "#059669" }}>
              <span>Platform Earnings (15%)</span>
              <span style={{ fontWeight: 600 }}>₹{surge ? "78.75" : "52.50"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
