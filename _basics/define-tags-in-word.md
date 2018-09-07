---
ID: 3048
post_title: Define tags in Word
author: Stefan Brechbühl
post_excerpt: >
  In order to be able to define PDF tags
  in Word, paragraph styles must be used
  consistently. The easiest way is to use
  the existing standard styles “Heading
  1”, “Heading 2”, etc. and adapt
  them to your needs.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/define-tags-in-word/
published: true
post_date: 2018-06-21 16:32:30
tags:
  - Microsoft Word
categories: [ ]
---
A document is structured using headings with different hierarchy levels, see [“Structure with the help of multi-level headings”][1].

In order to be able to define PDF tags in Word, paragraph styles must be used consistently. The easiest way is to use the existing standard styles “Heading 1”, “Heading 2”, etc. and adapt them to your needs.

If you need your own or additional styles, you must ensure that the correct outline level is set within the paragraph settings. This controls the hierarchy level and generates the appropriate heading tag.

[![Change outline level in Word‘s paragraph settings. Gif animation.][2]][2]

Although up to nine levels can be defined, only levels 1–6 should be used. This is because there are no more than six headline tags in PDF.

## Lists and tables

Other tags that are automatically generated during PDF export are lists. However, this also depends on the correct use of the styling tools. This means that the bullets and numbering must not be created manually, but with the appropriate list tools.

![List tools in Word.][3]

The same applies to the tables – these must also be created using the tools provided for this purpose. If table contents are created using spaces or tabs, no accessible PDF output can be generated.

## Export settings

In order to create the desired tags during PDF export, the following must be observed:

### Word for Windows

1.  Select “File” “Export“ → “Create PDF/XPS” 
2.  Click on “Options”
3.  Activate the option “Document structure tags for accessibility” if it’s not already activated

### Word for Mac

1.  Select “File” → “Save As”
2.  Select the option "PDF" in the drop-down “File format”
3.  Activate the option "Optimal for electronic distribution and accessibility

 [1]: https://accessible-pdf.info/en/basics/structure-with-the-help-of-multi-level-headings/
 [2]: https://accessible-pdf.info/wp/wp-content/uploads/word-outline-level.gif
 [3]: https://accessible-pdf.info/wp/wp-content/uploads/word-list.png