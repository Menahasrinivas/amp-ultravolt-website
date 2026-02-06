/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 6px rgba(59,130,246,0.5)",
          },
          "50%": {
            boxShadow: "0 0 18px rgba(59,130,246,0.9)",
          },
        },
      },
      animation: {
        glow: "glow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};