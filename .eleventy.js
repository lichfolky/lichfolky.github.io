module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/reset.css");
    eleventyConfig.addPassthroughCopy("src/bundle.css");
    eleventyConfig.addPassthroughCopy("src/bundle.js");
    eleventyConfig.addPassthroughCopy("src/img/*");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    };
};