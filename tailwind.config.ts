import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
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
      // Adding custom properties for 3D effects
      transform: ["group-hover"],
      perspective: {
        DEFAULT: "1000px", // default perspective for 3D effect
      },
      // Backface visibility for the card flip effect
      backfaceVisibility: {
        hidden: "hidden",
      },
      // Enabling rotate-Y 180 for 3D effect (you may need to use the custom rotation here)
      rotate: {
        "y-180": "rotateY(180deg)",
      },
    },
  },
  plugins: [],
} satisfies Config);
