import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B1215",
      },
      fontFamily: {
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
