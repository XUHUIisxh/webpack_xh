const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'js/bundle.js',
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
                // use: {
                //     loader: 'babel-loader',
                //     // options: {
                //     //     presets: [
                //     //         '@babel/preset-env'
                //     //     ],
                //     //     // plugins: [
                //     //     //     '@babel/plugin-transform-arrow-functions',
                //     //     //     '@babel/plugin-transform-block-scoping'
                //     //     // ]
                //     // }
                // }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}