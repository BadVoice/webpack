const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        // ...
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'),
            filname: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    plugins: {
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        }
    },

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }, {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader'],

            }, // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            }, // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }, {
                test: /\.(scss|css)$/,
                use: ['MiniCssExtractPlugin', 'css-loader', 'postcss-loader', 'sass-loader'],
            },



        ],
    }
}