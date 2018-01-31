import path from 'path';
import webpack from 'webpack';

import {NODE_ENV, isDevelopment} from './gulp/utils/env';

const outputFileName = '[name]-bundle.js';

let options = {
    context: path.resolve(__dirname + '/source/static/scripts'),

    entry: {
        common: './common.js',
    },

    output: {
        filename: outputFileName,
        path: path.resolve(__dirname, 'web'),
        library: '[name]'
    },

    devtool: !isDevelopment ? 'source-map' : 'inline-cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            }
        ]
    }
};

options.plugins = [
    new webpack.NoErrorsPlugin(),

    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),

    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
];

if (isDevelopment) {
    options.plugins.push(

    );
} else {
    options.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ie8: true,
                ecma: 5
            },
            output: {
                comments: false,
                beautify: false,
                bracketize: true,
                quote_style: 1
            },
            compress: true
        }),
    );
}

export default options;
