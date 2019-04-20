const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "build[hash:8].js"
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' }
        ]

    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    devServer: {
        contentBase: './src',
        port: 3000,
        compress: true, //服务器压缩
        //hot: true,
        open: true //自动打开浏览器
    },
    mode: "development",
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js' }
    }
}