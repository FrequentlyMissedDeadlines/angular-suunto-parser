const webpack = require("webpack");
const path = require("path");

let config = {
  entry: {
    main: {
      import: ['./node_modules/angular-x2js-wrapper/dist/angular-x2js-wrapper.js', './src/parser/DM5Parser.js', './src/suunto-parser.js']
    }
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./angular-suunto-parser.js"
  },

  mode: 'production'
}

module.exports = config;