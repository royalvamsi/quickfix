"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const SERVICES = [
  { id: "s1", name: "Electrician", icon: "⚡" },
  { id: "s2", name: "Plumber", icon: "🔧" },
  { id: "s3", name: "AC Repair", icon: "❄️" },
  { id: "s4", name: "Carpentry", icon: "🪚" },
];

export default function BookWizardPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [issueDesc, setIssueDesc] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploadedImage(true);
    }, 1500);
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setDiagnosis({
        issue: "Faulty MCB / Circuit Breaker",
        details: "The tripped breaker indicates overloading. Likely needs replacement of a 32A MCB.",
        cost: "₹450–₹700",
        duration: "45–60 min",
      });
      setStep(3);
    }, 2500);
  };

  const handleBook = () => {
    router.push("/book/QF2847/track");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-50)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <main className="container" style={{ flex: 1, padding: "104px 24px 64px", maxWidth: 720 }}>
        {/* Stepper */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40, position: "relative" }}>
          <div style={{ position: "absolute", top: 16, left: 0, right: 0, height: 2, background: "var(--gray-200)", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 16, left: 0, width: `${((step - 1) / 3) * 100}%`, height: 2, background: "var(--blue-500)", zIndex: 0, transition: "width 0.3s" }} />
          {[
            { n: 1, label: "Service" },
            { n: 2, label: "Details" },
            { n: 3, label: "Diagnosis" },
            { n: 4, label: "Schedule" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: step >= s.n ? "var(--blue-500)" : "var(--gray-200)", color: step >= s.n ? "white" : "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, marginBottom: 8, border: "4px solid var(--gray-50)", transition: "all 0.3s" }}>
                {step > s.n ? "✓" : s.n}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: step >= s.n ? "var(--navy-900)" : "var(--gray-400)" }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 32 }}>
          {step === 1 && (
            <div className="animate-fadeIn">
              <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Select Service</h1>
              <p style={{ color: "var(--gray-500)", fontSize: 14, marginBottom: 24 }}>What do you need help with?</p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                {SERVICES.map(s => (
                  <div key={s.id} onClick={() => setSelectedService(s.name)} style={{ border: selectedService === s.name ? "2px solid var(--blue-500)" : "1.5px solid var(--gray-200)", background: selectedService === s.name ? "rgba(37,99,235,0.05)" : "white", padding: 16, borderRadius: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "all 0.2s" }}>
                    <span style={{ fontSize: 24 }}>{s.icon}</span>
                    <span style={{ fontWeight: 600, color: "var(--navy-900)" }}>{s.name}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={!selectedService} onClick={() => setStep(2)}>Continue</button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fadeIn">
              <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Describe the Issue</h1>
              <p style={{ color: "var(--gray-500)", fontSize: 14, marginBottom: 24 }}>The more details you provide, the better our AI can diagnose it.</p>
              
              <textarea className="input" rows={4} placeholder="E.g., The main breaker keeps tripping when I turn on the AC..." value={issueDesc} onChange={e => setIssueDesc(e.target.value)} style={{ marginBottom: 24 }} />

              <div style={{ border: "2px dashed var(--gray-300)", borderRadius: 16, padding: 32, textAlign: "center", background: "var(--gray-50)", marginBottom: 32 }}>
                {uploadedImage ? (
                  <div>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#10b98120", color: "#10b981", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>📸</div>
                    <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>IMG_9281.jpg attached</p>
                  </div>
                ) : (
                  <div>
                    <span style={{ fontSize: 40, marginBottom: 12, display: "block" }}>📤</span>
                    <p style={{ fontWeight: 600, color: "var(--navy-900)", marginBottom: 8 }}>Upload Photo/Video</p>
                    <p style={{ color: "var(--gray-500)", fontSize: 13, marginBottom: 16 }}>Required for AI diagnosis</p>
                    <button className="btn-outline" onClick={handleUpload} disabled={uploading}>{uploading ? "Uploading..." : "Select File"}</button>
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                <button className="btn-ghost" style={{ border: "1px solid var(--gray-300)", color: "var(--gray-600)" }} onClick={() => setStep(1)}>Back</button>
                <button className="btn-primary" style={{ flex: 1, justifyContent: "center", background: uploadedImage ? "linear-gradient(135deg, #f97316, #ea6c10)" : "var(--gray-400)" }} disabled={!uploadedImage || analyzing} onClick={handleAnalyze}>
                  {analyzing ? "AI Analyzing..." : "Get AI Diagnosis ✨"}
                </button>
              </div>
            </div>
          )}

          {step === 3 && diagnosis && (
            <div className="animate-fadeIn">
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <span className="badge badge-green" style={{ marginBottom: 12 }}>🤖 AI Diagnosis Complete</span>
                <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>{diagnosis.issue}</h1>
              </div>

              <div style={{ background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 16, padding: 24, marginBottom: 24 }}>
                <p style={{ color: "var(--navy-900)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>{diagnosis.details}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <p style={{ color: "var(--gray-500)", fontSize: 12, marginBottom: 4 }}>Est. Cost</p>
                    <p style={{ fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>{diagnosis.cost}</p>
                  </div>
                  <div>
                    <p style={{ color: "var(--gray-500)", fontSize: 12, marginBottom: 4 }}>Est. Time</p>
                    <p style={{ fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>{diagnosis.duration}</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                <button className="btn-ghost" style={{ border: "1px solid var(--gray-300)", color: "var(--gray-600)" }} onClick={() => setStep(2)}>Back</button>
                <button className="btn-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setStep(4)}>Approve & Schedule</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fadeIn">
              <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)", marginBottom: 8 }}>Schedule Request</h1>
              <p style={{ color: "var(--gray-500)", fontSize: 14, marginBottom: 24 }}>When do you need the technician?</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                <div style={{ border: "2px solid var(--blue-500)", background: "rgba(37,99,235,0.05)", padding: "16px 20px", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--navy-900)" }}>🚨 Instant Booking</p>
                    <p style={{ fontSize: 13, color: "var(--gray-600)" }}>Technician arrives in ~15-30 mins</p>
                  </div>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", border: "6px solid var(--blue-500)", background: "white" }} />
                </div>
                <div style={{ border: "1.5px solid var(--gray-200)", padding: "16px 20px", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--navy-900)" }}>📅 Schedule for later</p>
                    <p style={{ fontSize: 13, color: "var(--gray-500)" }}>Choose a specific date and time</p>
                  </div>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", border: "2px solid var(--gray-300)", background: "white" }} />
                </div>
              </div>

              <div>
                <h3 style={{ fontWeight: 600, fontSize: 15, color: "var(--navy-900)", marginBottom: 12 }}>Service Address</h3>
                <div style={{ background: "var(--gray-50)", border: "1px solid var(--gray-200)", padding: 16, borderRadius: 12, marginBottom: 24 }}>
                  <p style={{ fontWeight: 600, color: "var(--navy-900)", fontSize: 14 }}>Home</p>
                  <p style={{ color: "var(--gray-600)", fontSize: 13 }}>Flat 402, Sai Ram Residency, Benz Circle<br/>Vijayawada, AP 520010</p>
                </div>
              </div>

              <button className="btn-primary" style={{ width: "100%", justifyContent: "center", height: 56, fontSize: 16 }} onClick={handleBook}>Confirm Booking</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
