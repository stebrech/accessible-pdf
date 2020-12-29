# Accessible PDF

This is the repository of the website [accessible-pdf.info](https://accessible-pdf.info). The site is built with the React based framework [Gatsby](https://www.gatsbyjs.com/), hosted and deployed with [Github](https://github.com/) and [Netlify](https://www.netlify.com/).

## Markdown content

It’s content is written in Markdown, a lightweight markup language. Actually, there are [MDX](https://mdxjs.com/) files that allow JSX within Markdown.

If Markdown is new to you, I recommend [Markdown Guide](https://www.markdownguide.org/), a good reference guide.

Besides the usual formatting options with markdown, the following components are available:

- `<NoteMessage>` 
- `<WarningMessage>`

## Metadata header

Any MDX file needs a bit of essential metadata at the beginning of the document:

```
---
title: name of the post
slug: domain path without the language code
lang: language code
author: names of all authors
date: date in ISO 8601 
description: A short description. It is usually the same as the lead of the post. This description will be used for SEO.
---
```

## Contribution

I appreciate your help and suggestions how to improve the site. Please have a look at the [CONTRIBUTING.md](CONTRIBUTING.md)

## License

The content of this site is licensed under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)