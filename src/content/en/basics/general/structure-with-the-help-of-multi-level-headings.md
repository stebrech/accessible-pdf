---
title: Structure with the help of multi-level headings
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-07
description: One of the main tools for structuring documents is the use of headings. On a visual level, headings are usually marked with larger font sizes or bolder font styles. However, the visual appearance on its own is not enough.
order: 1
---

One of the main tools for structuring documents is the use of headings. On a visual level, headings are usually marked with a larger font size or a bolder font style. However, the visual appearance on its own is not enough.

For [Accessibility](/glossary/#accessible-pdf) the headings are additionally marked with `<H1>`, `<H2>`, `<H3>`, `<H4>`, `<H5>` or `<H6>` tags in the PDF format. The numbers in those heading tags reflect a hierarchy from the highest level `<H1>` to the lowest level `<H6>`. This hierarchy allows content parts to be nested and assigned to each other.

The assignment of these tags gives the header texts a semantic meaning. Thus, [assistive technology (AT)](/glossary/#assistive-technology) automatically recognises which heading and heading level it is.

This not only helps AT users to better understand the content, but also provides them with an important navigation tool. 67.5% of [screenreader](/glossary/#assistive-technology) users have stated, according to a [WebAIM survey](https://webaim.org/projects/screenreadersurvey7/#finding), that headings are their most important tool for finding content.

The heading tags can already be assigned using the authoring software. See also:

- [Defining PDF tags in InDesign](/basics/indesign/defining-pdf-tags-in-indesign/)
- [Defining PDF tags in Word](/basics/word/defining-pdf-tags-in-word/)
