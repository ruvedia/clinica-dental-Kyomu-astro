/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9488', // Sophisticated Teal (Kyomu)
          light: '#2DD4BF',   // Light Teal
          dark: '#115E59',    // Dark Teal
        },
        secondary: {
          DEFAULT: '#0F172A', // Deep Slate (Kyomu text)
          light: '#1E293B',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#0D9488', // Teal Accent
          hover: '#0F766E',
        },
        base: {
          cream: '#F8FAFC',   // Surface bg
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
