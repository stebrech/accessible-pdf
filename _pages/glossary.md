---
post_title: Glossary
author: Stefan Brechbühl
post_excerpt: "The glossary explains terms, which are important if you work with accessible PDF."
layout: page
published: true
---

The glossary explains terms, which are important if you work with accessible PDF.

<h2 id="accessible">accessible PDF</h2>

Through accessibility no people with disabilities are going to be excluded. This means that electronic documents need to meet technical conditions so that everyone can use them independently. 

A PDF is accessible if it's compatible with the [PDF/UA](#pdfua) standard and follows the WCAG guidelines.

The most important basics are achieved if

* the document contains semantic PDF tags, which generate the logical document structure and reading order;
* objects that are not relevant are marked as artifact (e.g. decorative elements, repeating header and footer);
* basically all text of the document is available as text and not as an image (OCR scanning);
* alternative texts are used to describe non text elements (images and graphics);
* no low or bad color contrasts are used.

<h2 id="assistive-technology">assistive technology</h2>

AT (abbr. for assistive technology) is the main term for tools people with disabilities use to read and understand content.

There are the following software and hardware for example:

*   [Screen reader](https://en.wikipedia.org/wiki/Screen_reader)
*   [Refreshable braille display](https://en.wikipedia.org/wiki/Refreshable_braille_display)
*   Screen magnifier
*   Voice recognition
*   Special keyboards and mice
*   Eye tracking, mouth stick
*   …

## AT

see [assistive Technology](#assistive-technology)

<h2 id="automatic-testing">automatic testing</h2>

As the [Matterhorn Protocol](#matterhorn) says there are 87 failure conditions which can be checked through software. [PAC](#pac) for instance can find such kind of errors.

<h2 id="manual-testing">manual testing</h2>

As the [Matterhorn Protocol](#matterhorn) says there are 47 failure conditions which need human inspection. Software like [PAC](#pac) can  warn for possible semantic issues at most.

<h2 id="matterhorn">Matterhorn Protocol</h2>

The [Matterhorn Protocol](https://www.pdfa.org/publication/the-matterhorn-protocol-1-02/) is a document by the [PDF Association](https://www.pdfa.org/) and helps software developers and testers to check a PDF for PDF/UA compatibility. It describes 136 failure conditions. 87 of them can be tested by software. 47 of them have to be checked manually by a human. 2 failure conditions cannot be categorized.

<h2 id="pac">PAC</h2>

[PAC](http://access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html) is one of the most comprehensive and free of charge testing tools. It checks PDF documents for its compatibility with the PDF/UA standard. PAC evaluates the failure conditions which can be tested by software. It includes a screenreader preview tool to check the failure conditions which need to be tested manually. The Swiss organization [“Access for all”](http://access-for-all.ch/en/) distributes PAC. The software is only available for Windows.

<h2 id="pdfua">PDF/UA</h2>

PDF/UA is the ISO standard 14289-1. The part “UA” stands for universal accessibility. The standard is aimed at production companies of software and [assistive technology](#assistive-technology). If you want to check your document if your document is compatible with PDF/UA you don't have to buy the ISO standard. The [Matterhorn Protocol](#matterhorn) contains the failure conditions and is available for free.