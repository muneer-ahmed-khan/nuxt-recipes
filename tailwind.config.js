/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": "#F79F1A",
        "apple-green": "#046E18",
        "dire-wolf": "#292727",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
