---
ID: 409
post_title: Document title isn’t set
author: Stefan Brechbühl
post_excerpt: >
  In the document properties of the PDF
  you can define whether the document is
  displayed with the file name or the
  document title. This appears in the
  window title bar of Acrobat (Reader) as
  well as AT uses this kind of
  information.
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/document-title-is-not-set/
published: true
post_date: 2018-05-03 05:40:11
tags:
  - Adobe InDesign
  - automatic testing
  - Microsoft Word
categories:
  - 07. Dictionary
---
## Issue

In the document properties of the PDF you can define whether the document is displayed with the file name or the document title. This appears in the window title bar of Acrobat (Reader) as well as [AT][1] uses this kind of information.

PDF created from Microsoft Word and Adobe InDesign show the file name by default. However, [PDF/UA][2] says the document title must be set. If the document title has been set it’s usually much more meaningful than the file name.

Issue detected in exported PDFs from:

*   Microsoft Word 2013 for Windows
*   Adobe InDesign until CC 2015 (since version CC 2015 there is an option in the export window available)

### PAC 2 error message

> DisplayDocTitle key is not set to true

### Failure Conditions of the Matterhorn Protocol

> **07-001** ViewerPreferences dictionary of the Catalog dictionary does not contain DisplayDocTitle key. (→ [automatic testing][3])
> 
> **07-002** ViewerPreferences dictionary of the Catalog dictionary contains DisplayDocTitle key with a value of false. (→ [automatic testing][3])

## Manual approach in Acrobat

1.  Open the document in Acrobat
2.  Open the document properties (“File” → “Properties”)
3.  Switch to the tab “Initial view” and change the value for “Show” to “Document title”

## Automatic approach in Acrobat DC

1.  Open the “Print production” tools and click on “Preflight”
2.  Select single fixups within the preflight window (click on the small button with the wrench icon)
3.  Select the Fixup “Show document title in document window” and click on the button “Fix”

This fix is also part of the preflight profile “Fix problems in PDF tagging structure”.

## Automatic approach in InDesign (ab CC 2015)

Since Adobe InDesign CC 2015, there is a new section called “Accessibility Options” within the “Advanced” tab in the PDF export settings. There you can change the setting to “Document Title”.

## Automatic approach in InDesign (with MadeToTag)

Using the MadeToTag plugin, the document title is defined automatically.

 [1]: https://accessible-pdf.info/en/glossary/#assistive-technology
 [2]: https://accessible-pdf.info/en/glossary/#pdfua
 [3]: https://accessible-pdf.info/en/glossary/#automatic-testing