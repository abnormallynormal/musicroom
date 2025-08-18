/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      thin: ["Outfit_100Thin"],
      extralight: ["Outfit_200ExtraLight"],
      light: ["Outfit_300Light"],
      sans: ["Outfit_400Regular"], // Default font
      medium: ["Outfit_500Medium"],
      semibold: ["Outfit_600SemiBold"],
      bold: ["Outfit_700Bold"],
      extrabold: ["Outfit_800ExtraBold"],
      black: ["Outfit_900Black"],
    },
    fontWeight: {
      thin: "normal",
      extralight: "normal",
      light: "normal",
      normal: "normal",
      medium: "normal",
      semibold: "normal",
      bold: "normal",
      extrabold: "normal",
      black: "normal",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".font-thin": { fontFamily: "Outfit_100Thin" },
        ".font-extralight": { fontFamily: "Outfit_200ExtraLight" },
        ".font-light": { fontFamily: "Outfit_300Light" },
        ".font-normal": { fontFamily: "Outfit_400Regular" },
        ".font-medium": { fontFamily: "Outfit_500Medium" },
        ".font-semibold": { fontFamily: "Outfit_600SemiBold" },
        ".font-bold": { fontFamily: "Outfit_700Bold" },
        ".font-extrabold": { fontFamily: "Outfit_800ExtraBold" },
        ".font-black": { fontFamily: "Outfit_900Black" },
      });
    },
  ],
};
