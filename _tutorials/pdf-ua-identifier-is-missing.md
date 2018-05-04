---
ID: 403
post_title: PDF/UA identifier is missing
author: Stefan Brechbühl
post_excerpt: >
  In order for a PDF document to be
  technically accessible, the PDF/UA
  identifier (metadata) must be set.
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/pdf-ua-identifier-is-missing/
published: true
post_date: 2018-04-27 16:19:40
tags:
  - Adobe InDesign
  - automatic testing
  - Microsoft Word
categories:
  - 06. Metadata
---
## Issue

In order for a PDF document to be technically accessible, the [PDF/UA][1] identifier (metadata) must be set.

Issue detected in PDF made from:

*   Microsoft Word 2013 for Windows
*   Adobe InDesign all versions

### PAC 2 error message

> PDF/UA identifier missing

### Failure Condition of the Matterhorn Protocol

> **06-002** The metadata stream in the Catalog dictionary does not include the PDF/UA identifier. (→ [automatic testing][2])

## Manual approach in Acrobat

1.  Download the [pdfUA-ID.xmp file][3]
2.  Open the document in Acrobat
3.  Display the Document Properties (“File” → “Properties”)
4.  Switch to the “Description” tab and click the button “Additional metadata”
5.  Switch to the “Advanced” tab and click the button “Append”
6.  Select the “pdfUA-ID.xmp” you previously downloaded and click “Open”

## Automatic approach in Acrobat DC

1.  Open the “Print production” tools and click on “Preflight”
2.  In the preflight window, change to the “Single Fixups” (click on the small button with the wrench icon)
3.  Select the mixup “Set PDF/UA-1 entry” and click on the button “Fix”

This fix is also part of the preflight profile “Fix problems in PDF tagging structure”.

## Automatic approach in InDesign (MadeToTag)

Using the MadeToTag plugin, the PDF/UA identifier is automatically appended.

 [1]: https://accessible-pdf.info/en/glossary/#pdfua
 [2]: https://accessible-pdf.info/en/glossary/#automatic-testing
 [3]: https://taggedpdf.com/xmp/pdfUA-ID.xmp