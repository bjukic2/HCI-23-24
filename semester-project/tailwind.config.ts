import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        'roboto-condensed': ['var(--font-roboto-condensed)'],
        inter: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
      colors: {
        brand: {
          50: '#FEE9F2',
          100: '#FED4E5',
          200: '#F3A1C1',
          300: '#F3A1C1',
          400: '#C70C63',
          500: '#BA0056',
          600: '#B10051',
          700: '#9A0034',
          800: '#780022',
          900: '#5B001C',
        },
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
