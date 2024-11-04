/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mist-gray': '#E6E7E9',
        'mypurple': '#7D2AE8',
        'custom-black': '#121212',
        'about-purple': '#11081F'
      },
    },
  },
  plugins: [],
}

