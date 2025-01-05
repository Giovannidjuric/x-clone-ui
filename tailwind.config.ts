import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xsm: "500px",
        sm: "600px",
        mm: "690px",
        lg: "988px",
        xl: "1077px",
        xxl: "1265px",
      },
    },
  },
  plugins: [],
} satisfies Config;
