/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //dark mode by the class not system's settings
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: ["light", "dark"] },
};
