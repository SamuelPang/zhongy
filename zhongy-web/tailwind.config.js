/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 宣纸底色
        xuan: {
          50: '#faf6ec',
          100: '#f6f0e2',
          200: '#efe6d0',
          300: '#e5d8bc',
        },
        // 墨色
        mo: {
          50: '#f5f4f1',
          100: '#e5e2dc',
          300: '#8a857b',
          500: '#4d4941',
          700: '#33302b',
          900: '#262320',
        },
        // 朱砂
        zhusha: {
          50: '#f9efee',
          100: '#f0dcd8',
          300: '#d3a09a',
          500: '#a8322a',
          600: '#8f2b24',
          700: '#7a241e',
        },
        // 鎏金
        jin: {
          50: '#faf5ea',
          100: '#f0e3c4',
          300: '#d6b98a',
          500: '#b08d57',
          600: '#9a7a45',
        },
        // 黛青
        dai: {
          50: '#eef2f5',
          100: '#d9e2e8',
          300: '#9fb4c0',
          500: '#5a7487',
          600: '#465e70',
          700: '#384c5c',
        },
        // 竹青
        zhuqing: {
          50: '#f0f4ee',
          100: '#dde7d8',
          300: '#a8c0a0',
          500: '#6f8f6f',
          600: '#58755c',
        },
      },
      fontFamily: {
        kai: ['"Kaiti SC"', '"STKaiti"', '"KaiTi"', '"Noto Serif SC"', 'serif'],
        song: ['"Noto Serif SC"', '"Songti SC"', '"SimSun"', 'serif'],
      },
    },
  },
  plugins: [],
}
