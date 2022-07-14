/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iranYekanWebMedium: ["iranYekanWebMedium", "sans-serif"],
        iranYekanWebSmall: ["iranYekanWebSmall", "sans-serif"],
        iranYekanWebLarge: ["iranYekanWebLarge", "sans-serif"],
      },
    },
  },
  plugins: [],
};
