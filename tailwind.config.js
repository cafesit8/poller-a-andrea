/** @type {import('tailwindcss').Config} */

// import type withMT from '@material-tailwind/react/utils/withMT'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#141211',
        'primary': '#f38a16',
        'secondary': '#f2881a',
      }
    },
  },
  plugins: [],
}

