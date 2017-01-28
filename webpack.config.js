var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "home": "./src/client/modules/home/index.js",
        "dashboard": "./src/client/modules/dashboard/main.ts"
    },
    output: {
        filename: "js/[name].bundle.js",
        path: __dirname + '/dist/'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('css/[name].css'),
        new CopyWebpackPlugin([{
            from: './src/client/img',
            to: 'img'
        }])
    ]
};
