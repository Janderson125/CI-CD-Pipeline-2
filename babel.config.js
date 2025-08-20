module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ">0.25%, not dead", // adjust browser support as needed
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // no need to import React in every file
      },
    ],
    "@babel/preset-typescript", // include if using TypeScript
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties", // optional, for class properties
    "@babel/plugin-transform-runtime" // optional, reduces code duplication
  ],
};
