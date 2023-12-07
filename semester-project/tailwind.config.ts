import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        "brand-purple": {
          50: "#F4E6F1",
          100: "#EFDAE9",
          200: "#DDB2D2",
          300: "#92056E",
          400: "#830563",
          500: "#750458",
          600: "#6E0453",
          700: "#580342",
          800: "#420231",
          900: "#330227",
        },
        "brand-orange": {
          50: "#FFF5E6",
          600: "#E88C00",
          800: "#8C5500",
        },
      },
    },
  },
  plugins: [],
};
export default config;
