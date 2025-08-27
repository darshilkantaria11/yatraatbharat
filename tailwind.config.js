// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
          b1: '#8b0000', 
          b2: '#E65100',
          b3: '#5b280a',
      }
    },
  },
  plugins: [],
}
