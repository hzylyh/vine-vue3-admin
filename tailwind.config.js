/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // 解决naive和tailwind样式冲突
  // corePlugins:{
  //   preflight: false
  // },
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1.2s infinite steps(1, start)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { 'background-color': 'currentColor' },
          '50%': { 'background-color': 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
