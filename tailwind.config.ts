import type { Config } from 'tailwindcss'

export default {
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
      },
      fontFamily: {
        notoSansJp: ['var(--font-noto-sans-jp)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
} satisfies Config
