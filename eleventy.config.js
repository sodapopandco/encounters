export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "source/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "source/favicon.ico": "favicon.ico" });

  eleventyConfig.setInputDirectory("source");
  eleventyConfig.setOutputDirectory("public");
}
