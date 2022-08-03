const express = require('express');
const webpack = require('webpack')
const webpackDevMiddleWare = require("webpack-dev-middleware");

const app = express()

const config = require("./webpack.config")

const compiler = webpack(config)

const middleware = webpackDevMiddleWare(compiler)

app.use(middleware)
app.listen(3000, () => {
    console.log('服务启动了已经！')
})



