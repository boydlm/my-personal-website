/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  extend: {
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#E3EDDC',
      'secondary': '#000000',
      'darkerp': '#DC87D9', 
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"']
    }
  },
}

export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
]





