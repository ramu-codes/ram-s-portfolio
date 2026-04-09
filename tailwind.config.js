/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary font for body & headings
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        // Optional secondary font for headings (serif)
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Optional: modern color palette for your portfolio
        primary: '#4F46E5', // Indigo-600
        secondary: '#6366F1', // Indigo-500
        accent: '#F59E0B', // Amber-500
      },
    },
  },
  plugins: [],
};
