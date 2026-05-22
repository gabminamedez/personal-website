import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FCF7D6",
          2: "#F7F1C2",
          3: "#EEE6A8",
        },
        brand: {
          blue: "#4B93DB",
          "blue-2": "#2F7BC9",
          "blue-3": "#BFD8F1",
          "blue-soft": "#DCE9F6",
        },
        ink: {
          DEFAULT: "#111111",
          2: "#2a2a2a",
          3: "#5a5a5a",
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
