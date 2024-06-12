module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/style");
    eleventyConfig.addPassthroughCopy("src/fonts");

    return {
        dir: {
            input: "src"
        }
    };
};