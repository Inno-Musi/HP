import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: '#1B264F',
        passion: '#FF4B4B',
        error: '#D8000C',
        gray: '#B0BEC5',
        emerald: '#2F4F4F',
        moss: '#315E3D',
      },
      fontFamily: {
        notoSansJp: ['var(--font-noto-sans-jp)'],
        roboto: ['var(--font-roboto)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config
