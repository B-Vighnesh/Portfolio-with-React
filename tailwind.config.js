/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",   // <-- IMPORTANT (you are toggling dark mode with ThemeToggle)
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // optional nice font
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          dark: "#1d4ed8",    // blue-700
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),   // nice form inputs
    require("@tailwindcss/typography"), // better text
    require("@tailwindcss/aspect-ratio"), // responsive images
  ],
}
