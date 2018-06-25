---
post_title: Skipped heading levels
layout: tutorials
published: true
categories:
  - 14. Headings
tags:
  - Adobe Indesign
  - Microsoft Word
  - automatic testing 
---

## Issue

A document is structured using headings with different hierarchy levels, see [“Structure with the help of multi-level headings”](https://accessible-pdf.info/en/basics/structure-with-the-help-of-multi-level-headings/). 

To ensure that the structure made with headings can always be understood, the heading levels mustn’t be skipped. This means  `<H1>` mustn’t be followed directly by `<H3>`. However, after a `<H3>` another `<H1>` can follow, because a new chapter begins for example.

### PAC 3 error message

> Numbered heading skips one or more heading levels

### Prüfpunkt des Matterhorn Protokolls

> **14-003** Numbered heading levels in descending sequence are skipped (→ [automatic testing](https://accessible-pdf.info/en/tag/automatic-testing/))

## Manual approach in Word

The heading levels can be determined using paragraph styles, see [“Define tags in Word”](https://accessible-pdf.info/en/basics/define-tags-in-word/). If this error occurs, the paragraph styles you used need to be corrected.

A helpful tool is the “Navigation Pane”. If it’s not visible, it can be activated in the “View” menu. The indentation can be used to determine whether a heading level has been skipped.

## Manual approach in InDesign

The heading levels can be determined using paragraph styles, see  [“Define tags in InDesign”](https://accessible-pdf.info/en/basics/define-tags-in-indesign/). If this error occurs, the paragraph styles you used must be corrected and, if necessary, the existing paragraph styles must be rethought.

A helpful tool is the “Highlight Export Tags” function of the InDesign plugin [MadeToTag](https://www.axaio.com/doku.php/en:products:madetotag). Different orange markings are used to identify the headline export tags.

## Manual approach in Acrobat

Probably the most time-consuming and error-prone way is to make corrections in the PDF, using the “Tags” navigation pane of Acrobat. See also [“Change PDF tags in Acrobat”](https://accessible-pdf.info/en/basics/change-pdf-tags-in-acrobat/). 

If changes have to be made in the source document, the work you made in Acrobat need to be repeated. The solutions above are therefore recommended as the first choice.