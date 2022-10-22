/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  plugins: [],
  theme: {
    /* remove tailwind css and Mantine conflict */
    screens: {
      lg: "1200px",
      md: "992px",
      sm: "768px",
      xl: "1400px",
      xs: "576px",
    },
  },
};
