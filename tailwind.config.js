/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

