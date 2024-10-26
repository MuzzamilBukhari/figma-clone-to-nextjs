import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["CustomFont", "sans-serif"],
      },
      fontWeight: {
        thin: "300",
        light: "400",
        normal: "500",
        medium: "600",
        bold: "700",
      },
      boxShadow: {
        "custom-down": "0px 6px 6px 0px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
