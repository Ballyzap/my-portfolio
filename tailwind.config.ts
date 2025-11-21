import twTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import twAnimate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "sky-pattern": "url('/assets/image/pexels.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        lora: ["Lora", "serif"],
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        sourcesans: ["Source Sans Pro", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A1A1A", // Deep charcoal black base
          foreground: "#FFFFFF", // White text
          50: "#e3e5e7",
          100: "#c6c9cd",
          200: "#a9afb1",
          300: "#8d9598",
          400: "#707c7f",
          500: "#535c60",
          600: "#3e484b",
          700: "#2a3437",
          800: "#24262a",
          900: "#172022",
          950: "#0a1013",
        },
        secondary: {
          DEFAULT: "#FF6F61", // Warm coral accent
          foreground: "#FFFFFF", // White text
          50: "#e0ecf8",
          100: "#b3c9e1",
          200: "#80a6c9",
          300: "#4d83b2",
          400: "#1a60a1",
          500: "#022C7F",
          600: "#021f69",
          700: "#01194e",
          800: "#011238",
          900: "#010d23",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#D3D3D3",
        },
        gradient: {
          accent: "linear-gradient(135deg, #4A90E2 0%, #9013FE 100%)",
        },
        indigo: {
          DEFAULT: "#2C2E5B",
        },
        peach: {
          400: "#FFDFB9",
          500: "#F4A261",
          600: "#E08B47",
        },
        mint: {
          400: "#6EE7B7",
        },
        creamy: {
          offwhite: "#FDFCFA",
        },
        slate: {
          600: "#6B7280",
        },
        "peach-cream": {
          DEFAULT: "#FFEBD0",
        },
        "dark-cocoa": {
          DEFAULT: "#321B15",
        },
        "soft-ivory": {
          DEFAULT: "#ECE5D8",
        },
        "peach-cream-2": {
          DEFAULT: "#3F403B",
        },
        "graphite-gray": {
          DEFAULT: "#828AB",
        },
        "steel-blue": {
          DEFAULT: "#607EBC",
        },
        "soft-mint": {
          DEFAULT: "#D1E0D7",
        },
        "dark-emerald": {
          DEFAULT: "#1D503A",
        },
        "peach-puff": {
          DEFAULT: "#FEF1E1",
        },
        "mint-cream": {
          DEFAULT: "#F4FFF8",
        },
        "dark-plum": {
          DEFAULT: "#2A2539",
        },
        "spanish-gray": {
          DEFAULT: "#7C6767",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#1A1A1A",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#FF6F61",
        foreground: "#FFFFFF",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      white: colors.white,
      slate: colors.slate,
      transparent: colors.transparent,
      black: colors.black,
      current: colors.current,
    },
  },
  plugins: [twAnimate, twTypography],
};
export default config;
