var webpackConfig = require('./webpack.config');
var webpack = require('webpack');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // TODO investigate webpack.ProvidePlugin
            'node_modules/babel-core/browser-polyfill.js',
            'test/support/*.js',
            { pattern: 'test/**/*_spec.js', watched: false }
        ],


        // list of files to exclude
        exclude: [],

        webpack: {
            devtool: 'inline-source-map',
            externals: {
                'react/lib/ExecutionEnvironment': true
            },
            module: {
                loaders: (webpackConfig.module.loaders || []).concat(
                    { test: /\.json$/, loader: 'json' }
                )
            },
            plugins: (webpackConfig.plugins || []).concat(
                new webpack.IgnorePlugin(/ReactContext/)
            )
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/**/*.js': ['webpack', 'sourcemap']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // plugins: [
        //     'karma-chrome-launcher',
        //     'karma-jasmine',
        //     'karma-phantomjs-launcher',
        //     'karma-webpack'
        // ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
}
