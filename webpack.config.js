var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: './src/main', // entry 必须是相对路径
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "dist") // path 必须是绝对路径
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.jpg|png|gif|svg$/,
                use: ['url-loader?limit=8192&name=./[name].[ext]']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject: true
        })
    ],
    mode: 'development',
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        port: 8081
    }
}