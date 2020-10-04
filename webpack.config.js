const webpack = require("webpack");
const path = require("path");
const glob = require("glob");

let config = {
  entry: {
    main: glob.sync('./src/**/*.js')
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./suunto-parser.js"
  }
}

module.exports = config;