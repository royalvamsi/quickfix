export default function AnalyticsPage() {
  return (
    <div className="animate-fadeIn">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>Analytics Hub</h1>
        <div style={{ display: "flex", gap: 12 }}>
          <select className="input" style={{ width: "auto" }}>
            <option>Last 30 Days</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
          <button className="btn-outline">Download CSV Report</button>
        </div>
      </div>

      {/* Heatmap Mock */}
      <div className="card" style={{ padding: 24, marginBottom: 24 }}>
        <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Demand Heatmap (Vijayawada)</h2>
        <div style={{ width: "100%", height: 350, background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)", borderRadius: 12, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          <div style={{ position: "absolute", top: "40%", left: "60%", width: 120, height: 120, background: "radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(239,68,68,0) 70%)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "60%", left: "30%", width: 180, height: 180, background: "radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(249,115,22,0) 70%)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "20%", left: "30%", width: 90, height: 90, background: "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(37,99,235,0) 70%)", borderRadius: "50%" }} />
          
           <div style={{ zIndex: 1, background: "white", padding: "8px 16px", borderRadius: 100, boxShadow: "var(--shadow-sm)", fontWeight: 600, fontSize: 13 }}>
             High Demand Area: Patamata (Deploy surge)
           </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div className="card" style={{ padding: 24 }}>
           <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Conversion Funnel</h2>
           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
             <div style={{ display: "flex", alignItems: "center" }}>
               <div style={{ width: "100%", background: "rgba(37,99,235,0.1)", height: 40, borderRadius: 8, display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between", borderLeft: "4px solid var(--blue-500)" }}>
                 <span style={{ fontWeight: 600, fontSize: 13 }}>App Opens</span>
                 <span style={{ fontWeight: 700 }}>12,450</span>
               </div>
             </div>
             <div style={{ display: "flex", alignItems: "center" }}>
               <div style={{ width: "75%", background: "rgba(37,99,235,0.15)", height: 40, borderRadius: 8, borderTopRightRadius: 4, display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between", borderLeft: "4px solid var(--blue-500)" }}>
                 <span style={{ fontWeight: 600, fontSize: 13 }}>Searched Service</span>
                 <span style={{ fontWeight: 700 }}>9,330</span>
               </div>
             </div>
             <div style={{ display: "flex", alignItems: "center" }}>
               <div style={{ width: "45%", background: "rgba(37,99,235,0.2)", height: 40, borderRadius: 8, borderTopRightRadius: 4, display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between", borderLeft: "4px solid var(--blue-500)" }}>
                 <span style={{ fontWeight: 600, fontSize: 13 }}>Reached Checkout</span>
                 <span style={{ fontWeight: 700 }}>5,600</span>
               </div>
             </div>
             <div style={{ display: "flex", alignItems: "center" }}>
               <div style={{ width: "30%", background: "rgba(37,99,235,0.3)", height: 40, borderRadius: 8, borderTopRightRadius: 4, display: "flex", alignItems: "center", padding: "0 16px", justifyContent: "space-between", borderLeft: "4px solid var(--blue-500)" }}>
                 <span style={{ fontWeight: 600, fontSize: 13 }}>Booked Job</span>
                 <span style={{ fontWeight: 700 }}>3,735</span>
               </div>
             </div>
           </div>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "var(--navy-900)", marginBottom: 16 }}>Top Services by Revenue</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                 <span style={{ fontSize: 20 }}>❄️</span>
                 <div>
                   <p style={{ fontWeight: 600, color: "var(--navy-900)", fontSize: 14 }}>AC Gas Refill</p>
                   <p style={{ fontSize: 12, color: "var(--gray-500)" }}>842 bookings</p>
                 </div>
               </div>
               <span style={{ fontWeight: 800, color: "var(--navy-900)" }}>₹12.4L</span>
             </div>
             <div style={{ height: 1, background: "var(--gray-100)" }} />
             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                 <span style={{ fontSize: 20 }}>⚡</span>
                 <div>
                   <p style={{ fontWeight: 600, color: "var(--navy-900)", fontSize: 14 }}>MCB Replacement</p>
                   <p style={{ fontSize: 12, color: "var(--gray-500)" }}>1,204 bookings</p>
                 </div>
               </div>
               <span style={{ fontWeight: 800, color: "var(--navy-900)" }}>₹4.2L</span>
             </div>
             <div style={{ height: 1, background: "var(--gray-100)" }} />
             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                 <span style={{ fontSize: 20 }}>🚰</span>
                 <div>
                   <p style={{ fontWeight: 600, color: "var(--navy-900)", fontSize: 14 }}>Pipe Leakage Fix</p>
                   <p style={{ fontSize: 12, color: "var(--gray-500)" }}>956 bookings</p>
                 </div>
               </div>
               <span style={{ fontWeight: 800, color: "var(--navy-900)" }}>₹2.8L</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
