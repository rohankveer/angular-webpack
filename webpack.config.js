var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: '#source-map',
    entry: "./app/app.js",
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devServer: {
      inline:true,
      port: 3000
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loaders: ['babel'],
              exclude: /node_modules/
            },{
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract( "style", "css!sass")
            },{
              test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg|jpeg|bmp)(\?.*$|$)/,
              loader: 'file-loader'
            }

        ]
    },
    plugins: [
      new ExtractTextPlugin("./public/css/style.css", { allChunks: true })
    ]
}
