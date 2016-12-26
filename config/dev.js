const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    openBrowserWebpackPlugin = require('open-browser-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        loaders: [{
            test: /\.scss!css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!sass-loader"
            })
        }]
    },
    devServer: {
        port: 3000,
        stats: {
            colors: true //显示不同的颜色区分打包的文件
        },
        historyApiFallback: true, //可以解决浏览器刷新得不到内容的问题
        hot: true,
        inline: true
//        proxy:{
//            '/mock/*':{
//                target:'http://localhost:8888',
//                secure:false
//            }
//        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: './static/css/styles.css',
            allChunk: true
        }),

        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            template: './index.html' //html模板路径
        }),
        new openBrowserWebpackPlugin({
            url: 'http://localhost:3000'
        })
    ],
    devtool: '#eval-source-map'
}
