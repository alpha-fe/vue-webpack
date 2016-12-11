const ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


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
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: './static/css/styles-[hash].css',
            allChunk: true
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            template: './index.html' //html模板路径
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
};
