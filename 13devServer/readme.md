## devServer

- webpack-dev-server 安装后直接执行 webpack serve 命令即可
- 想要更高的自由度，可以试用 webpack-dev-middleware 类似于 express 启动一个服务的样子 详情看 [server.js](./serve.js)

## HMR 模块热替换

### 什么是 HMR

- 全称 Hot Module replacement 热模块替换
- 热模块替换指的是在程运行过程中，替换、添加、删除模块，而无需刷新整个页面；

### HMR 通过如下几个方式，来提高开发的速度

- 不重新加载整个页面，这样可以保留某些应用程序的状态不丢失；
- 只更新需要变化的内容，节省开发时间；
- 修改了 css、js 源代码，会立即在浏览器更新，相当于在浏览器的 devtools 中直接修改样式

### react 支持热更新

- 原有的 react-hot-loader 已经不再被使用[react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- [代码块](./src/index.js)

### vue 支持热更新

- 引入 vue-loader[文档出处](https://www.webpackjs.com/guides/hot-module-replacement/#%E5%85%B6%E4%BB%96%E4%BB%A3%E7%A0%81%E5%92%8C%E6%A1%86%E6%9E%B6) 即可
- [代码块](./src/index.js)
