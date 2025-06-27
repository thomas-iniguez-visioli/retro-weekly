const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
module.exports = async function(eleventyConfig) {
	eleventyConfig.setInputDirectory("retros");
    
    eleventyConfig.setOutputDirectory("docs");
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "all", // iterate over `collections.posts`
			limit: 0,     // 0 means no limit
		},
		metadata: {
			language: "fr ",
			title: "Blog Title",
			subtitle: "This is a longer description about your blog.",
			base: "https://thomas-iniguez-visioli.github.io",
			author: {
				name: "thomas iniguez",
				email: "", // Optional
			}
		}
	});
};
module.exports.config = {
	pathPrefix: "/retro-weekly/",
}
