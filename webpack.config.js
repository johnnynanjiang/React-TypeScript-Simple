const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
            {
                test: /\.(t|j)sx?$/,
                use: ['awesome-typescript-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            // addition - add source-map support
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('./index.html'), })
    ],
};