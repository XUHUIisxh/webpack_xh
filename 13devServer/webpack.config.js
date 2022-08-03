const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/i,
                use: ["vue-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ReactRefreshWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}