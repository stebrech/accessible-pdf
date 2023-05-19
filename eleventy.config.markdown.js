const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const pluginTOC = require("eleventy-plugin-toc");
const path = require("path");

module.exports = function (eleventyConfig) {
	eleventyConfig.setLibrary(
		"md",
		markdownIt({ html: true })
			.use(markdownItAnchor)
			.use(markdownItEleventyImg, {
				imgOptions: {
					widths: [1210, 1044, 800, 400],
					urlPath: "/assets/img/",
					outputDir: path.join(eleventyConfig.dir.output, "/assets/img/"),
					formats: ["webp", "jpeg"],
				},
				globalAttributes: {
					class: "markdown-img",
					decoding: "async",
					// If you use multiple widths,
					// don't forget to add a `sizes` attribute.
					sizes: "100vw",
				},
			})
	);

	eleventyConfig.addPlugin(pluginTOC, {
		ul: true,
		wrapperClass: "glossary-toc",
	});

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1, 2, 3, 4],
			slugify: eleventyConfig.getFilter("slugify"),
		});
	});
};
