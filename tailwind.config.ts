/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        brandBg: '#0C0D10',       // Матовый глубокий графит
        brandBorder: '#1E293B',   // Тонкие архитектурные линии
        brandAccent: '#6366F1',   // Акцентный индиго
      }
    },
  },
  plugins: [],
}