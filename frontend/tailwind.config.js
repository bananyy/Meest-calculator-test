/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1210px',
      'md': '768px',
      'sm': {'max': '768px'},
      'xs': {'max': '320px'}

    },
    extend: {
      colors: {
        'mainblue': '#0054A4',
        'lightblue': 'hsl(213, 85%, 97%)',
        'lightblack': 'hsl(211, 18%, 23%)',
        'grey': '#EFF1F4',
        'darkgrey': '#E5E7EA',
        'green' : '#28D3A1'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontSize: {
      'sm-p': '13px',
      'base-p': '17px',
      'sm-h': '22px',
      'base-h': '40px',
    }
  },
  plugins: [],
}

