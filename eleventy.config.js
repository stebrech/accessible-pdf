const { EleventyI18nPlugin, EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginFilters = require("./eleventy.config.filters.js");
const pluginImages = require("./eleventy.config.images.js");
const pluginMarkdown = require("./eleventy.config.markdown.js");

module.exports = function (eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	eleventyConfig.addPassthroughCopy({
		"./src/assets/img/svg": "/assets/img",
		"./src/assets/styles": "/assets/styles",
		"./src/assets/favicons": "/",
		"./src/assets/manifest": "/",
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
	eleventyConfig.addWatchTarget("src/assets");

	// Official plugins
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "en",
	});
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	// Add plugins
	eleventyConfig.addPlugin(pluginFilters);
	eleventyConfig.addPlugin(pluginImages);
	eleventyConfig.addPlugin(pluginMarkdown);

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		// Control which files Eleventy will process
		templateFormats: ["md", "njk", "html", "liquid"],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		dir: {
			input: "src/content", // default: "."
			includes: "../assets/layouts", // default: "_includes"
			data: "../_data", // default: "_data"
			output: "public", // default: "_site
		},
	};
};
