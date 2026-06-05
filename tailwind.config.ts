import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        surface: '#08090b',
        surface2: '#0f1115',
        text: '#f7f7f2',
        muted: '#a6abb4',
        stroke: '#242833',
        accent: {
          1: '#89aacc',
          2: '#4e85bf',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        display: ['var(--font-dm-serif)'],
      },
    },
  },
  plugins: [],
};

export default config;
