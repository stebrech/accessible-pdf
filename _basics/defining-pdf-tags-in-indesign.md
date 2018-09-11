---
ID: 362
post_title: Defining PDF tags in InDesign
author: Stefan Brechbühl
post_excerpt: >
  In InDesign, the heading tags can be
  defined within the paragraph style
  options. Go to “Export Tagging” and
  assign your paragraph style to the
  proper PDF tag.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/defining-pdf-tags-in-indesign/
published: true
post_date: 2018-04-06 19:53:24
tags:
  - Adobe InDesign
categories: [ ]
---
In InDesign, the heading tags can be defined within the paragraph style options. Go to “Export Tagging” and assign your paragraph style to the proper PDF tag.

![Define a PDF tag for a paragraph style in InDesign. Gif animation.][1]

Additionally, there is the possibility to assign a paragraph style to an artifact.

## Set all tags at once

In the flyout menu of the panel “Paragraph Styles” you’ll find the command “Edit all export tags…”.

![Where is the paragraph style flyout menu? Screenshot.][2]

The opening window allows to adjust the export tags for all existing paragraph styles very quickly.

## Export option

A tagged PDF will only be exported if the option “Create Tagged PDF” has been activated. You’ll find this option in the export options of Adobe PDF (Print)

![Screenshot of export options with the PDF print format.][3]

as well as for Adobe PDF (Interactive).

![Screenshot of export options with the PDF interactive format.][4]

## Role mapping of tags

Even if all the steps described above have been followed, you will not find the selected headline tags inside the navigation pane “Tags” in Acrobat. The headline tags are called the same as the paragraph styles in InDesign.

What’s happened now? InDesign has assigned the correct tags with the help of role map. You can check the existing role map from the options of the navigation pane “Tags”.

![Where to find the options of the navigation pane “Tags”? Animated gif.][5]

 [1]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_export-tag.gif
 [2]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_edit-all-tags.gif
 [3]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_export-option-print.jpg
 [4]: https://accessible-pdf.info/wp/wp-content/uploads/indesign_export-option-interactive.jpg
 [5]: https://accessible-pdf.info/wp/wp-content/uploads/acrobat_roll_map.gif