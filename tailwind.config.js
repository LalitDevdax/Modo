/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        modo: {
          dark: '#0F172A',
          pink: '#EC4899',
          'pink-light': '#FCE7F3',
          purple: '#A855F7',
          cyan: '#38BDF8',
          'cyan-light': '#E0F2FE',
          bg: '#FFFFFF',
          slate: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
      },
      boxShadow: {
        'modo-orb': '0 20px 50px rgba(236, 72, 153, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.8)',
        'modo-card': '0 10px 30px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(15, 23, 42, 0.03)',
        'modo-card-hover': '0 20px 40px rgba(236, 72, 153, 0.15), 0 0 0 2px #EC4899',
      },
    },
  },
  plugins: [],
}
