import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a1628",
          800: "#0d1f3c",
          700: "#1a2d4e",
          600: "#1e3a6e",
          500: "#2a4a8a",
        },
        electric: {
          600: "#1d4ed8",
          500: "#2563eb",
          400: "#3b82f6",
          300: "#60a5fa",
        },
        brand: {
          orange: "#f97316",
          "orange-dark": "#ea6c10",
          "orange-light": "#fb923c",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        blue: "0 4px 20px rgba(37,99,235,0.25)",
        orange: "0 4px 20px rgba(249,115,22,0.30)",
        card: "0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
