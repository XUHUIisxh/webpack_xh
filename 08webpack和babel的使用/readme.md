## babel

[babel 手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md)

## 实操

- babel 进行语法转换主要是通过预设进行转换 preset-env

## babel 的作用（理解）

> 涉及这几个包对其进行解释 babel-loader、@babel/core、@babel/preset-env、@babel/polyfill

- 首先要在 wbepack 中安装 babel-loader、@babel/core 并配置 loader，相当于配置 babel 转化的基石
- 安装好基本配置之后，还不能对代码进行转换，所以需要安装预设@babel/preset-env，让 es6 等高级语法可以转化成 es5
- 转化完成后，仍会有部分浏览器不能识别 es6 的方法比如 set、promise 等，所以需要 polyfill 对不支持 es6 语法的浏览器补充相关的方法，让项目正常运行在那些比较老旧的浏览器中，比如 ie8、9、10

## 解释

### preset 预设

### plugins 插件
