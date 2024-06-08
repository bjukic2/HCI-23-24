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
        'brand': {
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
  plugins: [],
};
export default config;
