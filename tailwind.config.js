/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.js',
    './src/TailWindComponent/*.js',
    './src/templates/HomeTemplate/Layout/Header/*.js',
    './src/pages/Home/*.js',
    './src/pages/Home/HomeMenu/HomeMenu.js',
    './src/templates/HomeTemplate/Layout/Footer/Footer.js',
    './src/components/Film/*.js',
    './src/pages/Detail/*.js',
    './src/templates/UserTemplate/*.js',
    './src/pages/Login/*.js',
    './src/pages/Checkout/Checkout.js',
    './src/components/Loading/Loading.js',
  ],
  theme: {
    extend: {
     
    },
    container: {
    },
  },
  plugins: [],
}
