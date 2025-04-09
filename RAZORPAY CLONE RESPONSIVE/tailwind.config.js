/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        'zoom-in-out': 'zoomInOut 1.5s ease-in-out infinite',
      },
      keyframes: {

        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },

    },
  },
  plugins: [],
}