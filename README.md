# Accessible PDF

This is the repository of the website [accessible-pdf.info](https://accessible-pdf.info). The site is built with the static site generator [11ty](https://www.11ty.dev/), hosted and deployed with [Github](https://github.com/) and [Netlify](https://www.netlify.com/).

## Install locally

1. Clone this repository to your local machine
2. Navigate to the folder and run `yarn install`
3. Run the command `yarn start`
4. If you’re finished, stop your development server (with `Ctrl + C` on your command line)

## Markdown content

It’s content is written in Markdown, a lightweight markup language. If Markdown is new to you, I recommend [Markdown Guide](https://www.markdownguide.org/), a good reference guide.

Besides the usual formatting options with markdown, the following HTML markup is used for formatting infoboxes:

- `<p class="note"></p>`
- `<p class="warning"></p>`

## Metadata header

Any markdown file needs a bit of essential metadata at the beginning of the document:

```
---
title: name of the article
author: names of all authors
date: date in ISO 8601 
description: A short description. It is usually the same as the lead of the post. This description will be used for SEO.
---
```

## Contribution

I appreciate your help and suggestions how to improve the site. Please have a look at the [CONTRIBUTING.md](CONTRIBUTING.md)

### Beginners

If you have no experience with Git and contributing on Github – no problem. There is a useful repository you can learn that: [first-contributions](https://github.com/firstcontributions/first-contributions)

## License

The content of this site is licensed under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)