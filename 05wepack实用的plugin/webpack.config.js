const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin  = require('copy-webpack-plugin')
const { ProgressPlugin, DefinePlugin } = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',

                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset',
                generator: {
                    filename: "img/[name].[hash:8][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024 // 20kb
                    }
                }
            },
            {
                test: /\.ttf|eot|woff2?$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name].[hash:8][ext]"
                }
            }
        ]
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
            title: 'webpack plugin'
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
        new CopyPlugin ({
            patterns: [
                {
                    from: './src/public',
                    globOptions: {
                        ignore: [
                            "**/index.html",
                            "**/abc.txt"
                        ]
                    }
                }
            ]
        })
    ]
}