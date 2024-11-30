/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Sora', 'sans-serif'], // Définit 'Sora' comme police principale
      },
      fontSize: {
        'xs': '0.75rem',   // 12px
        'sm': '0.875rem',  // 14px
        'base': '16px',    // 16px (taille par défaut)
        'lg': '1.rem',  // 18px
        'xl': '1rem',   // 20px
        '2xl': '1rem',   // 24px
        '3xl': '1.8rem', // 30px
        '4xl': '2rem',  // 36px
      },
    },
  },
  plugins: [],
}
