import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "QuickFix - Trusted Home Repair Services",
    template: "%s | QuickFix",
  },
  description:
    "QuickFix connects you with verified local technicians for electrical, plumbing, AC, carpentry and appliance repair services. Instant booking, transparent pricing, live tracking across Vijayawada, Guntur, and Visakhapatnam.",
  keywords: [
    "home repair Vijayawada",
    "electrician Guntur",
    "plumber Visakhapatnam",
    "AC repair",
    "home services",
    "technician booking",
    "QuickFix",
  ],
  openGraph: {
    title: "QuickFix - Trusted Home Repair Services",
    description: "Verified technicians, transparent pricing, live tracking.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
