## webpack 中 devtool 的选项

- inline-|hiiden-|eval
- nosources
- cheap 可选值，可以跟随 modeul

[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

## 最佳实践

- 开发阶段：推荐 source-map 或者 cheap-module-source-map，可以获取调试信息，方便快速开发
- 测试阶段：推荐 source-map 或者 cheap-module-source-map，可以获取调试信息，方便快速开发
- 发布阶段：false、缺省值（不写）

[devtool 设置的值](https://www.webpackjs.com/configuration/devtool/)
