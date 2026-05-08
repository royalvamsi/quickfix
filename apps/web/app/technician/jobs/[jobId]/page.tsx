"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ActiveJobPage() {
  const params = useParams();
  const jobId = params.jobId;
  const router = useRouter();
  
  const [status, setStatus] = useState<"navigating" | "arrived" | "working" | "payment" | "done">("navigating");
  const [startOtp, setStartOtp] = useState("");

  const handleStartWork = () => {
    if (startOtp === "8421") {
      setStatus("working");
    } else {
      alert("Invalid OTP! Ask the customer for the Start OTP.");
    }
  };

  const handleComplete = () => {
    setStatus("payment");
    setTimeout(() => {
      setStatus("done");
    }, 2500); // Simulate mock payment receiving
  };

  if (status === "done") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--blue-500)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div className="card animate-fadeInUp" style={{ maxWidth: 400, width: "100%", padding: 40, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(16,185,129,0.1)", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Job Completed!</h1>
          <p style={{ color: "var(--gray-500)", marginBottom: 24 }}>Payment of ₹599 received successfully. ₹450 credited to your earnings.</p>
          <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => router.push("/technician/dashboard")}>Back to Dashboard</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "white", display: "flex", flexDirection: "column" }}>
      {/* Mock Map / Header */}
      <div style={{ position: "relative", height: "45vh", background: "#cbd5e1" }}>
        {/* Map Grid Pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        {/* Header Overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "20px 24px", display: "flex", justifyContent: "space-between", zIndex: 10 }}>
          <Link href="/technician/dashboard" style={{ width: 44, height: 44, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: "var(--navy-900)", boxShadow: "var(--shadow-sm)", fontWeight: 700 }}>←</Link>
          <div style={{ background: "var(--navy-900)", color: "white", padding: "10px 20px", borderRadius: 100, fontWeight: 600, boxShadow: "var(--shadow-sm)" }}>
            Job #{jobId}
          </div>
        </div>

        {/* Map route mock */}
        {status === "navigating" && (
           <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
             <path d="M100 300 Q 200 250 250 150" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" fill="none" />
           </svg>
        )}
        
        {/* Marker */}
        <div style={{ position: "absolute", top: "45%", left: "50%", width: 80, height: 80, transform: "translate(-50%, -50%)", background: "rgba(37,99,235,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", animation: "pulse-glow 2s infinite" }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--blue-500)", border: "4px solid white", boxShadow: "var(--shadow-md)" }} />
        </div>
      </div>

      <main style={{ flex: 1, padding: "24px", background: "white", borderTopLeftRadius: 32, borderTopRightRadius: 32, marginTop: -32, zIndex: 10, display: "flex", flexDirection: "column" }}>
        
        {status === "navigating" && (
          <div className="animate-fadeIn">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>12 mins</h2>
                <p style={{ color: "var(--gray-500)", fontSize: 13, fontWeight: 600 }}>4.2 km • Normal traffic</p>
              </div>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--blue-500)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 24, boxShadow: "var(--shadow-blue)" }}>
                ↗️
              </div>
            </div>

            <div style={{ padding: 16, background: "var(--gray-50)", borderRadius: 16, border: "1px solid var(--gray-200)", marginBottom: 24 }}>
              <p style={{ fontWeight: 700, color: "var(--navy-900)", marginBottom: 4 }}>Flat 402, Sai Ram Residency</p>
              <p style={{ color: "var(--gray-500)", fontSize: 13, marginBottom: 12 }}>Benz Circle, Vijayawada</p>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "1px dashed var(--gray-300)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--gray-200)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>SJ</div>
                  <span style={{ fontWeight: 600, color: "var(--navy-900)", fontSize: 14 }}>Sanjay</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href="tel:000" style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>📞</a>
                  <button style={{ width: 36, height: 36, borderRadius: "50%", border: "none", background: "rgba(37,99,235,0.1)", cursor: "pointer" }}>💬</button>
                </div>
              </div>
            </div>

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", height: 56, fontSize: 16 }} onClick={() => setStatus("arrived")}>
              Swipe to Arrive →
            </button>
          </div>
        )}

        {status === "arrived" && (
          <div className="animate-fadeIn">
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>You have arrived</h2>
            <p style={{ color: "var(--gray-500)", fontSize: 15, marginBottom: 24 }}>Ask the customer for the Start OTP to begin the work.</p>
            
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 8 }}>Enter 4-digit OTP</label>
              <input type="text" className="input" placeholder="XXXX" maxLength={4} style={{ letterSpacing: 12, fontSize: 24, textAlign: "center", height: 64 }} value={startOtp} onChange={(e) => setStartOtp(e.target.value)} />
              <p style={{ color: "var(--gray-400)", fontSize: 12, textAlign: "center", marginTop: 8 }}>Hint for demo: 8421</p>
            </div>

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", height: 56, fontSize: 16 }} onClick={handleStartWork}>
              Verify & Start Work
            </button>
          </div>
        )}

        {status === "working" && (
          <div className="animate-fadeIn" style={{ textAlign: "center", paddingTop: 20 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", border: "4px solid var(--blue-500)", borderTopColor: "transparent", borderRightColor: "transparent", animation: "spin 1s linear infinite", margin: "0 auto 24px" }} />
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Work in Progress</h2>
            <p style={{ color: "var(--gray-500)", fontSize: 15, marginBottom: 40, padding: "0 20px" }}>Job started successfully. Tap below when you finish the repair.</p>
            
            <button className="btn-outline" style={{ width: "100%", justifyContent: "center", height: 56, fontSize: 16 }} onClick={handleComplete}>
              Mark Job Completed
            </button>
            <style jsx>{`
              @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
          </div>
        )}

        {status === "payment" && (
          <div className="animate-fadeIn" style={{ textAlign: "center", paddingTop: 30 }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>💳</div>
            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Waiting for Payment</h2>
            <p style={{ color: "var(--gray-500)", fontSize: 15 }}>Customer is paying ₹599 from their app...</p>
            <div style={{ marginTop: 32, display: "flex", gap: 6, justifyContent: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--blue-500)", animation: "bounce 1s infinite alternate" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--blue-500)", animation: "bounce 1s infinite alternate", animationDelay: "0.2s" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--blue-500)", animation: "bounce 1s infinite alternate", animationDelay: "0.4s" }} />
            </div>
            <style jsx>{`
              @keyframes bounce { to { transform: translateY(-8px); opacity: 0.5; } }
            `}</style>
          </div>
        )}

      </main>
    </div>
  );
}
