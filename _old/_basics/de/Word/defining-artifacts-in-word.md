---
ID: 58381
post_title: Defining artifacts in Word
author: Stefan Brechbühl
post_excerpt: >
  Decorative and page-related information
  must be marked as an artifact to be
  ignored by assistive technology.
  Artifacts can already be defined in Word
  and converted to PDF.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/defining-artifacts-in-word/
published: true
post_date: 2019-12-21 12:51:33
tags: [ ]
categories: [ ]
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

## Page-related artifacts in Word

Page numbers, running titles, etc. are automatically marked as artifacts by Word during export if they have been placed in the header and footer area of the document.

This also means that relevant content must not be placed in the header or footer. For example, if the title only exists in the header, it won’t not be output.

## Decorative artifacts in Word

In newer 365 versions of Microsoft Word, images can be marked as decorative. This will cause the selected image to be marked as an artifact during PDF export.

![Checkbox “Mark as decorative”. Screenshot from Word](https://accessible-pdf.info/content/uploads/word-mark-as-decorative.png)

In older versions this option unfortunately does not exist. You can read how this is done in Acrobat in “[Create and check artifacts in Acrobat](https://accessible-pdf.info/en/create-and-check-artifacts-in-acrobat)”.

### Plugin axesPDF for Word

However, the plugin [axesPDF for Word](https://www.axes4.com/axespdf-for-word-overview.html) can help here. It allows you to define objects as artifacts in older versions as well, as it is natively possible in newer Word versions.

![axesPDF role mapping dropdown with the option “Artifact” selected. Screenshot of the Word Add-In.](https://www.axes4.com/files/axes4/aP4W/aP4W_Role-Mapping_Artifact.png)