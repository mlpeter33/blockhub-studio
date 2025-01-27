import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          cabinSketch: ["cabin-sketch", "sans-serif"],
          londrinaSketch: ["'Londrina Sketch'", "cursive"],
          shizuru: ["'Shizuru'", "cursive"],
          frederickaTheGreat: ["'Fredericka the Great'", "cursive"],
          justAnotherHand: ["'Just Another Hand'", "cursive"],
          redactedScript: ["'Redacted Script'", "cursive"],
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
},
  plugins: [],
} satisfies Config;
