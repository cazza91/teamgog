/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundSize: {
        '300': '300% 300%'
      },
      backgroundPosition: {
        '300y': '300%'
      }},
  },
  plugins: [],
  safelist: [
    'bg-fuchsia-900',
    'bg-lime-500'
  ]
};
