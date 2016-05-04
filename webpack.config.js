const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development' ? true : false;

var plugins = [
    new CleanWebpackPlugin(['dist'], {}),
    new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')
        }
    }),
    new CopyWebpackPlugin([{
        from: './src/images/',
        to: './images/'
    }])
];

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/js/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    plugins: plugins.concat(isDev ? [
            new ExtractTextPlugin('css/bundle.css')
        ] : [
            new ExtractTextPlugin('css/bundle.css'),
            new webpack.optimize.UglifyJsPlugin({
                compressor: {warnings: false},
                output: {comments: false}
            })
        ]
    ),
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
            {
                test: /.s?css$/,
                include: path.join(__dirname, 'src'),
                loader: ExtractTextPlugin.extract('style', [
                    'css?sourceMap',
                    'postcss',
                    'sass?sourceMap'
                ])
            }
        ]
    },
    postcss: function () {
        return [
            require('autoprefixer')({browsers: ['last 2 versions']})
        ];
    }

};
