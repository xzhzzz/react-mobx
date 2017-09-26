const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',
    entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true', __dirname+'/app/main.js'],
    output:{
        path: __dirname + '/build',
        filename:'bundle.js',
        publicPath: "/"
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
                test: /(\.less|\.css)$/,
                use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            }
        ]

    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:__dirname + "/index.tmpl.html"
        }),
    ]
}