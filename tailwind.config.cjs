/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shallow-dark": "#222A39",
        "shallow-deep": "#1D2331",
        "shallow-sky": "#8FB1FF",
      },
    },
  },
  plugins: [],
};
