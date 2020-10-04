const webpack = require("webpack");
const path = require("path");

let config = {
  entry: "./src/suunto-parser.js",
  externals: {
    angular: 'angular',
  },

  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "./suunto-parser.js"
  }
}

module.exports = config;