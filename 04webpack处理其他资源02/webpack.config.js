const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
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
    }
}