var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "home": "./src/client/modules/home/index.js",
        "login": "./src/client/modules/login/index.js",
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
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
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
        }, {
            from: './src/client/modules/dashboard/**/*.html',
            to: 'partials/[name].html'
        }])
    ]
};
