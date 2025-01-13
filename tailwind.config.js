/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstBlue: '#364F74',
        evenBlue: '#B3C6DB',
        oddYellow: '#FFF5C7',
        lastBlue: '#1A2334'
      },
      fontFamily: {
        lacquer: ['Lacquer', 'sans-serif']
      },
      dropShadow: {
        'custom': '0 0 50px rgba(0, 0, 0, 0.485)',
        'custom-hov': '0 0 50px rgba(201, 235, 255)',
        'firstBlue': '0 0 50px rgba(54, 79, 116)',
        'evenBlue': '0 0 50px rgba(179, 198, 219)',
        'oddYellow': '0 0 50px rgba(255, 245, 199)',
        'lastBlue': '0 0 50px rgba(26, 35, 52)',
      },
    },
  },
  plugins: [],
}