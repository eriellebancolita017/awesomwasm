/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#70BCFF",
        pink: "#FC8ADC",
        yellow: "#FBEF5A",
        navy: "#7954FF",
        black: "#1F1F1F",
        lightNavy: "#8A37F4",
        grey: "#3A3A35",
        darkGrey: '#1A1D26',
        hotPink: '#FF8B89',
      },
      boxShadow: {
        button: 'inset 2px 2px 6px rgba(0, 255, 240, 0.9), 4px 4px #3A3A35',
        buttonHover: 'inset 1px 1px 6px rgba(0, 255, 240, 0.9), 6px 6px #3A3A35',
        buttonActive: 'inset 4px 4px 6px rgba(0, 255, 240, 0.9), 2px 2px #3A3A35',
        card: '4px 4px #000',
      },
      fontFamily: {
        ice: "'Iceland', cursive",
        montserrat: "'Montserrat', sans-serif",
        inter: "'Inter', sans-serif",
      },
      textShadow: {
        header: '2px 0 #8a37f4, -2px 0 #8a37f4, 0 2px #8a37f4, 0 -2px #8a37f4, 1px 1px #8a37f4, -1px -1px #8a37f4, 1px -1px #8a37f4, -1px 1px #8a37f4, 4px 5px #1f1f1f, 2px 5px #1f1f1f, 4px 3px #1f1f1f',
      },
      backgroundImage: {
        diagnal: 'linear-gradient(35deg, #7954FF 56%, #FBEF5A 38%)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
};
