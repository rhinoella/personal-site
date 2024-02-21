/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': [ 'Nunito', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
      'serif': ['ui-serif', 'Georgia', ...defaultTheme.fontFamily.serif],
      'mono-numbers': ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', ...defaultTheme.fontFamily.mono],
      'mono-text': ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        "background": "#070810",
        "background-darker": "#020304",
        "foreground": "#1C1A36"
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      backgroundImage: {
        "gradientImage": "url('./src/assets/gradient.png')"
      },
      screens: {
        '3xl': '1800px',
      }
    },
  },
  plugins: [],
}

