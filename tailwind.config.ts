import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          purple: "hsl(var(--neon-purple))",
          blue: "hsl(var(--neon-blue))",
          green: "hsl(var(--neon-green))",
          pink: "hsl(var(--neon-pink))",
          orange: "hsl(var(--neon-orange))",
        },
        gym: {
          gold: "hsl(var(--gym-gold))",
          red: "hsl(var(--gym-red))",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px hsl(var(--primary))" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px hsl(var(--primary))" },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink": {
          "50%": { borderColor: "transparent" },
        },
        "lift-weight": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-5px) rotate(-5deg)" },
          "75%": { transform: "translateY(-5px) rotate(5deg)" },
        },
        "pixel-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "slide-up": {
          "from": { opacity: "0", transform: "translateY(20px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "from": { opacity: "0", transform: "translateX(20px)" },
          "to": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "from": { opacity: "0", transform: "scale(0.9)" },
          "to": { opacity: "1", transform: "scale(1)" },
        },
        "fill-bar": {
          "from": { width: "0%" },
          "to": { width: "var(--fill-width)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "typing": "typing 3s steps(40) forwards",
        "blink": "blink 0.75s step-end infinite",
        "lift-weight": "lift-weight 2s ease-in-out infinite",
        "pixel-bounce": "pixel-bounce 0.5s ease-in-out",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "fill-bar": "fill-bar 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
