---
title: "Defining artifacts in InDesign"
linkTitle: "Defining artifacts in InDesign"
weight: 40
date: 2020-07-02
description: >
  Decorative and page-related information must be marked as an artifact to be
  ignored by assistive technology. Artifacts can already be defined in
  InDesign and converted to PDF.
---
Users who need to use [AT](https://accessible-pdf.info/en/glossary/#assistive-technology) are not only dependent on semantically correct tags. It’s also important to exclude decorative and irrelevant objects from the output. You can achieve this by marking such elements as artefacts.

Unimportant objects are informations that are useful for the printed, but not so much for the digital output. This could be:

- page numbering
- repeating information in headers and footers

Further unimportant and decorative objects are:

- background images
- other decorative images which doesn’t add information to the content
- various kinds of strokes
	- for decoration
	- for separating columns
	- table lines

The most efficient way is to determine the artifacts already in the creation program and to include them in the PDF export.

## Page-related artifacts in InDesign

Page numbers, running titles, etc. are automatically marked as artifacts by InDesign during export if they have been placed on a master page.

This also means that relevant content must not appear on a master page. For example, if the title only exists on a master page, it won’t be output.

Alternatively, texts can also be marked as artifacts using a paragraph style set up for this purpose. To do this, select “Artifact” in “Export Tagging” in the paragraph style options, see also [“Defining PDF tags in InDesign”](https://accessible-pdf.info/en/basics/defining-pdf-tags-in-indesign/).

## Decorative artifacts in InDesign

Decorative objects can be marked as artifacts by clicking “Object” → “Object Export Options“. In the window, switch to the tab “Tagged PDF” and select “Apply Tag: Artefact”.

<p class="note-block" markdown="1">
Any graphical shapes and strokes **that do not contain alternative text** are automatically marked as artifacts. For such elements, it is therefore not necessary to use the object export options.
</p>

### Decorative artifacts using the MadeToTag plugin

If you have the InDesign plugin [MadeToTag](https://www.axaio.com/doku.php/en:products:madetotag), you can save yourself the trouble of using the object export options. All objects that are outside an article are automatically marked as artifacts.
