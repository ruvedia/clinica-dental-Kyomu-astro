/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669', // Verde salud
          light: '#34D399',
          dark: '#065F46',
        },
        secondary: {
          DEFAULT: '#1E293B', // Azul Profesional
          light: '#334155',
          dark: '#0F172A',
        },
        accent: {
          DEFAULT: '#C84B31', // Tono teja para asegurar contraste AAA con texto blanco
          hover: '#A03A25',
        },
        base: {
          cream: '#F5F5DC', // Crema suave de fondo
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
