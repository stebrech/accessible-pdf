import pluginTOC from "eleventy-plugin-toc";

export default async function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginTOC, {
		ul: true,
		wrapperClass: "glossary-toc",
	});

};
