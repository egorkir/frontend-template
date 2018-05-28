import path from 'path';
import webpack from 'webpack';

const NODE_ENV = process.env.NODE_ENV ? "production" : "development";
const isDevelopment = NODE_ENV === "development";

const outputFileName = '[name]-bundle.js';

let options = {
    mode: NODE_ENV,

    context: path.resolve(__dirname + '/source/static/scripts'),

    entry: {
        common: './common.js',
    },

    output: {
        filename: outputFileName,
        path: path.resolve(__dirname, 'dist'),
        library: '[name]'
    },

    devtool: !isDevelopment ? 'source-map' : 'inline-cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    }
};

options.plugins = [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),

    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    })
];

if (isDevelopment) {
    options.plugins.push(

    );
} else {
    options.plugins.push(
        
    );
}

export default options;
