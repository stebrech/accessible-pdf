const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const markdownItEleventyImg = require("markdown-it-eleventy-img");

module.exports = (eleventyConfig) => {
	const defaultImageWidths = [1210, 1044, 800, 400];
	const defaultImageFormats = ["webp", "auto"];
	const defaultImageSizes = "100vw";

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
		let metadata = await eleventyImage(src, {
			widths: widths || defaultImageWidths,
			formats: defaultImageFormats,
			urlPath: "/assets/img/",
			outputDir: path.join(eleventyConfig.dir.output, "/assets/img/"),
			filenameFormat: function (id, src, width, format, options) {
				// id: hash of the original image
				// src: original image path
				// width: current width in px
				// format: current file format
				// options: set of options passed to the Image call
				const filename = path.basename(src, path.extname(src));
				return `${filename}_${width}.${format}`;
			},
		});

		// TODO loading=eager and fetchpriority=high
		let imageAttributes = {
			alt,
			sizes: sizes || defaultImageSizes,
			loading: "lazy",
			decoding: "async",
		};
		return eleventyImage.generateHTML(metadata, imageAttributes);
	});

	eleventyConfig.setLibrary(
		"md",
		markdownIt({ html: true, breaks: true }).use(markdownItEleventyImg, {
			imgOptions: {
				widths: defaultImageWidths,
				formats: defaultImageFormats,
				urlPath: "/assets/img/",
				outputDir: path.join(eleventyConfig.dir.output, "/assets/img/"),
				sharpOptions: {
					animated: true,
					limitInputPixels: false,
				},
				filenameFormat: function (id, src, width, format, options) {
					// id: hash of the original image
					// src: original image path
					// width: current width in px
					// format: current file format
					// options: set of options passed to the Image call
					const filename = path.basename(src, path.extname(src));
					return `${filename}_${width}.${format}`;
				},
			},
			globalAttributes: {
				class: "markdown-img",
				decoding: "async",
				sizes: defaultImageSizes,
			},
		}),
	);
};
