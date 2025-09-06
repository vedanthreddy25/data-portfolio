/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',  // Enable dark mode via a CSS class (you can toggle it)
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#2dd4bf', // adjust teal shades if you want custom colors
          500: '#14b8a6',
          600: '#0d9488',
        },
        gray: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      }
    },
  },
  plugins: [],
}
