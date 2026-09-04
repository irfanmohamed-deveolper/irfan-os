module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: '#00f5ff',
        purple: '#8a2be2',
        glass: 'rgba(255,255,255,0.04)'
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
}
