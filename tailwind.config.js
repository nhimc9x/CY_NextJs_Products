/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'primary': '#ff922c',
        'primary-light': '#ffeede',
        'secondary': '#54bf29',
        'secondary-light': '#eaffe2',
        'text-primary': '#333333',
      },
    },
  },
  plugins: [],
}

