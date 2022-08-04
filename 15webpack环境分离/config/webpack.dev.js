const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
    mode: 'development',
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
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}