

const presets = [
  ["@babel/preset-env"],
  ["@babel/preset-react"]
]

const plugins = []

const isProduction = process.env.production

if (!isProduction) {
  plugins.push(["react-refresh/babel"])
}


module.exports = {
  presets,
  // "plugins": [
  //   '@babel/plugin-transform-arrow-functions',
  //   '@babel/plugin-transform-block-scoping'
  // ]
  plugins
}
