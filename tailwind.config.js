/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['MS Sans Serif', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'pixelated': 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBgYAAAAAUAAYuz1GwAAAAASUVORK5CYII=")'
      }
    },
  },
  plugins: [],
}