const path = require("path");

module.exports = {
  entry: [
    "./js/select.js",
    "./js/feedback.js",
    "./js/upload.js",
    "./js/validation.js",
    "./js/main.js"
  ],
  
  output: {
    filename: "wp.bundle.js",
    path: path.resolve(__dirname, "bundle"),
    iife: true
  },

  devtool: false
};