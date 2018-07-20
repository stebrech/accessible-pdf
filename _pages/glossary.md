---
ID: 262
post_title: Glossary
author: Stefan Brechbühl
post_excerpt: >
  The glossary explains terms, which are
  important if you work with accessible
  PDF.
layout: page
permalink: https://accessible-pdf.info/en/glossary/
published: true
post_date: 2018-01-25 16:33:11
tags: [ ]
categories: [ ]
---
The glossary explains terms, which are important if you work with accessible PDF.

## accessible PDF {#accessible}

Through accessibility no people with disabilities are going to be excluded. This means that electronic documents need to meet technical conditions so that everyone can use them independently.

A PDF is accessible if it's compatible with the [PDF/UA][1] standard and follows the [WCAG][2] guidelines.

The most important basics are achieved if

*   the document contains semantic PDF tags, which generate the logical document structure and reading order;
*   objects that are not relevant are marked as artifact (e.g. decorative elements, repeating header and footer);
*   basically all text of the document is available as text and not as an image (OCR scanning);
*   alternative texts are used to describe non text elements (images and graphics);
*   no low or bad color contrasts are used.

## alt text {#alt-text}

An alt text (short for alternative text) describes a non-text element, like an image / a graphic. The invisible text can be read and displayed by software, especially [AT][3].

The alt text should be as short and concise as possible and describe what is visible on the picture. It should not contain any additional information that would not be visually recognised, e.g. the name of the photographer or names of visible persons and things that would not be clearly recognised by the context. This is the big difference to a visible caption / a picture description, which can transmit additional information.

Not every picture/graphic needs an alt text. WAI (Web Accessibility Initiative) offers a valuable decision support with “[An alt Decision Tree][4]” and the [Web Accessibility Tutorials][5]. The main difference between HTML and PDF is the handling of decorative images (e.g. background images, lines and other decorative shapes). In PDF those are marked as artifacts, see also “[Unimportant and decorative objects as artifact][6]”. While decorative images do not need any alt text, functional images should explain the function / the goal and not its image content. This includes linked images in particular.

## alternative text {#alternative-text}

see [alt text][7]

## assistive technology {#assistive-technology}

AT (abbr. for assistive technology) is the main term for tools people with disabilities use to read and understand content.

There are the following software and hardware for example:

*   [Screen reader][8]
*   [Refreshable braille display][9]
*   Screen magnifier
*   Voice recognition
*   Special keyboards and mice
*   Eye tracking, mouth stick
*   …

## AT {#at}

AT is the abbreviation of [assistive Technology][3]

## automatic testing {#automatic-testing}

As the [Matterhorn Protocol][10] says there are 87 failure conditions which can be checked through software. [PAC][11] for instance can find such kind of errors.

## manual testing {#manual-testing}

As the [Matterhorn Protocol][10] says there are 47 failure conditions which need human inspection. Software like [PAC][11] can warn for possible semantic issues at most.

## Matterhorn Protocol {#matterhorn}

The [Matterhorn Protocol][12] is a document by the [PDF Association][13] and helps software developers and testers to check a PDF for PDF/UA compatibility. It describes 136 failure conditions. 87 of them can be tested by software. 47 of them have to be checked manually by a human. 2 failure conditions cannot be categorized.

## PAC {#pac}

[PAC][14] is one of the most comprehensive and free of charge testing tools. It checks PDF documents for its compatibility with the PDF/UA standard. PAC evaluates the failure conditions which can be tested by software. It includes a screenreader preview tool to check the failure conditions which need to be tested manually. The Swiss organization [“Access for all”][15] distributes PAC. The software is only available for Windows.

## PDF/UA {#pdfua}

PDF/UA is the ISO standard 14289-1. The part “UA” stands for universal accessibility. The standard is aimed at production companies of software and [assistive technology][3]. To check a document for PDF/UA, you do not need to purchase the ISO documentation. Using the free [Matterhorn Protocol][10], a document can be checked for PDF/UA compatibility.

PDF/UA is based on the [WCAG](#wcag), does not contradict those guidelines, but does not cover all regulations of the WCAG.

## Tagged PDF {#tagged-pdf}

see [tags][16]

## tags {#tags}

If your PDF contains tags – also called Tagged PDF – one big and important step of machine readability and thus accessibility has been done. However, the mere existence is not enough. The PDF tags must also reflect the semantics of the document. This means, for example, that a heading is not only visually recognisable as such by a larger font, but also by machine, by a heading tag.

[PDF/UA][17] specifies that all elements of a document must either be tagged or marked as artifacts. You can find more about artifacts in “[Unimportant and decorative objects as artifact][6]”.

The possible PDF tags (according to the PDF 1.7 standard) can be found in the “[Overview of PDF tags][18]”. Some of the available PDF tags are very similar to the HTML tags.

## WCAG {#wcag}

The [WCAG](https://www.w3.org/TR/WCAG21/), short for Web Content Accessibility Guidelines, are the recommendations/guidelines of the group [WAI](https://www.w3.org/WAI/) (short for Web Accessibility Initiative), which in turn is part of the [W3C](https://www.w3.org/) (short for World Wide Web Consortium). These guidelines have been translated into several languages, including [German](https://www.w3.org/Translations/WCAG20-de/).

WCAG can be considered the most important, general set of rules when it comes to digital and accessible communication. PDF is also considered a possible technology of web content, which is why WCAG also applies to PDF.

For the technical implementation of accessible PDFs, however, the [PDF/UA](#pdf-ua) standard is required, not the WCAG.

WCAG is referred to in many national and international laws on digital accessibility.

 [1]: #pdfua
 [2]: https://www.w3.org/WAI/intro/wcag
 [3]: #assistive-technology
 [4]: https://www.w3.org/WAI/tutorials/images/decision-tree/
 [5]: https://www.w3.org/WAI/tutorials/images/
 [6]: https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/
 [7]: #alt-text
 [8]: https://en.wikipedia.org/wiki/Screen_reader
 [9]: https://en.wikipedia.org/wiki/Refreshable_braille_display
 [10]: #matterhorn
 [11]: #pac
 [12]: https://www.pdfa.org/publication/the-matterhorn-protocol-1-02/
 [13]: https://www.pdfa.org/
 [14]: http://access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html
 [15]: http://access-for-all.ch/en/
 [16]: #tags
 [17]: #pdf-ua
 [18]: https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/