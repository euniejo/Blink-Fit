/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7EB776',
        'text-black': '#111111',
        'text-dark-gray': '#626262',
        'bg-color': '#FCFCFC',
        'bg-color-light-gray': '#F5F5F5',
        'bg-color-gray': '#EDEDED',
      },
    },
  },
  plugins: [],
}

