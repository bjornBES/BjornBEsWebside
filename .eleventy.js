
module.exports = function(eleventyConfig)
{
    eleventyConfig.addPassthroughCopy('./src/style')
    eleventyConfig.addPassthroughCopy('./src/js')

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}