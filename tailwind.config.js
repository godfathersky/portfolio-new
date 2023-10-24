/** @type {import('tailwindcss').Config} */
module.exports = {
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
        '200vh': '200vh'
      }
    },
  },
  plugins: [],
}

