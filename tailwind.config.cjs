/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,mjs}"],
  theme: {
    extend: {
      colors: {
        // Brand palette ("Henna Rani"): deep wine + marigold + blush on warm ivory.
        // Token names are kept from v1 so components didn't need renaming:
        //   mehndi = deep wine/maroon (primary dark)   gold = saffron accent (text on light)
        //   gold-light = marigold (accent on dark)     cream/sand = blush / peach
        mehndi: { DEFAULT: "#5E1533", deep: "#3E0B22", soft: "#7F2548" },
        ivory: "#FFF8EE", // warm ivory (page background)
        cream: "#FCE8DB", // soft peach blush (alternate sections)
        sand: "#F2C6AC",
        gold: { DEFAULT: "#B84E0A", light: "#F4B83F" },
        ink: { DEFAULT: "#2E1119", soft: "#6B4A52" }, // dark plum-brown (text)
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease both",
      },
    },
  },
  plugins: [],
};
