/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        12: "12px",
        16.84: "16.84px",
        20: "20px",
      },
      colors: {
        rock: {
          DEFAULT: "#DB2E4D",
          secondary: "#9D1634",
        },
        paper: {
          DEFAULT: "#4664F4",
          secondary: "#2A45C2",
        },
        scissors: {
          DEFAULT: "#EB9F0E",
          secondary: "#C76C1B",
        },
        lizard: {
          DEFAULT: "#834EE3",
          secondary: "#5F37A8",
        },
        spock: {
          DEFAULT: "#3FB7CD",
          secondary: "#2D8DAB",
        },
        background: {
          DEFAULT: "#BABFD4",
        },
      },
    },
  },
  plugins: [],
};
