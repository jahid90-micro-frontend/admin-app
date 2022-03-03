const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/assets/js/main.js',
        lit: './src/assets/js/lit.js',
        webcomponents: './src/assets/js/webcomponents.js',
        home: './src/lit/home.js',
        layouts: './src/lit/layouts.js',
        pages: './src/lit/pages.js',
        slots: './src/lit/slots.js',
        uris: './src/lit/uris.js',
        widgets: './src/lit/widgets.js',
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
            {
                test: /\.pug$/,
                exclude: /node_modules/,
                // use: ['raw-loader'], //, 'pug-plain-loader'],
                use: 'pug-loader',
            },
        ],
    },
};
