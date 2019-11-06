# Accessible PDF

This repository contains the content of [accessible-pdf.info](accessible-pdf.info). The outsourced content is written in Markdown and in sync with the WordPress website.

* [An overview of the content](table-of-contents.md)
* [On accessible-pdf.info you learn how to help](https://accessible-pdf.info/en)
* [Contributing guide](CONTRIBUTING.md)

**Please do not use this repository for support requests.**

## Metadata header

Any markdown file needs a bit of Metadata at the beginning of the document. This metadata is necessary to push the content to the database of the website. Right after the import, the [WPGHS plugin](https://github.com/mAAdhaTTah/wordpress-github-sync) will create a new git commit containing some additional and missing metadata.

The metadata block needs the following informations:

```
---
post_title: Name of the Post
author: Name of the author
layout: tutorials
published: true
post_excerpt: "A short description about the issue."
---
```

### post_title

The title describes the issue as clear and short as possible.

### author

This is the name of the first author of the post. If another user submit changes to the post, the name of the author mustn't change. The name of the new contributor will be added to the post manually.

### layout

The layout or better the post type can be

- `basics`
- `tutorials` (for troubleshooting posts)
- `pages` (any other kind of pages like the glossary)

### published

`published` defines if the post will be published directly (`true`) or not (`false`). 

New posts need to be set `false` because currently the `post_excerpt` and the language have to be configured in the WordPress Backend.

### post_excerpt

The excerpt helps to quickly find out what the reader can except when reading the full article. Besides the category/archive page it will be shown on the search results page as well.

### Further metadata

The metadata *ID*, *Permalink* and *post_date* will be added automatically.

As well as the language, the different taxonomies (categories) are set in the backend and can be ignored in the markdown file.

## Contribution

This website is meant to be a community project. I wish contributors from all over the world will help me to build and maintain a useful reference for creating accessible PDFs.

In [CONTRIBUTING.md](CONTRIBUTING.md) you learn what to consider if you want to help with this project.

## License

This work is licensed under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/) 