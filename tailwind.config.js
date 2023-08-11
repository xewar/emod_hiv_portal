/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "neue-haas": ["neue-haas-grotesk-display", "sans-serif"],
        synthese: ["synthese", "sans-serif"],
      },
    },
  },
  plugins: [],
};
