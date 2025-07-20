/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'emerald-25': '#f0fdf4',
        'green-25': '#f7fef7',
        'teal-25': '#f0fdfa',
        'blue-25': '#eff6ff',
        'cyan-25': '#ecfeff',
        'purple-25': '#faf5ff',
        'pink-25': '#fdf2f8',
        'orange-25': '#fff7ed',
        'red-25': '#fef2f2',
        'yellow-25': '#fefce8'
      }
    },
  },
  plugins: [],
};