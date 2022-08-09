const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const { ProgressPlugin } = require('webpack')


const resolveApp = require('./paths')

const DevConfig = require("./webpack.dev")
const ProdConfig = require("./webpack.prod")


const CommonConfig = {
    entry: {
        main: "./src/main.js",
        index: "./src/index.js"
        // main: {
        //     import: "./src/main.js",
        //     dependOn: "lodash"
        // },
        // index: {
        //     import: "./src/index.js",
        //     dependOn: "lodash"
        // },
        // lodash: "lodash"
    },
    output: {
        filename: "[name].bundle.js",
        path: resolveApp("./build")
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
        alias: {
            "@": resolveApp("./src"),
            "pages": resolveApp("./src/pages")
        }
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true
            })
        ],
        splitChunks: {
            // async异步导入
            // initial同步导入
            // all 异步/同步导入
            chunks: "all",
            // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
            minSize: 20000,
            // 将大于maxSize的包, 拆分成不小于minSize的包
            maxSize: 20000,
            // minChunks表示引入的包, 至少被导入了几次
            minChunks: 1,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: "js/[id]_vendors.js",
                    // name: "vendor-chunks.js",
                    priority: -10
                },
                bar: {
                    test: /bar_/,
                    filename: "[id]_bar.js"
                },
                default: {
                    minChunks: 2,
                    filename: "common_[id].js",
                    priority: -20
                }
            }
        }
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
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: resolveApp('./index.html')
        })
    ]
}


module.exports = (env) => {

    const isProduction = env.production

    /** true or undefind */
    process.env.production = !!isProduction

    return isProduction ? merge(CommonConfig, ProdConfig) : merge(CommonConfig, DevConfig)
}