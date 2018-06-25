---
ID: 3687
post_title: Skipped heading levels
author: Stefan Brechbühl
post_excerpt: 'To ensure that the structure made with headings can always be understood, the heading levels mustn’t be skipped. This means <H1> mustn’t be followed directly by <H3>. However, after a <H3> another <H1> can follow, because a new chapter begins for example.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/skipped-heading-levels/
published: true
post_date: 2018-06-25 15:25:12
tags:
  - Adobe InDesign
  - automatic testing
  - Microsoft Word
categories:
  - 14. Headings
---
## Issue

A document is structured using headings with different hierarchy levels, see [“Structure with the help of multi-level headings”][1].

To ensure that the structure made with headings can always be understood, the heading levels mustn’t be skipped. This means `<H1>` mustn’t be followed directly by `<H3>`. However, after a `<H3>` another `<H1>` can follow, because a new chapter begins for example.

### PAC 3 error message

> Numbered heading skips one or more heading levels

### Prüfpunkt des Matterhorn Protokolls

> **14-003** Numbered heading levels in descending sequence are skipped (→ [automatic testing][2])

## Manual approach in Word

The heading levels can be determined using paragraph styles, see [“Define tags in Word”][3]. If this error occurs, the paragraph styles you used need to be corrected.

A helpful tool is the “Navigation Pane”. If it’s not visible, it can be activated in the “View” menu. The indentation can be used to determine whether a heading level has been skipped.

## Manual approach in InDesign

The heading levels can be determined using paragraph styles, see [“Define tags in InDesign”][4]. If this error occurs, the paragraph styles you used must be corrected and, if necessary, the existing paragraph styles must be rethought.

A helpful tool is the “Highlight Export Tags” function of the InDesign plugin [MadeToTag][5]. Different orange markings are used to identify the headline export tags.

## Manual approach in Acrobat

Probably the most time-consuming and error-prone way is to make corrections in the PDF, using the “Tags” navigation pane of Acrobat. See also [“Change PDF tags in Acrobat”][6].

If changes have to be made in the source document, the work you made in Acrobat need to be repeated. The solutions above are therefore recommended as the first choice.

 [1]: https://accessible-pdf.info/en/basics/structure-with-the-help-of-multi-level-headings/
 [2]: https://accessible-pdf.info/en/tag/automatic-testing/
 [3]: https://accessible-pdf.info/en/basics/define-tags-in-word/
 [4]: https://accessible-pdf.info/en/basics/define-tags-in-indesign/
 [5]: https://www.axaio.com/doku.php/en:products:madetotag
 [6]: https://accessible-pdf.info/en/basics/change-pdf-tags-in-acrobat/