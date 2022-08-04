const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const resolveApp = require('./paths')

const DevConfig = require("./webpack.dev")
const ProdConfig = require("./webpack.prod")


const CommonConfig = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: resolveApp("./build")
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
        alias: {
            "@": resolveApp("./src"),
            "pages": resolveApp("./src/pages")
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