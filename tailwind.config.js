const flowbiteReact = require("flowbite-react/plugin/tailwindcss");
import { ThemeModeScript } from 'flowbite-react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
            ws: '#da373d',
          },
          keyframes: {
        rotateDiv: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
        
      },
      animation: {
        rotateDiv: 'rotateDiv 2s 0s linear infinite',
      }
    },
    
      
  },
  plugins: [flowbiteReact],
}