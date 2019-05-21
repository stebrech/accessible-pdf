---
ID: 362
post_title: Defining PDF tags in InDesign
author: Stefan Brechbühl
post_excerpt: >
  In InDesign you can define heading tags
  manually through the paragraph style
  settings. For tables, lists and
  footnotes you’ll automatically get the
  appropriate tags if you use the
  available tools correctly.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/defining-pdf-tags-in-indesign/
published: true
post_date: 2018-04-06 19:53:24
tags:
  - Adobe InDesign
categories: [ ]
---
In InDesign you can define heading tags manually through the paragraph style settings. For tables, lists and footnotes you’ll automatically get the appropriate tags if you use the available tools correctly.

## Export tags

One of the key structure elements are nested multi-level headings, see also [“Structure with the help of multi-level headings”](https://accessible-pdf.info/en/basics/structure-with-the-help-of-multi-level-headings/"). For setting the export tag for each paragraph style,

1. right click on the paragraph style you want to change and choose “Edit”;
2. open the last section called “Export Tagging”;
3. and choose the appropriate tag in the last dropdown field, labeled as “PDF” → “Tag”.

You’re able to assign any heading tag to a paragraph style. There is also the possibility to select “Artifact” if the text has not relevant information, read more about this in [“Unimportant and decorative objects as artifact”](https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/").

### Set all tags at once

In the flyout menu on the top right of the panel “Paragraph Styles” you’ll find the command “Edit all export tags”. In the opening window you need to change to “PDF”. After that you’re able to adjust the export tags all at once.

## Tables, lists and footnotes

For creating tables use the menu item “Table” and don’t cheat by just using tabulators. This wouldn’t semantically be correct and causes issues with the [logical reading order](https://accessible-pdf.info/en/glossary/#logical-reading-order). Inside the table options you can choose how many header and footer rows the table should have.

You need to create lists the right way as well. You mustn’t only type a hyphen sign or number to create a list. Within the paragraph style options you’re able to create a correct numbered or unordered lists.

Correct footnotes or endnotes can be added within the menu item “Type”.

## Export

As soon as your document is ready, there is an important export setting you need to check. The option “Create Tagged PDF” has to be activated. You’ll find it either you choose the format “Adobe PDF (Print)”

![Screenshot of export options with the PDF print format.](https://accessible-pdf.info/content/uploads/indesign-export-print.png)

or “Adobe PDF (Interactive)”.

![Screenshot of export options with the PDF interactive format.](https://accessible-pdf.info/content/uploads/indesign-export-interactive.png)

If your document is interactive and includes hyperlinks or form fields you have to choose “Adobe PDF (Interactive)” and check the option “Use Structure for Tab Order” as well.

## Role mapping of tags

You’ll realise that the document has been tagged by looking into the ”Tags” navigation pane. However, the tags are named by the paragraph style and not by the export tag you chose in InDesign.

So, why the extra work? InDesign has assigned the correct tags with the help of the role mapping. In the article [“General working with PDF tags in Acrobat”](https://accessible-pdf.info/en/basics/general-working-with-pdf-tags-in-acrobat/#rolemapping) you can learn more about this role mapping.