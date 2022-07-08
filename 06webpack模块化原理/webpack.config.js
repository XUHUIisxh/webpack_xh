const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ProgressPlugin } = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool:"source-map",
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, './build')
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin()
    ]
}