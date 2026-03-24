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
        navy: "#0d1f3c",
        red: "#c0231e",
        "light-gray": "#f5f7fa",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        source: ["var(--font-source-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
