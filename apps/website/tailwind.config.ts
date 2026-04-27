import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        surfaceSoft: "var(--color-surface-soft)",
        border: "var(--color-border)",
        borderStrong: "var(--color-border-strong)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        accentDim: "var(--color-accent-dim)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        faint: "var(--color-faint)",
        ok: "var(--color-ok)",
        warn: "var(--color-warn)",
        panel: "var(--color-surface)"
      },
      fontFamily: {
        sans: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        none: "0",
        sm: "1px",
        DEFAULT: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        "3xl": "2px",
        full: "999px"
      },
      boxShadow: {
        cyan: "0 0 0 1px rgba(53, 231, 255, 0.32), 0 0 22px rgba(53, 231, 255, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
