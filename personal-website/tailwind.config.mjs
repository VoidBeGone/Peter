/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "Avar(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],  
        cursive: ['Cedarville Cursive', 'cursive'], 
      },
    },
  },
  plugins: [],
};
