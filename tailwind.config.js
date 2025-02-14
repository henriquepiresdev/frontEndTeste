/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-': 'rgba(236, 103, 36, 1)',
        'white-': "#FFFFFF",
        'black-': "#000000",
      },
      fontFamily: {
        interTest: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
