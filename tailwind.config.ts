import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        current: "currentcolor",
        white: "#ffffff",
        black: "#000000",
        lightgrey: "#444245",
        grey: "rgba(0,0,0,0.55)",
        lightpink: "#f8f7f7",
        pink: "#df6751",
        bgpink: "rgba(223, 103, 81, 0.15)",
        darkpink: "#feedea",
        lightblack: "#333333",
        textbl: "#363636",
        footerlinks: "rgba(54,54,54,0.9)",
        bodertop: "rgba(105,120,131,0.16)",
        darkgrey: "rgba(44,9,11,0.8)",
      },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "4.25rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "6.75rem" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
  plugins: [],
};
export default config;
