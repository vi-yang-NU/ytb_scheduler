/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'circle-fill': {
          '0%': {
            clipPath: 'inset(0 100% 0 0)' // Fully clipped (no blue visible)
          },
          '100%': {
            clipPath: 'inset(0 0 0 0)' // Fully revealed (blue circle complete)
          }
        }
      },
      animation: {
        'circle-fill': 'circle-fill 1s ease-in-out forwards'
      }
    }
  },
  plugins: []
}
