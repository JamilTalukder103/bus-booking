/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'custom-green': 'rgba(29, 209, 0, 0.40)',
        'custom-green': '#1DD100',
        'custom-bg': 'rgba(29, 209, 0, 0.10)',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans - serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

