// Karma configuration
// Generated on Wed Apr 13 2016 15:30:50 GMT-0500 (CDT)

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config) {
    config.set({

        // One of the next two needs to be true to run with defaults, but if using webpack to trigger should be false
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // list of files to exclude
        exclude: [],

        // list of files / patterns to load in the browser
        files: [
            'test/entry.js'
        ],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // If plugins isn't provided, Karma will automatically load all sibling npm modules starting with karma-*
        // plugins: [],

        // web server port
        port: 9876,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/entry.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // webpack settings
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default

            plugins: [
                new ExtractTextPlugin('css/bundle.css')
            ],
            module: {
                loaders: [
                    {
                        exclude: /node_modules/,
                        test: /\.js$/,
                        loader: 'babel'
                    },
                    {
                        test: /.s?css$/,
                        loader: ExtractTextPlugin.extract('style', [
                            'css?sourceMap',
                            'postcss',
                            'sass?sourceMap'
                        ])
                    }
                ]
            }
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    })
}
