var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build-[hash].js'
    },
    resolve: {
        extensions: [
            ' ', '.js', '.vue', '.jsx'
        ], //后缀名自动补全
        alias: {
            'vue$': 'vue/dist/vue.js' //webpack打包时，需要设置别名
        }
    },
    devServer: {
        port: 3000,
        stats: {
            colors: true //显示不同的颜色区分打包的文件
        },
        historyApiFallback: true, //可以解决浏览器刷新得不到内容的问题
        hot: true,
        inline: true
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            })
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            template: './index.html' //html模板路径
        }),
        new openBrowserWebpackPlugin({
            url: 'http://localhost:3000'
        }),
        new ExtractTextPlugin('/public/styles/styles.css')
    ],
    devtool: '#eval-source-map'
}
