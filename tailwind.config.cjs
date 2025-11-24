/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F7F4EF',
          orange: '#FF7A1A',
          orangeHover: '#E6680C',
          dark: '#18181B',
          grey: '#E5E7EB',
          text: '#333333'
        },

        // These two are required for your latest index.html
        'off-white': '#F7F4EF',
        'navy-blue': '#18181B',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],

        // Required because your CSS uses "font-sans-body"
        'sans-body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
