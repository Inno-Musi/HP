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
        moss: '#3D963B',
        lightBlue: '#F0F4F8',
        vividBlue: '#2B6CB0',
        // design refresh — warm editorial palette
        ivory: '#F7F3EC',
        sand: '#EFE8DA',
        paper: '#FCFAF5',
        ink: '#2A2620',
        muted: '#6E675B',
        hairline: '#E0D8C8',
        brass: '#B0894F',
        clay: '#BB6A45',
      },
      fontFamily: {
        sawarabiGothic: ['var(--font-sawarabi-gothic)'],
        roboto: ['var(--font-roboto)'],
        display: ['var(--font-display)'],
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
