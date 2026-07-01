import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D2043",
        "navy-light": "#132a52",
        gold: "#BFA06A",
        "gold-light": "#D4B88A",
        "gold-dark": "#9A7D4A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "var(--font-noto-kufi)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "var(--font-cairo)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.55)" },
          "100%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-down": "fade-in-down 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
