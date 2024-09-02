/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        'brown-main': '#8D4926',
        'golden-main': '#FEC23F',
        'medium-orange': '#E28100',
        'light-orange': '#FF9700',
        'start-orange': '#FFA800',
        'steel-blue': '#4682B4',
        'light-tan': '#D2B48C',
        'light-gray': '#F5F5F5',
        'slate-gray': '#2F4F4F',
        'brown-dark': '#523312',
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
        'lg-new': '1116px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};