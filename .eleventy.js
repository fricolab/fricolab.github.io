module.exports = function(eleventyConfig) {
  // Input directory: src
  // Output directory: _site
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({"src/images": "images" });
  eleventyConfig.addPassthroughCopy({"CNAME": "CNAME" });

};
