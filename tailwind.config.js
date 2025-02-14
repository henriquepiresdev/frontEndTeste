const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange-': 'rgba(236, 103, 36, 1)',
        'white-': "#FFFFFF",
        'white-2': "#f5f5f5",
        'black-': "#000000",
        'gray-': "#666666",
      },
      fontFamily: {
        interTest: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
