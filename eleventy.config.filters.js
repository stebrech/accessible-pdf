const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {
	eleventyConfig.addFilter("localizedDate", (dateObj, lang, format) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { locale: lang || "en" }).toFormat(
			format || "LLLL dd yyyy"
		);
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addFilter("sortByTitle", (values) => {
		return values.slice().sort((a, b) => a.data.title.localeCompare(b.data.title));
	});

	eleventyConfig.addFilter("sortByMenuOrder", (values) => {
		return values.slice().sort((a, b) => a.data.order - b.data.order);
	});
};
