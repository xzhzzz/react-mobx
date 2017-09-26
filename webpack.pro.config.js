const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: __dirname + '/app/main.js',
        vendor:['react','react-dom','react-router-dom','mobx','mobx-react']
    },
    output:{
        path: __dirname + '/build',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader"
                },
                exclude:/node_modules/
            },
            {
                test:/\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader','postcss-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=40000&name=[name].[ext]&outputPath=images/'
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname + "/index.tmpl.html",
            favicon:__dirname + "/favicon.ico",
            title:'react'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest']
        })
    ]
}