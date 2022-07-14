module.exports = {
  "presets": [
    ["@babel/preset-env", {
      useBuiltIns: "usage",
      corejs: 3
    }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  // "plugins": [
  //   '@babel/plugin-transform-arrow-functions',
  //   '@babel/plugin-transform-block-scoping'
  // ]
}
