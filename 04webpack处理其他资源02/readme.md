webpack5 中将资源类型的加载方式改为内置的 asset module type 的方式

(webpack5 官方文档)[https://webpack.js.org/guides/asset-modules/]
(更多文档)[https://dev.to/smelukov/webpack-5-asset-modules-2o3h]

包含四种方式

- asset/resource 发送一个单独的文件导出 url，之前通过 file-loader 实现的方式
- asset/inline 到处一个资源 data URL，之前通过使用 url-loader 实现
- asset/source 到处资源的源代码，之前使用 raw-loader 实现
- asset 在导出一个 data url 和发送一个单独的文件之间自动选择，之前通过使用 url-loader、并且配置资源体积实现


