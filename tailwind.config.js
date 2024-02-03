/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#070810",
        "background-darker": "#020304",
        "foreground": "#1C1A36"
      }
    },
  },
  plugins: [],
}

