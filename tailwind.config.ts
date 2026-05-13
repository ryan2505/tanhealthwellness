import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — matches Tan Health current identity
        brand: {
          navy:    "#0B1F3A",
          teal:    "#0D7377",
          tealLight: "#14A8AD",
          tealDark: "#095E62",
          gold:    "#C9A84C",
          goldLight: "#E8C56B",
          cream:   "#F8F6F1",
          white:   "#FFFFFF",
          gray:    {
            50:  "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.875rem, 4vw, 3rem)",  { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "section": "7rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "premium": "0 25px 80px -12px rgba(11, 31, 58, 0.18)",
        "premium-sm": "0 8px 30px -6px rgba(11, 31, 58, 0.14)",
        "teal-glow": "0 0 40px rgba(13, 115, 119, 0.25)",
        "teal-glow-sm": "0 0 20px rgba(13, 115, 119, 0.15)",
        "gold-glow": "0 0 30px rgba(201, 168, 76, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #0B1F3A 0%, #0D7377 100%)",
        "gradient-hero": "linear-gradient(to bottom right, rgba(11,31,58,0.95) 0%, rgba(13,115,119,0.7) 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "noise": "url('/noise.svg')",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(13,115,119,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(13,115,119,0.6)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backdropBlur: {
        "xs": "2px",
      },
    },
  },
  plugins: [],
};

export default config;
