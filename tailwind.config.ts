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
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
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
        50: "#e3e5e7", // lightest shade
        100: "#c6c9cd",
        200: "#a9afb1",
        300: "#8d9598",
        400: "#707c7f",
        500: "#535c60", // base color
        600: "#3e484b",
        700: "#2a3437",
        800: "#24262a",
        900: "#172022",
        950: "#0a1013", // darkest shade
        DEFAULT: "#535c60",
      },
      secondary: {
        50: "#e0ecf8", // Lightest shade
        100: "#b3c9e1",
        200: "#80a6c9",
        300: "#4d83b2",
        400: "#1a60a1",
        500: "#022C7F", // Base color
        600: "#021f69",
        700: "#01194e",
        800: "#011238",
        900: "#010d23", // Darkest shade
        DEFAULT: "#022C7F", // Base color
      },
      gray: {
        50: "#f9fafb", // very light gray
        100: "#f3f4f6", // light gray
        200: "#e5e7eb", // lighter gray
        300: "#d1d5db", // medium light gray
        400: "#9ca3af", // medium gray
        500: "#6b7280", // gray
        600: "#4b5563", // dark gray
        700: "#374151", // darker gray
        800: "#1f2937", // very dark gray
        900: "#111827", // almost black
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
