const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        body: {
          DEFAULT: '#000',
          btn: '#F3AA93',
          fontSize: '0.875rem',
        },

      },
      letterSpacing: {
        widest2: '0.2em',
      },

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "769px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
