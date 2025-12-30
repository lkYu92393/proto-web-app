const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'static/main.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    optimization: {
        minimize: true, // Disable minification
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'proto-web',
            filename: 'index.html',
            template: 'index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/assets',
                to: 'static'
            }]
        })
    ],
    watchOptions: {
        ignored: '**/node_modules',
    },
};