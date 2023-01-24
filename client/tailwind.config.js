/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
        navbar: '10px 10px 20px rgba(2, 2, 2, 0.80)',
      },
      backgroundImage: {
        campaignProgress: "url(https://media.tenor.com/aV0h3VAHWUAAAAAC/gradient.gif)",
      },
      screens: {
        'mobile': { 
          'max': '640px' 
        },
        'mobile2': { 
          'min': '641px', 'max': '1028px' 
        }
      },
    },
  },
  plugins: [],
}
