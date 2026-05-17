module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sapphire: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        arctic: {
          DEFAULT: '#F8FAFC',
          light: '#FFFFFF',
        },
        champagne: {
          DEFAULT: '#D4AF37',
          light: '#E5C76B',
        },
        teal: {
          DEFAULT: '#2DD4BF',
        },
        slate: {
          DEFAULT: '#64748B',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display", serif'],
        inter: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [],
}
