const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/assets/js/main.js',
        lit: './src/assets/js/lit.js',
        webcomponents: './src/assets/js/webcomponents.js',
        home: './src/lib/home.js',
        layouts: './src/lib/layouts.js',
        pages: './src/lib/pages.js',
        slots: './src/lib/slots.js',
        uris: './src/lib/uris.js',
        widgets: './src/lib/widgets.js',
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
