/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js}' ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2d3c65',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #FFF9C4 0%, #FFE57F 20%, #FFD700 40%, #FFC700 60%, #FFB14E 80%, #FFD700 100%)',
      },
    },
  },
  plugins: [],
};