/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["/public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background-color-1': '#EFE9E1',
        'background-color-2': '#000000'
      },
      spacing: {
        '3vh': '3vh',
        '97vh': '97vh',
        '200vh': '200vh',
        '125px': '125px'
      },
      gridTemplateColumns: {
        'three-cols': 'repeat(3, 30%)'
      },
      gridTemplateRows: {
        'two-rows': 'repeat (2, 30%)'
      }
    },
  },
  plugins: [],
}

