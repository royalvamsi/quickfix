"use client";
import { useState } from "react";
import Link from "next/link";

export default function TechRegisterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div className="card animate-fadeInUp" style={{ maxWidth: 480, width: "100%", padding: 40, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(37,99,235,0.1)", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>⏳</div>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Application Submitted</h1>
          <p style={{ color: "var(--gray-500)", marginBottom: 32, lineHeight: 1.6 }}>We have received your KYC documents. Our team will verify your application within 24-48 hours. We will SMS you once approved.</p>
          <Link href="/" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", borderBottom: "1px solid var(--gray-200)", padding: "16px 24px" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", color: "var(--navy-900)", fontWeight: 800, fontSize: 20 }}>Quick<span style={{ color: "#f97316" }}>Fix</span></Link>
          <span style={{ fontWeight: 600, color: "var(--gray-500)", fontSize: 14 }}>Partner Onboarding</span>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "40px 24px", maxWidth: 600 }}>
        <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 28, color: "var(--navy-900)", marginBottom: 8 }}>Become a QuickFix Pro</h1>
        <p style={{ color: "var(--gray-500)", fontSize: 15, marginBottom: 32 }}>Join thousands of technicians earning on their own terms.</p>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32, position: "relative" }}>
          <div style={{ position: "absolute", top: 14, left: 0, right: 0, height: 2, background: "var(--gray-200)", zIndex: 0 }} />
          {[
            { n: 1, label: "Basic Info" },
            { n: 2, label: "Skills" },
            { n: 3, label: "KYC Auth" }
          ].map(s => (
             <div key={s.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
               <div style={{ width: 30, height: 30, borderRadius: "50%", background: step >= s.n ? "var(--blue-500)" : "var(--gray-200)", color: step >= s.n ? "white" : "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, marginBottom: 8, border: "4px solid var(--gray-50)", transition: "all 0.3s" }}>
                 {step > s.n ? "✓" : s.n}
               </div>
               <span style={{ fontSize: 12, fontWeight: 600, color: step >= s.n ? "var(--navy-900)" : "var(--gray-400)" }}>{s.label}</span>
             </div>
          ))}
        </div>

        <div className="card" style={{ padding: 32 }}>
          {step === 1 && (
            <div className="animate-fadeIn">
              <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>First Name</label>
                  <input className="input" placeholder="e.g. Ramesh" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Last Name</label>
                  <input className="input" placeholder="e.g. Kumar" />
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Mobile Number</label>
                <div style={{ display: "flex" }}>
                  <div style={{ padding: "12px 16px", background: "var(--gray-50)", border: "1.5px solid var(--gray-200)", borderRight: "none", borderTopLeftRadius: 8, borderBottomLeftRadius: 8, color: "var(--gray-600)", fontWeight: 500 }}>+91</div>
                  <input className="input" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} placeholder="Enter mobile number" />
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>City</label>
                <select className="input" style={{ cursor: "pointer" }}>
                  <option>Vijayawada</option>
                  <option>Guntur</option>
                  <option>Visakhapatnam</option>
                </select>
              </div>
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setStep(2)}>Continue to Skills →</button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fadeIn">
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 12 }}>Primary Trade</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {["Electrician", "Plumber", "AC Technician", "Carpenter", "Appliance Repair"].map(t => (
                  <label key={t} style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, border: "1.5px solid var(--gray-200)", borderRadius: 12, cursor: "pointer" }}>
                    <input type="radio" name="trade" style={{ width: 18, height: 18 }} />
                    <span style={{ fontWeight: 500, color: "var(--navy-900)" }}>{t}</span>
                  </label>
                ))}
              </div>
              <div style={{ marginBottom: 32 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Years of Experience</label>
                <input className="input" type="number" placeholder="e.g. 5" min="0" />
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn-ghost" style={{ border: "1px solid var(--gray-300)", color: "var(--gray-600)" }} onClick={() => setStep(1)}>Back</button>
                <button className="btn-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setStep(3)}>Continue to KYC →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fadeIn">
              <div style={{ background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 12, padding: 16, marginBottom: 24 }}>
                <p style={{ color: "var(--navy-900)", fontSize: 14, fontWeight: 600 }}>Why do we need KYC?</p>
                <p style={{ color: "var(--gray-600)", fontSize: 13, marginTop: 4 }}>To build customer trust and ensure safety, all technicians must undergo a background check.</p>
              </div>
              
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Aadhaar Number</label>
                <input className="input" placeholder="XXXX XXXX XXXX" style={{ letterSpacing: 2 }} />
              </div>
              
              <div style={{ marginBottom: 32 }}>
                 <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 6 }}>Upload Selfie with Aadhaar Card</label>
                 <div style={{ border: "2px dashed var(--gray-300)", borderRadius: 12, padding: 24, textAlign: "center", cursor: "pointer", background: "var(--gray-50)" }}>
                   <span style={{ fontSize: 24, display: "block", marginBottom: 8 }}>📷</span>
                   <span style={{ fontSize: 14, fontWeight: 600, color: "var(--blue-500)" }}>Tap to Upload Photo</span>
                 </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button className="btn-ghost" style={{ border: "1px solid var(--gray-300)", color: "var(--gray-600)" }} onClick={() => setStep(2)}>Back</button>
                <button className="btn-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setSubmitted(true)}>Submit Application</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
