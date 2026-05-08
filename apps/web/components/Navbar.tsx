"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,22,40,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 12px rgba(37,99,235,0.4)"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: 22, color: "white", letterSpacing: "-0.02em" }}>
            Quick<span style={{ color: "#f97316" }}>Fix</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "8px 16px", color: "rgba(255,255,255,0.85)", fontWeight: 500,
              fontSize: 14, textDecoration: "none", borderRadius: 8, transition: "all 0.2s"
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/technician/register" className="btn-ghost" style={{ fontSize: 13, padding: "8px 14px" }}>
            Join as Pro
          </Link>
          <Link href="/login" className="btn-primary" style={{ padding: "9px 20px", fontSize: 14 }}>
            Get Started
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "white", padding: 8 }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              {mobileOpen
                ? <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                : <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "rgba(10,22,40,0.98)", borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 24px 24px"
        }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "12px 0", color: "rgba(255,255,255,0.85)", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="/technician/register" className="btn-ghost" style={{ textAlign: "center" }}>Join as Pro</Link>
            <Link href="/login" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>Get Started</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
