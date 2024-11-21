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
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
      colors: {
        'primary': '#FF1493',
        'secondary': '#1b1b19',
        'tertiary': '#242422',
        'holographic': '#C0C0C0',
        'text-primary': '#333333',
      },
    },
  },
  plugins: [],
}

