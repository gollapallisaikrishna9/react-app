/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        BgColor:'var(--color-BgColor)',
        TextColor:'var(--color-TextColor)',
        TextLight:'var(--color-TextLight)'
      }
    },
    screens:{
       'sm':'576px',
       'md':'768px',
       'lg':'1-24px',
       'xl':'1280px',
       '2xl':'1536px'
    }
  },
  plugins: [],
}

