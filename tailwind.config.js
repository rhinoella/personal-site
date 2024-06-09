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
      },
      keyframes: {
        "slide-down-kf": {
          from: {
            "max-height": 0,
            "opacity": 0,
          },
          to: {
            "max-height": "1000px",
            "opacity": 1,
          }
        },
        "slide-up-kf": {
          from: {
            "max-height": "1000px",
            "opacity": 1,
          },
          to: {
            "max-height": "0px",
            "opacity": 0,
          }
        }
      },
      animation: {
        "slide-down": "slide-down-kf 0.2s ease-out",
        "slide-up": "slide-up-kf 0.2s ease-out",
      }
    },
  },
  plugins: [],
}

