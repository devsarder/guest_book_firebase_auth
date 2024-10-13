/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        facebook: "#1877F2", // Facebook Blue
      },
    },
  },
  plugins: [],
};
