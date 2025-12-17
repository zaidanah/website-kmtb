import type { Config } from "tailwindcss";

const config: Config = {
  // Bagian ini memberi tahu Tailwind file mana yang harus di-styling
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Tambahan untuk keamanan
  ],
  theme: {
    extend: {
      colors: {
        kmtb: {
          black: "#000000",
          navy: "#202E50",
          blue: "#325980",
          gold: "#D4C2B0",
          grey: "#77787B",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-fira-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;