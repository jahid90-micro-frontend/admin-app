const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/assets/js/main.js',
        hello: './src/lit/hello.js',
        greeter: './src/lit/greeter.js',
        lit_hydrate: './node_modules/lit/experimental-hydrate-support.js',
        webcomponents_shadowroot: './node_modules/@webcomponents/template-shadowroot/template-shadowroot.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: '[name].bundle.js',
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ],
    },
};