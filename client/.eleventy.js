const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(litPlugin, {
        componentModules: [
            'src/lib/home.js',
            'src/lib/layouts.js',
            'src/lib/pages.js',
            'src/lib/slots.js',
            'src/lib/uris.js',
            'src/lib/widgets.js',
        ],
    });

    eleventyConfig.addWatchTarget('src/lib/');

    return {
        dir: {
            includes: '_components',
            input: 'src',
            layouts: '_layouts',
            output: 'dist',
        },
    };
};
