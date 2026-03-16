/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)'],
        mono: ['var(--font-jetbrains)'],
        dm: ['var(--font-dm)'],
      },
      colors: {
        bg: '#080C18',
        bg2: '#0E1525',
        surface: '#141D2E',
        surface2: '#1C2840',
        border: '#263247',
        border2: '#2E3D56',
        orange: '#F97316',
        gold: '#F59E0B',
        green: '#10B981',
        text2: '#C4D0E3',
        text3: '#7A91B0',
      },
    },
  },
  plugins: [],
};
