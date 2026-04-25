import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        panel: "var(--color-panel)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accentDim: "var(--color-accent-dim)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        warn: "var(--color-warn)",
        ok: "var(--color-ok)"
      },
      boxShadow: {
        cyan: "0 0 0 1px rgba(53,231,255,0.28), 0 0 18px rgba(53,231,255,0.24)"
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(8px)" }
        },
        glowPulse: {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "0.95" }
        },
        floatGrid: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(40px,20px,0)" }
        }
      },
      animation: {
        scanline: "scanline 6s linear infinite",
        glowPulse: "glowPulse 2.2s ease-in-out infinite",
        floatGrid: "floatGrid 24s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
