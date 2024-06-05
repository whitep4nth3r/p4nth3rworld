/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "from-indigo-400",
    "from-emerald-400",
    "from-cyan-400",
    "from-yellow-400",
    "from-lime-400",
    "from-lime-600",
    "via-lime-800",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
