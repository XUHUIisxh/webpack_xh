使用 browserslist 告诉项目需要支持那些浏览器
通过 package.json 文件中"browserslist"字段告诉 webpack 需要适配那些浏览器
或者通过.browserslistrc 文件来定义也是同样的效果

(browserslist github 文档)[https://github.com/browserslist/browserslist#readme]

其中统计的浏览器使用情况是在 caniuse 中统计的

```json
  "browserslist": [
    ">1%",
    "last 2 version",
    "not dead"
  ]
```

使用 webpack 解析 css

postcss 是通过 JavaScript 的方式将模块中的 css 进行转化

可以帮助我们添加浏览器前缀等

通过 命令行的形式 将样式转换并通过 autoprefixer 自动添加浏览器前缀 输出 result.css 到根目录

```shell
 npx postcss --use autoprefixer -o result.css ./src/css/test.less
```

也可以在 webpack 的插件配置中让项目自动添加浏览器前缀

但是！

大多数 webpack 配置是使用 postcss-preset-env 进行 css 转换
原因是 postcss-preset-env 已经做了 autoprefixer 的工作 所以才是上述原因
(postcss 文档)[https://www.npmjs.com/package/postcss-loader#postcssOptions]
