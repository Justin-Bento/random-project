/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ...
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
          // ...
        ],
      },
      blur: {
        hero: "499.5px"
      }
    },
  },
  plugins: [],
};
