---
ID: 309
post_title: List is not tagged as list
author: Stefan Brechbühl
post_excerpt: >
  If an undefined or ordered list is used
  it needs to be tagged as list as well.
  The list tags will be automatically
  generated while exporting as PDF.
  However, you have to use the correct
  list tools in Microsoft Word or Adobe
  InDesign.
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/list-is-not-tagged-as-list/
published: true
post_date: 2018-02-18 20:43:59
tags:
  - Adobe InDesign
  - Manual testing
  - Microsoft Word
categories:
  - 16. Lists
---
## Issue

If an undefined or ordered list is used it needs to be tagged as list as well. The list tags will be automatically generated while exporting as PDF. However, you have to use the correct list tools in Microsoft Word or Adobe InDesign.

Proper tagged lists are important for people who need to use [AT][1]. It helps them to understand and navigate lists much better.

### PAC 3 warning/error

There is no warning or error for this issue.

### Failure Conditions of the Matterhorn Protocol

> **01-006** The structure type and attributes of a structure element are not semantically appropriate for the structure element. All of the following structure types must be taken into account. (→ [manual testing][2])
> 
> **16-003** Content is a list but is not tagged as a list. (→ [manual testing][2])

## Manual approach in Word

The concerning text can be reformatted with the available list function.

![List buttons in Microsoft Word][3]

For consistent formatting it's recommended to create or use an existing list style.

## Manual approach in InDesign

The concerning text can be reformatted with the available list function.

![List buttons in Adobe InDesign][4]

For consistent formatting it's recommended to create or use an existing list style.

## Manual approach in Acrobat

Manual tagging of lists are very time consuming and error-prone. It's recommended to use one of the solutions mentioned above.

The required tags are `<L>`, `<LI>`, `<Lbl>` and `<LBody>`. Each tags are described in [“Overview of the PDF tags”][5].

 [1]: https://accessible-pdf.info/en/glossary/#assistive-technology
 [2]: https://accessible-pdf.info/en/glossary/#manual-testing
 [3]: https://accessible-pdf.info/wp/wp-content/uploads/word_list_icons.png
 [4]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_list_icons.png
 [5]: https://accessible-pdf.info/en/basics/overview-of-the-pdf-tags/