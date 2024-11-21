import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dashSky: "#c3ebfa",
        dashSkyLight: "#edf9fd",
        dashPurple: "#cfceff",
        dashPurpleLight: "#f1f0ff",
        dashYellow: "#fae27c",
        dashYellowLight: "#fefce8"
      }
    }
  },
  plugins: []
} satisfies Config
