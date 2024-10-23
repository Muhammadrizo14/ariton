/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"OpenSans var", sans-serif',
      ],
    },
    container: {
      center: true,
      screens: {
        xl: '1272px',
        '2xl': '1272px',
      },

    },
    colors: {
      'brand-black': '#1C1C1C',
      'brand-white': '#FFFFFF',
      'brand-dark-grey': '#616161',
      'brand-light-grey': '#E5E5E5',
      'brand-light-grey2': '#F0F0F0',
      'brand-grey': '#8B8B8B',
      'brand-blue': '#007DEE',
      'brand-light-green': '#00B94A',
      'brand-purple': '#A468FF',
      'brand-red': '#ff413a',
    },
    extend: {},
  },
  plugins: [],
}