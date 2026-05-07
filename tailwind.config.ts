import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        // Teal-cyan accent palette
        accent: {
          DEFAULT: "#2DD4BF", // teal-400
          light: "#5EEAD4",   // teal-300
          dark: "#0D9488",    // teal-600
        },
        surface: {
          dark: "#0F1117",    // deepest background
          card: "#161B27",    // card background
          border: "#1E2736",  // border / divider
          hover: "#1C2333",   // hover state
        },
        code: "#A78BFA",      // purple for code accent
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "gradient-x": "gradient-x 4s ease infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
