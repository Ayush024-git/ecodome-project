import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateBlue: {
          50: "#f6f8ff",
          100: "#eef2ff",
          200: "#dbe4ff",
          300: "#bdcdff",
          400: "#96afff",
          500: "#748ef5",
          600: "#5c71d7",
          700: "#4b5db1",
          800: "#414f8f",
          900: "#394473",
          950: "#1d233d",
        },
      },
      boxShadow: {
        halo: "0 24px 80px rgba(15, 23, 42, 0.22)",
        panel: "0 18px 60px rgba(15, 23, 42, 0.16)",
        soft: "0 12px 36px rgba(15, 23, 42, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(10px, -10px, 0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 13s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        "pulse-soft": "pulseSoft 8s ease-in-out infinite",
      },
      fontFamily: {
        sans: [
          '"SF Pro Display"',
          '"Segoe UI Variable Display"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ['"IBM Plex Mono"', '"SF Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
