---
ID: 428
post_title: >
  Structure with the help of multi-level
  headings
author: Stefan Brechbühl
post_excerpt: >
  One of the main tools for structuring
  documents is the use of headings. On a
  visual level, headlines are usually
  marked with larger font sizes or bolder
  font styles.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/structure-with-the-help-of-multi-level-headings/
published: true
post_date: 2018-05-25 14:28:41
tags:
  - Adobe InDesign
  - Microsoft Word
categories: [ ]
---
One of the main tools for structuring documents is the use of headings. On a visual level, headlines are usually marked with a larger font size or a bolder font style.

For [Accessibility][1] the headings are additionally marked with `<H1>`, `<H2>`, `<H3>`, `<H4>`, `<H5>` or `<H6>` *Tags* in the PDF format. The numbers in those heading tags reflect a hierarchy from the highest level `<H1>` to the lowest level `<H6>`. This hierarchy allows content parts to be nested and assigned to each other.

The assignment of these tags gives the header texts a semantic meaning on a technical level. Thus, [AT][2] automatically recognises which heading / heading level it is.

In addition, users get another possibility to navigate through a document. 67.5% of [screenreader][3] users have stated, according to a [WebAIM survey][4], that headings are their most important tool for finding content.

The heading tags can already be assigned using the authoring software. See also:

*   [Defining PDF tags in InDesign][5]
*   [Defining PDF tags in Word][6]

 [1]: https://accessible-pdf.info/en/glossary/#accessible
 [2]: https://accessible-pdf.info/de/glossar/#assistive-technologie
 [3]: https://accessible-pdf.info/en/glossary/#assistive-technology
 [4]: https://webaim.org/projects/screenreadersurvey7/#finding
 [5]: https://accessible-pdf.info/en/basics/defining-pdf-tags-in-indesign/
 [6]: https://accessible-pdf.info/en/basics/defining-pdf-tags-in-word/