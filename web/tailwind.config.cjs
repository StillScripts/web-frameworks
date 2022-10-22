/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        react: "#61DAFB",
        vue: "#41B883",
        svelte: "#FF3E00",
        solid: "#3763A3",
        preact: "#673AB8",
        lit: "#00E8FF",
      },
    },
  },
  safelist: [
    "text-react",
    "text-vue",
    "text-solid",
    "text-svelte",
    "text-preact",
    "text-lit",
    "ring-react",
    "ring-vue",
    "ring-solid",
    "ring-svelte",
    "ring-preact",
    "ring-lit",
  ],
  plugins: [],
};
