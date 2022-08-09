## webpack 代码分离 常见的三种方式

- 入口起点：使用 entry 配置手动分离；
- 防止重复：使用 entry Dependencies 或者 splitChunksPlugin 去重和分离代码；
- 动态导入：通过模块的内联函数调用来分离代码；

### entry 手动分离

```javascript
{

    entry: {
            main: "./src/main.js",
            index: "./src/index.js"
        },
}

```

### entry Dependencies 分离

```javascript
{
    entry: {
        main: {
            import: "./src/main.js",
            dependOn: "lodash"
        },
        index: {
            import: "./src/index.js",
            dependOn: "lodash"
        },
        lodash: "lodash"
    }
}

```

### 使用 optimization 中的属性

[有关配置](./config/webpack.common.js)
