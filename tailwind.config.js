/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#E85382",
        },
        secondary: {
          main: "#E1E1E1",
        },
      },
    },
  },
  plugins: [],
};
