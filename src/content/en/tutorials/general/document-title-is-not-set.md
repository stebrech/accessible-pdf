---
title: Document title isn’t set
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 07. Dictionary
description: In the document properties of the PDF you can define whether the document is displayed with the file name or the document title. This appears in the window title bar of Acrobat (Reader) as well as AT uses this kind of information.
---

In the document properties of the PDF you can define whether the document is displayed with the file name or the document title. This appears in the window title bar of Acrobat (Reader) as well as [AT](/glossary/#assistive-technology) uses this kind of information.

PDF created from Microsoft Word and Adobe InDesign show the file name by default. However, [PDF/UA](/glossary/#pdfua) says the document title must be set. If the document title has been set it’s usually much more meaningful than the file name.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows
- Adobe InDesign until CC 2015 (since version CC 2015 there is an option in the export window available)

## PAC 3 error message

> “DisplayDocTitle” entry is not set

## Failure Conditions of the Matterhorn Protocol

> **07-001** ViewerPreferences dictionary of the Catalog dictionary does not contain DisplayDocTitle key. (→ [automatic testing](/glossary/#automatic-testing))
>
> **07-002** ViewerPreferences dictionary of the Catalog dictionary contains DisplayDocTitle key with a value of false. (→ [automatic testing](/glossary/#automatic-testing))

---

## Automatic approach in InDesign (from CC 2015)

Since Adobe InDesign CC 2015, there is a new section called “Accessibility Options” within the “Advanced” tab in the PDF export settings. There you can change the setting to “Document Title”.

## Automatic approach in InDesign (with MadeToTag)

Using the [MadeToTag](https://www.axaio.com/doku.php/en:products:madetotag) plugin, the document title is defined automatically.

## Automatic approach in Acrobat DC

1. Open the “Print production” tools and click on “Preflight”
2. Select single fixups within the preflight window (click on the small button with the wrench icon)
3. Select the Fixup “Show document title in document window” and click on the button “Fix”

This fix is also part of the preflight profile “Fix problems in PDF tagging structure”.

## Manual approach in Acrobat

1. Open the document in Acrobat
2. Open the document properties (“File” → “Properties”)
3. Switch to the tab “Initial view” and change the value for “Show” to “Document title”
