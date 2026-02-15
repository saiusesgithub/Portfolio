/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'concrete': '#E6E6E6',
        'rebar': '#1A1A1A',
        'safety-orange': '#FF3300',
        'beam-black': '#000000',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'tech': ['Space Mono', 'monospace'],
      },
      letterSpacing: {
        'tight-custom': '-0.04em',
      },
    },
  },
  plugins: [],
}
