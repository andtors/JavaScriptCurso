const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
 
module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        static: './public'
        //contentBase: "./public",
        //port: 9000
    },
    optimization: {
        minimizer: [
            (compiler) => {
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                  terserOptions: {
                    compress: {},
                  }
                }).apply(compiler);
              },
            new CssMinimizerPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //adiciona a css a dom injetando a tag <style> 
                'css-loader', // interperta o @import
                'sass-loader', //loader do sass
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}