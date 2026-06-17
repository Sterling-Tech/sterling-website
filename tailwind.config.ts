import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dim-black": "#0C0E12",
        primary: "#FFDE38",
      },
      fontSize: {
        "heading-two": "5rem",
        "heading-three": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
