/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A2540",
          "navy-dark": "#071B2F",
          "navy-light": "#153658",
          cyan: "#06B6D4",
          "cyan-glow": "#00E5FF",
          "cyan-light": "#E0F7FA",
          blue: "#2563EB",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(10, 37, 64, 0.08)",
        "luxury-hover": "0 20px 40px -15px rgba(6, 182, 212, 0.25)",
        "glow-cyan": "0 0 25px rgba(6, 182, 212, 0.35)",
        "glow-navy": "0 15px 35px rgba(10, 37, 64, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "circuit-pattern": "radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.15) 1px, transparent 0)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
