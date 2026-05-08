"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return alert("Please enter a valid phone number");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 1000);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== "123456") return alert("Invalid OTP. Try 123456");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Set a mock user token (in a real app, use Context/Redux)
      localStorage.setItem("qf_token", "demo_customer_token");
      router.push("/dashboard");
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("qf_token", "demo_customer_token");
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex" }}>
      {/* Left - Visual */}
      <div style={{ flex: 1, background: "linear-gradient(135deg, #0a1628, #1a2d6e)", display: "none", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }} className="lg-flex">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 480, textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ width: 80, height: 80, borderRadius: 24, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", boxShadow: "0 12px 32px rgba(37,99,235,0.4)" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 40, color: "white", marginBottom: 16 }}>Welcome to QuickFix</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.6 }}>Find trusted local technicians, get instant AI diagnosis, and transparent pricing.</p>
        </div>
      </div>

      {/* Right - Form */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "white", padding: 24 }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ marginBottom: 40 }}>
            {/* Mobile Logo */}
            <div className="lg-hidden" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 24, color: "var(--navy-900)" }}>QuickFix</span>
            </div>

            <h2 style={{ fontFamily: "Plus Jakarta Sans,sans-serif", fontWeight: 800, fontSize: 28, color: "var(--navy-900)", marginBottom: 8 }}>
              {step === "phone" ? "Log in or sign up" : "Verify your number"}
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: 15 }}>
              {step === "phone" ? "Use your phone number to continue." : `Enter the 6-digit OTP sent to ${phone}`}
            </p>
          </div>

          {step === "phone" ? (
            <form onSubmit={handleSendOtp}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 8 }}>Phone Number</label>
                <div style={{ display: "flex", alignContent: "center" }}>
                  <div style={{ padding: "12px 16px", background: "var(--gray-50)", border: "1.5px solid var(--gray-200)", borderRight: "none", borderTopLeftRadius: 8, borderBottomLeftRadius: 8, color: "var(--gray-600)", fontWeight: 500 }}>+91</div>
                  <input
                    type="tel"
                    className="input"
                    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                    placeholder="Enter mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: 24, height: 48 }} disabled={loading}>
                {loading ? "Sending..." : "Continue"}
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }} />
                <span style={{ color: "var(--gray-400)", fontSize: 12, fontWeight: 600 }}>OR</span>
                <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }} />
              </div>

              <button type="button" onClick={handleGoogleLogin} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, padding: 14, background: "white", border: "1px solid var(--gray-200)", borderRadius: 8, cursor: "pointer", fontWeight: 600, color: "var(--gray-700)", transition: "all 0.2s" }} disabled={loading}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginBottom: 8 }}>One Time Password</label>
                <input
                  type="text"
                  className="input"
                  placeholder="123456"
                  maxLength={6}
                  style={{ letterSpacing: 8, fontSize: 20, textAlign: "center", height: 56 }}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  autoFocus
                />
                <p style={{ color: "var(--gray-500)", fontSize: 13, marginTop: 12, textAlign: "center" }}>
                  Use <span style={{ fontWeight: 600 }}>123456</span> for demo
                </p>
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: 20, height: 48 }} disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <div style={{ textAlign: "center" }}>
                <button type="button" onClick={() => setStep("phone")} style={{ background: "none", border: "none", color: "var(--blue-500)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Change Number
                </button>
              </div>
            </form>
          )}

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "var(--gray-500)" }}>
              By confirming, you agree to our <Link href="#" style={{ color: "var(--blue-500)" }}>Terms of Service</Link> and <Link href="#" style={{ color: "var(--blue-500)" }}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .lg-flex { display: flex !important; }
          .lg-hidden { display: none !important; }
        }
      `}</style>
    </main>
  );
}
