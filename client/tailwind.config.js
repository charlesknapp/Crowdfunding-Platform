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
        'tiny': { 
          'max': '390px' 
        },
        'mobile': { 
          'max': '472px' 
        },
        'mobile-s': { 
          'max': '320px' 
        },
        'mobile-m': { 
          'max': '375px' 
        },
        'mobile-l': { 
          'min': '390px', 'max': '639px'
        },
        'mobile-xl': { 
          'max': '568px' 
        },
        'tablet': { 
          'min': '768px' 
        },
        'tablet-s': { 
          'min': '639px', 'max': '767px'
        },
        'tablet-m': { 
          'min': '1023px' 
        },
        'laptop': { 
          'min': '1024px' 
        },
        'laptop-l': { 
          'min': '1140px' 
        },
        'laptop-xl': { 
          'min': '1440px' 
        },
        '4k': { 
          'min': '2560px' 
        },
        'mobile2': { 
          'min': '641px', 'max': '1028px' 
        },
        'mobile3': { 
          'min': '641px', 'max': '767px' 
        },
        'mobile4': { 
          'max': '639px' 
        },
      },
    },
  },
  plugins: [],
}
