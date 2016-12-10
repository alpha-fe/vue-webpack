const path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: './static/js/[id]-[name]-[hash].js'
    },
    resolve: {
        extensions: [
            ' ', '.js', '.vue', '.jsx'
        ], //后缀名自动补全
        alias: {
            'vue$': 'vue/dist/vue.js' //webpack打包时，需要设置别名
        }
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
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader'
            })
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            // loader: 'file-loader?name=/static/fonts/[name].[hash].[ext]'
            loader: 'url-loader?name=/static/fonts/[hash].[ext]'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'url-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    }
};
