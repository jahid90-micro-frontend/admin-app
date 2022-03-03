const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(litPlugin, {
        componentModules: ['src/lit/home.js', 'src/lit/layouts.js'],
    });

    eleventyConfig.addWatchTarget('src/lit/');

    return {
        dir: {
            includes: '_components',
            input: 'src',
            layouts: '_layouts',
            output: 'dist',
        },
    };
};
