import type { Config } from 'tailwindcss';

const config: Config = {
  // daisyUI config
  daisyui: {
    themes: {
      mytheme: {
        'zelena-100': '#7BCB9E',
        'zelena-200': '#327435',
        'zelena-300': '#183E28',
        roza: '#E94D77',
      },
    },
  },

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
        zelena: {
          100: '#7BCB9E',
          200: '#327435',
          300: '#183E28',
        },
        roza: '#E94D77',
        bez: '#FEEBDC',
      },
    },
  },
  plugins: [require('daisyui')],
};

export default config;
