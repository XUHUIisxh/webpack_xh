file-loader 用于打包图片相关内容

```js
{
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                name: 'img/[name].[hash:6].[ext]',
                limit: 8000
            }
        }
    ]
}
```

css 中引用图片作为背景图片 用 file-loader 或者 url-loader 打包会导致背景图片不显示，经查看是因为 webpack5 的版本原因
(相关文章)[https://blog.csdn.net/Coralpapy/article/details/119419137]

webpack5 中弃用了上述用 file-loader 和 url-loader 并使用 assets/resource

(webpack5 官方文档)[https://webpack.js.org/guides/asset-modules/]
