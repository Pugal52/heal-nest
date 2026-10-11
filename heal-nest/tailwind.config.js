/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: '#60351F',
        cocoa: '#422B20',
        ivory: '#FFFDF8',
        sand: '#E9D8C5',
        sage: '#78866B',
        terracotta: '#B87956',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(66,43,32,0.18)',
        lift: '0 18px 40px -14px rgba(66,43,32,0.28)',
      },
    },
  },
  plugins: [],
};
