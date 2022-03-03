module.exports = (eleventyConfig) => {
    return {
        dir: {
            includes: '_components',
            input: 'src',
            layouts: '_layouts',
            output: 'dist',
        },
    };
};
