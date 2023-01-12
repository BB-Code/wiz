/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'extend': '#222530',
        'note': '#F5F8FB',
        'day': '#07142A',
        'hover': '#DFE8F0'
      },
      colors: {
        'extend': '#C0D2EB',
        '708': '#7084A4'
      },
      scale: {
        '999': '999'
      },
      minWidth: {
        'panel': '225px',
        'note-nav': '208px'
      }
    },
  },
  plugins: [],
}
