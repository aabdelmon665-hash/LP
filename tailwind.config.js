/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef9ff',
          100: '#d8f0ff',
          200: '#b6e4ff',
          300: '#82d2ff',
          400: '#4ab9f7',
          500: '#1ca0e3',
          600: '#0e84c4',
          700: '#0c699e',
          800: '#105682',
          900: '#13496c',
        },
        navy: {
          DEFAULT: '#0b2545',
          50: '#e7edf5',
          100: '#c3d2e6',
          800: '#0f2a4a',
          900: '#0b2545',
        },
      },
    },
  },
  plugins: [],
}