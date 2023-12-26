/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: "hsl(47, 88%, 63%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 50%)",
          black: "hsl(0, 0%, 7%)",
        },
      },
    },
  },
  plugins: [],
};
