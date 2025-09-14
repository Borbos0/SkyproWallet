/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      notebook: '1280px',
      desktop: '1440px',
    },
    extend: {
      colors: {
        green: '#1FA46C',
        black: '#000000',
        grey: '#999999',
        correct: '#DBFFE9',
        uncorrect: '#F25050',
        background: '#F4F5F6',
      },
      fontFamily: {
        montserrat: ['Montserrat, sans-serif'],
      },
    },
  },
  plugins: [],
};
