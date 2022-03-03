const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(litPlugin, {
        componentModules: ['src/lit/hello.js', 'src/lit/greeter.js'],
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
