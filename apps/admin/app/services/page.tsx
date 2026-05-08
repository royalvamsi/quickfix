"use client";
import { useState } from "react";

const CATEGORIES = [
  { id: 1, name: "Electrician", count: 12, enabled: true },
  { id: 2, name: "Plumber", count: 8, enabled: true },
  { id: 3, name: "AC Repair", count: 4, enabled: true },
  { id: 4, name: "Carpentry", count: 6, enabled: false },
];

const SERVICES = [
  { id: "S101", name: "MCB Replacement", cat: "Electrician", basePrice: "₹350", duration: "1 hr" },
  { id: "S102", name: "Fan Installation", cat: "Electrician", basePrice: "₹250", duration: "45 min" },
  { id: "S201", name: "Leaking Pipe Fix", cat: "Plumber", basePrice: "₹300", duration: "1.5 hr" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("items");

  return (
    <div className="animate-fadeIn">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>Service Catalog</h1>
        <button className="btn-primary">{activeTab === "categories" ? "+ Add Category" : "+ Add Service"}</button>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 24, paddingBottom: 8, borderBottom: "1px solid var(--gray-200)" }}>
        <button onClick={() => setActiveTab("items")} style={{ padding: "8px 16px", background: "none", border: "none", color: activeTab === "items" ? "var(--blue-500)" : "var(--gray-500)", fontWeight: 600, borderBottom: activeTab === "items" ? "2px solid var(--blue-500)" : "2px solid transparent", cursor: "pointer" }}>Service Items</button>
        <button onClick={() => setActiveTab("categories")} style={{ padding: "8px 16px", background: "none", border: "none", color: activeTab === "categories" ? "var(--blue-500)" : "var(--gray-500)", fontWeight: 600, borderBottom: activeTab === "categories" ? "2px solid var(--blue-500)" : "2px solid transparent", cursor: "pointer" }}>Categories</button>
      </div>

      {activeTab === "categories" && (
        <div className="card" style={{ overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "var(--gray-50)", color: "var(--gray-500)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <th style={{ padding: "16px 20px", fontWeight: 600 }}>Category Name</th>
                <th style={{ padding: "16px 20px", fontWeight: 600 }}>Service Items</th>
                <th style={{ padding: "16px 20px", fontWeight: 600 }}>Status</th>
                <th style={{ padding: "16px 20px", fontWeight: 600, textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {CATEGORIES.map((c, i) => (
                <tr key={c.id} style={{ borderBottom: i < CATEGORIES.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
                  <td style={{ padding: "16px 20px", fontWeight: 600, color: "var(--navy-900)" }}>{c.name}</td>
                  <td style={{ padding: "16px 20px", color: "var(--gray-600)" }}>{c.count} items</td>
                  <td style={{ padding: "16px 20px" }}>
                     <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                        <div style={{ width: 40, height: 24, background: c.enabled ? "#10b981" : "var(--gray-300)", borderRadius: 100, position: "relative", transition: "all 0.3s" }}>
                          <div style={{ position: "absolute", top: 2, left: c.enabled ? 18 : 2, width: 20, height: 20, borderRadius: "50%", background: "white", transition: "all 0.3s", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
                        </div>
                     </label>
                  </td>
                  <td style={{ padding: "16px 20px", textAlign: "right" }}>
                    <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, cursor: "pointer" }}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "items" && (
        <div className="card" style={{ overflow: "hidden" }}>
           <div style={{ padding: 16, borderBottom: "1px solid var(--gray-200)", display: "flex", gap: 16 }}>
             <input className="input" placeholder="Search services..." style={{ maxWidth: 300 }} />
             <select className="input" style={{ maxWidth: 200 }}>
               <option>All Categories</option>
               <option>Electrician</option>
               <option>Plumber</option>
             </select>
           </div>
           
           <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
             <thead>
               <tr style={{ background: "var(--gray-50)", color: "var(--gray-500)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                 <th style={{ padding: "16px 20px", fontWeight: 600 }}>Service Name / ID</th>
                 <th style={{ padding: "16px 20px", fontWeight: 600 }}>Category</th>
                 <th style={{ padding: "16px 20px", fontWeight: 600 }}>Base Price</th>
                 <th style={{ padding: "16px 20px", fontWeight: 600 }}>Duration</th>
                 <th style={{ padding: "16px 20px", fontWeight: 600, textAlign: "right" }}>Actions</th>
               </tr>
             </thead>
             <tbody>
               {SERVICES.map((s, i) => (
                 <tr key={s.id} style={{ borderBottom: i < SERVICES.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
                   <td style={{ padding: "16px 20px" }}>
                     <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>{s.name}</p>
                     <p style={{ fontSize: 12, color: "var(--gray-500)" }}>{s.id}</p>
                   </td>
                   <td style={{ padding: "16px 20px", color: "var(--gray-600)" }}>{s.cat}</td>
                   <td style={{ padding: "16px 20px", fontWeight: 700, color: "var(--navy-900)" }}>{s.basePrice}</td>
                   <td style={{ padding: "16px 20px", color: "var(--gray-600)" }}>{s.duration}</td>
                   <td style={{ padding: "16px 20px", textAlign: "right" }}>
                     <button style={{ background: "none", border: "none", color: "var(--blue-500)", fontWeight: 600, cursor: "pointer", marginRight: 16 }}>Edit</button>
                     <button style={{ background: "none", border: "none", color: "#dc2626", fontWeight: 600, cursor: "pointer" }}>Disable</button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      )}
    </div>
  );
}
