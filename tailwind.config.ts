import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        panel: "#0f1a2e",
        panel2: "#13203a",
        border: "#213152",
        gold: "#f2b84b",
        gold2: "#e0a63a",
        mint: "#3ddc97",
        danger: "#f2555a",
        muted: "#93a3c4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
