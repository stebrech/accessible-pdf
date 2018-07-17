---
ID: 262
post_title: Glossary
author: Stefan Brechbühl
post_excerpt: >
  The glossary explains terms, which are
  important if you work with accessible
  PDF.
layout: page
permalink: http://accessible-pdf.info/en/glossary/
published: true
post_date: 2018-01-25 16:33:11
tags: [ ]
categories: [ ]
---
The glossary explains terms, which are important if you work with accessible PDF.

## accessible PDF {#accessible}

Through accessibility no people with disabilities are going to be excluded. This means that electronic documents need to meet technical conditions so that everyone can use them independently.

A PDF is accessible if it's compatible with the [PDF/UA][1] standard and follows the [WCAG](https://www.w3.org/WAI/intro/wcag) guidelines.

The most important basics are achieved if

*   the document contains semantic PDF tags, which generate the logical document structure and reading order;
*   objects that are not relevant are marked as artifact (e.g. decorative elements, repeating header and footer);
*   basically all text of the document is available as text and not as an image (OCR scanning);
*   alternative texts are used to describe non text elements (images and graphics);
*   no low or bad color contrasts are used.

## alt text

An alt text (short for alternative text) describes a non-text element, like an image / a graphic. The invisible text can be read and displayed by software, especially [AT](#assistive-technology).

The alt text should be as short and concise as possible and describe what is visible on the picture. It should not contain any additional information that would not be visually recognised, e.g. the name of the photographer or names of visible persons and things that would not be clearly recognised by the context. This is the big difference to a visible caption / a picture description, which can transmit additional information.

Nicht jedes Bild und jede Grafik benötigt einen Alt-Text. Eine wertvolle Entscheidungshilfe bietet WAI (Web Accessibility Initiative) mit „[An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)“ und den [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/) (nur in Englisch). Der wesentliche Unterschied von HTML und PDF ist die Handhabung von dekorativen Bildern (z.B. Hintergrundbilder, Linien und weiteren dekorativen Formen). Diese werden in PDF als Artefakt gekennzeichnet, siehe auch „[Unwichtige und dekorative Inhalte als Artefakt](https://accessible-pdf.info/de/basics/unwichtige-und-dekorative-inhalte-als-artefakt/)“. Nebst dem die dekorativen Bilder keinen Alt-Text benötigen, sollen die funktionalen Bilder die Funktion / das Ziel erklären und nicht dessen Bildinhalt. Hierzu zählen insbesondere verlinkte Bilder.

Not every picture/graphic needs an alt text. WAI (Web Accessibility Initiative) offers a valuable decision support with “[An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)” and the [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/). The main difference between HTML and PDF is the handling of decorative images (e.g. background images, lines and other decorative shapes). In PDF those are marked as artifacts, see also “[Unimportant and decorative objects as artifact](https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/)”. While decorative images do not need any alt text, functional images should explain the function / the goal and not its image content. This includes linked images in particular.

## assistive technology {#assistive-technology}

AT (abbr. for assistive technology) is the main term for tools people with disabilities use to read and understand content.

There are the following software and hardware for example:

*   [Screen reader][2]
*   [Refreshable braille display][3]
*   Screen magnifier
*   Voice recognition
*   Special keyboards and mice
*   Eye tracking, mouth stick
*   …

## AT {#at}

AT is the abbreviation of [assistive Technology][4]

## automatic testing {#automatic-testing}

As the [Matterhorn Protocol][5] says there are 87 failure conditions which can be checked through software. [PAC][6] for instance can find such kind of errors.

## manual testing {#manual-testing}

As the [Matterhorn Protocol][5] says there are 47 failure conditions which need human inspection. Software like [PAC][6] can warn for possible semantic issues at most.

## Matterhorn Protocol {#matterhorn}

The [Matterhorn Protocol][7] is a document by the [PDF Association][8] and helps software developers and testers to check a PDF for PDF/UA compatibility. It describes 136 failure conditions. 87 of them can be tested by software. 47 of them have to be checked manually by a human. 2 failure conditions cannot be categorized.

## PAC {#pac}

[PAC][9] is one of the most comprehensive and free of charge testing tools. It checks PDF documents for its compatibility with the PDF/UA standard. PAC evaluates the failure conditions which can be tested by software. It includes a screenreader preview tool to check the failure conditions which need to be tested manually. The Swiss organization [“Access for all”][10] distributes PAC. The software is only available for Windows.

## PDF/UA {#pdfua}

PDF/UA is the ISO standard 14289-1. The part “UA” stands for universal accessibility. The standard is aimed at production companies of software and [assistive technology][4]. If you want to check your document if your document is compatible with PDF/UA you don't have to buy the ISO standard. The [Matterhorn Protocol][5] contains the failure conditions and is available for free.

 [1]: #pdfua
 [2]: https://en.wikipedia.org/wiki/Screen_reader
 [3]: https://en.wikipedia.org/wiki/Refreshable_braille_display
 [4]: #assistive-technology
 [5]: #matterhorn
 [6]: #pac
 [7]: https://www.pdfa.org/publication/the-matterhorn-protocol-1-02/
 [8]: https://www.pdfa.org/
 [9]: http://access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html
 [10]: http://access-for-all.ch/en/