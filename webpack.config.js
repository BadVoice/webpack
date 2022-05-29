const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { type } = require('os');
const CopyPlugin = require('copy-webpack-plugin');
let mode = 'development'
if (process.env.NODE__ENV === 'production') {
    mode = 'production'
}
console.log(mode + 'mode')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    module: {
        rules: [{
                test: /\.[tj]s$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(?:woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },

                ],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext],',
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.css',
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'


        }),
        new CopyPlugin({
            patterns: [{
                from: './public'
            }]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',

        }),
    ],
    mode: 'production'
}

//cross-env NODE_ENV=production&&webpack