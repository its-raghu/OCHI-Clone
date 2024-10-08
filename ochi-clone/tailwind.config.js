/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Grotesk" : ["Founders_Grotesk"],
        "Neue" : ["Neue_Montreal"]
      }

    },
  },
  plugins: [],
}