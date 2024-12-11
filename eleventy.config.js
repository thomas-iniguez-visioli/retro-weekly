const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
module.exports = async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("retros");
    
    eleventyConfig.setOutputDirectory("docs");
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(feedPlugin, {
		type: "json", // or "rss", "json"
		outputPath: "/feed.json",
		collection: {
			name: "all", // iterate over `collections.posts`
			limit: 0,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Blog Title",
			subtitle: "This is a longer description about your blog.",
			base: "https://thomas-iniguez-visioli.github.io/",
			author: {
				name: "Your Name",
				email: "", // Optional
			}
		}
	});
};
module.exports.config = {
	pathPrefix: "/retro-weekly/",
}