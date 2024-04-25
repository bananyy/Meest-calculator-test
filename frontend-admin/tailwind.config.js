/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainblue: "#2E73B4",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
