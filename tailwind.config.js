/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-one': '#CDA274',
        'primary-two': '#292F36',
        'primary-three': '#F4F0EC',
        'dark-text': '#1F1F1F',
        'light-gray': '#F6F6F6',
        'dark-gray': '#4D5053',
      },

      fontSize: {
        20: ['20px'],
        22: ['22px'],
        28: ['28px'],
        32: ['32px'],
        36: ['36px'],
        40: ['40px'],
        52: ['52px'],
        56: ['56px'],
        85: ['85px', '106.25px'],
      },
    },
  },
  plugins: [],
}
