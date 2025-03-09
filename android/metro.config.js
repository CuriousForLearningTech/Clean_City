// Learn more https://docs.expo.io/guides/customizing-metro
require("dotenv").config();
const { getDefaultConfig } = require("expo/metro-config");

console.log("Loaded API_URL:", process.env.measurementId);
/** @type {import('expo/metro-config').MetroConfig} */

const defaultconfig = getDefaultConfig(__dirname);
defaultconfig.resolver.assetExts.push("cjs");

module.exports = defaultconfig;
