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
tags:
  - Microsoft Word
categories:
  - 01. Real content tagged
---
```

### post_title
The title describes the issue as clear and short as possible.

### author
This is the name of the first author of the post. If another user submit changes to the post, the name of the author mustn't change. The name of the new contributor will be added to the post manually.

### layout
The layout or better the post type can be

* `basics`
* `tutorials` (for troubleshooting posts)
* `pages` (any other kind of pages like the glossary)

### published
`published` defines if the post will be published directly (`true`) or not (`false`). 

New posts need to be set `false` because currently the `post_excerpt` and the language have to be configured in the WordPress Backend.

### post_excerpt
The excerpt helps to quickly find out what the reader can except when reading the full article. Besides the category/archive page it will be shown on the search results page as well.

### tags
Tags help to navigate the content. The tags can describe the authoring software or the way of testing.

#### Authoring Software
- Adobe InDesign
- Microsoft Word

#### Way of testing
- automatic testing
- manual testing

### categories
One of the main reasons for this website is the troubleshooting of PDF/UA errors and issues. Therefore the checkpoint names of the [Mattherhorn Protocol](https://www.pdfa.org/publication/the-matterhorn-protocol-1-02/) will be used as categories.

01. Real content tagged
02. Role Mapping
03. Flickering
04. Color and Contrast
05. Sound
06. Metadata
07. Dictionary
08. OCR Validation
09. Appropriate Tags
10. Character Mappings
11. Declared Natural Language
12. Stretchable Characters
13. Graphics
14. Headings
15. Tables
16. Lists
17. Mathematical Expressions
18. Page Headers and Footers
19. Notes and References
20. Optional Content
21. Embedded Files
22. Article Threads
23. Digital Signatures
24. Non-Interactive Forms
25. XFA
26. Security
27. Navigation
28. Annotations
29. Actions
30. XObjects
31. Fonts

### Further metadata
The metadata *ID*, *Permalink* and *post_date* will be added automatically.

## Contribution
This website is meant to be a community project. I wish contributors from all over the world will help me to build and maintain a useful reference for creating accessible PDFs.

In [CONTRIBUTING.md](CONTRIBUTING.md) you learn what to consider if you want to help with this project.

## License
This work is licensed under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/) 