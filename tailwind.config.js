/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        botgray: "#C3C3C3",
        botred: "var(--color-bot-red)",
      },
      fontFamily: {
        sans: ["Bebas-Regular"],
      },
    },
  },
  plugins: [],
};
