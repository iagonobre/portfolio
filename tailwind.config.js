/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      baloo: ['var(--baloo-font)'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 80s linear infinite',
      },
      dropShadow: {
        purple: '0px 0px 150px rgba(107, 59, 139, 0.34)',
      },
      colors: {
        purple: '#6B3B8B',
      },
    },
  },
  plugins: [],
}
