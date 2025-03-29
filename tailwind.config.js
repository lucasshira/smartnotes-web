/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "var(--color-cyan-light)",
        secondary: "var(--color-cyan-dark)",
        white: "var(--color-white)",
        black: "var(--color-black)",
      }
    },
  },
  plugins: [],
}