const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add NativeWind support (e.g., for globals.css)
module.exports = withNativeWind(config, {
  input: "./app/globals.css",
});
