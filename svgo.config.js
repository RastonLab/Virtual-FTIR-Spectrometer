// svgo.config.js
module.exports = {
  multipass: true, // boolean. false by default

  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },

  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIds: false, // keeps group IDs
          removeHiddenElems: false, // keeps hidden elements
          removeViewBox: false, // keeps viewBox
        },
      },
    },
    "removeDimensions", // removes width/height from <svg>
  ],
};
