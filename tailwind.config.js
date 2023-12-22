/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: ["prettier-plugin-tailwindcss"],
  theme: {
    extend: {
      boxShadow: {
        // One example using shadow-lg -> shadow-lg-invert
        "lg-invert":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};
