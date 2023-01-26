/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        bebas: ['"Bebas Neue"'],
        mons:["Montserrat"]
      },
    },
    screens:{
      'ss': '200px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      'lg':'1024px',
      'xl': '1280px',
    }
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
