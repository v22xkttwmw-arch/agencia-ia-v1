/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#ffffff',       // Blanco puro de fondo
        'brand-text': '#111827',     // Texto casi negro (muy legible)
        'brand-purple': '#6200EA',   // El MORADO INTENSO de la barra de estadísticas
        'brand-orange': '#F59E0B',   // El NARANJA del botón "Start Working Smarter"
        'brand-teal': '#0ea5e9',     // El AZUL/CIAN de los iconos del FAQ
        'brand-light': '#F3F4F6',    // Gris muy suave para fondos secundarios
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente limpia
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Sombra suave para tarjetas blancas
      }
    },
  },
  plugins: [],
}