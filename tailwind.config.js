/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: "#00E0B6",
        darkLight: "#262626",
      },
      fontFamily: {
        inter: ["Inter_400Regular"],
        interMedium: ["Inter_500Medium"],
        interBold: ["Inter_700Bold"],
      },
    },
  },
  plugins: [],
};
