const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // 打包后文件输出目录
        path: path.resolve(__dirname, './build'),
        // 在打包之后的静态资源面前进行一个路径的拼接
        // index.html 引用资源文件时配置的路径问题
        // http://localhost:8080 + publicPath + boundle.js
        // js/bundle.js -> ./js/bundle.js
        // publicPath: "/abc"
    },
    // 专门位webpack-dev-serve 
    // devServer为开发过程 开启一个本地服务
    // 指定本地文件所在的文件夹  原来通过根路径能访问  配置后 需要增加一个/abc前缀
    // 注意：旧版本使用publicPath  新版本使用取消了该选项
    devServer: {
        hot: true,
        port: 8080,
        open: true,
        compress: true,
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                pathRewrite: {
                    '^/api': ''
                },
                secure: false,
                changeOrigin: true,
            },
        },
        // historyApiFallback: true
        historyApiFallback: {
            rewrites: [
                { from: /abc/, to: "/index.html" }
            ]
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
            template: './index.html'
        }),
        new ReactRefreshWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}