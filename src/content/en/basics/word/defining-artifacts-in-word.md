---
title: Defining artifacts in Word
layout: post.njk
author: Stefan Brechbühl
date: 2020-12-09
description: Decorative and unimportant information must be marked as artifact so that it can be ignored by assistive technology (AT). The most efficient way is to determine artefacts already in Word and include them in the PDF export.
---

Decorative and unimportant information must be marked as artifact so that it can be ignored by [assistive technology (AT)](/glossary/#assistive-technology). The most efficient way is to determine artefacts already in Word and include them in the PDF export.

<p class="note">
  Find out in the glossary what <Link to="/glossary/#artifact/">artifacts</Link> are and what
  examples of them are.
</p>

## Page-related artifacts in Word

Page numbers, running titles, etc. are automatically marked as artifacts by Word during export if they have been placed in the header and footer area of the document.

This also means that relevant content must not be placed in the header or footer. For example, if the title only exists in the header, it won’t not be output.

## Decorative artifacts in Word

In newer 365 versions of Microsoft Word, images can be marked as decorative. This will cause the selected image to be marked as an artifact during PDF export.

![Checkbox “Mark as decorative”. Screenshot from Word](src/assets/img/word-mark-as-decorative.png)

In older versions this option unfortunately does not exist. You can read how this is done in Acrobat in “[Create and check artifacts in Acrobat](/basics/acrobat/create-and-check-artifacts-in-acrobat/)”.

### Plugin axesPDF for Word

However, the plugin [axesPDF for Word](https://www.axes4.com/axespdf-for-word-overview.html) can help here. It allows you to define objects as artifacts in older versions as well, as it is natively possible in newer Word versions.

![axesPDF role mapping dropdown with the option “Artifact” selected. Screenshot of the Word Add-In.](https://www.axes4.com/files/axes4/aP4W/aP4W_Role-Mapping_Artifact.png)
