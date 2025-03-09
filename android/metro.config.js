// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */

const defaultconfig = getDefaultConfig(__dirname);
defaultconfig.resolver.assetExts.push("cjs");

module.exports = withNativeWind(defaultconfig, { input: "./global.css" });
// module.exports = defaultconfig;
