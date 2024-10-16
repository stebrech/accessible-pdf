---
title: PDF/UA identifier is missing
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 06. Metadata
description: In order for a PDF document to be technically accessible, the PDF/UA identifier (metadata) must be set.
---

In order for a PDF document to be technically accessible, the [PDF/UA](/glossary/#pdfua) identifier (metadata) must be set.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows
- Adobe InDesign all versions

## PAC 3 error message

> PDF/UA identifier missing

## Failure Condition of the Matterhorn Protocol

> **06-002** The metadata stream in the Catalog dictionary does not include the PDF/UA identifier. (→ [automatic testing](/glossary/#automatic-testing))

---

## Automatic approach in Acrobat DC

1. Open the “Print production” tools and click on “Preflight”
2. In the preflight window, change to the “Single Fixups” (click on the small button with the wrench icon)
3. Select the mixup “Set PDF/UA-1 entry” and click on the button “Fix”

This fix is also part of the preflight profile “Fix problems in PDF tagging structure”.

## Automatic approach in InDesign (MadeToTag)

Using the [MadeToTag](https://www.axaio.com/doku.php/en:products:madetotag) plugin, the PDF/UA identifier is automatically appended.

## Manual approach in Acrobat

1. Download the [pdfUA-ID.xmp file](https://taggedpdf.com/xmp/pdfUA-ID.xmp) (Source: [taggedpdf.com](https://taggedpdf.com/508-pdf-help-center/pdfua-identifier-missing/))
2. Open the document in Acrobat
3. Display the Document Properties (“File” → “Properties”)
4. Switch to the “Description” tab and click the button “Additional metadata”
5. Switch to the “Advanced” tab and click the button “Append”
6. Select the “pdfUA-ID.xmp” you previously downloaded and click “Open”
