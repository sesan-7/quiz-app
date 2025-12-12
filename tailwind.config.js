/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#eaf9fb", // tweak to match Figma
        primary: "#0f6b7a",
        accent: "#bfeaf6",
        gradientStart: "#15313D",
        gradientEnd: "#3CABDA",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
        serifDisplay: ['"DM Serif Display"', "serif"],
      },
      borderRadius: {
        "xl-2xl": "24px",
      },
    },
  },
  plugins: [],
};
