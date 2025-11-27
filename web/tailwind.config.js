/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-bg': '#030014',       // Fondo Negro Espacial
        'ai-card': '#0F0B29',     // Color Tarjetas
        'ai-primary': '#7000FF',  // Morado Eléctrico
        'ai-secondary': '#00C2FF' // Cian Futuro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}