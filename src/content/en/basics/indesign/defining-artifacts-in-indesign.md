---
title: Defining artifacts in InDesign
layout: post.njk
author: Stefan Brechbühl
date: 2020-12-09
description: Decorative and unimportant information must be marked as artifact so that it can be ignored by assistive technology (AT). The most efficient way is to determine artefacts already in InDesign and include them in the PDF export.
---

Decorative and unimportant information must be marked as artifact so that it can be ignored by [assistive technology (AT)](/glossary/#assistive-technology). The most efficient way is to determine artefacts already in InDesign and include them in the PDF export.

<p class="note">
  Find out in the glossary what <Link to="/glossary/#artifact/">artifacts</Link> are and what
  examples of them are.
</p>

## Page-related artifacts in InDesign

Page numbers, running titles, etc. are automatically marked as artifacts by InDesign during export if they have been placed on a master page.

This also means that relevant content must not appear on a master page. For example, if the title only exists on a master page, it won’t be output.

Alternatively, texts can also be marked as artifacts using a paragraph style set up for this purpose. To do this, select “Artifact” in “Export Tagging” in the paragraph style options, see also [“Defining PDF tags in InDesign”](/basics/indesign/defining-pdf-tags-in-indesign/).

## Decorative artifacts in InDesign

Decorative objects can be marked as artifacts by clicking “Object” → “Object Export Options“. In the window, switch to the tab “Tagged PDF” and select “Apply Tag: Artefact”.

<p class="note">
  Any graphical shapes and strokes <strong>that do not contain alternative text</strong> are
  automatically marked as artifacts. For such elements, it is therefore not necessary to use the
  object export options.
</p>

### Decorative artifacts using the MadeToTag plugin

If you have the InDesign plugin [MadeToTag](https://www.axaio.com/doku.php/en:products:madetotag), you can save yourself the trouble of using the object export options. All objects that are outside an article are automatically marked as artifacts.
