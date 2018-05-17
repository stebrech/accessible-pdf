---
ID: 421
post_title: '<code>Figure</code> without Bounding Box'
author: Stefan Brechbühl
post_excerpt: ""
layout: tutorials
permalink: 'https://accessible-pdf.info/?post_type=tutorials&p=421'
published: false
tags:
  - automatic testing
  - Microsoft Word
categories:
  - 13. Graphics
---
## Issue

In PDFs exported from Word, the *Bounding Box* attributes of all existing images are missing, regardless of the layout option they were placed with.

Issue detected in PDFs made from:

*   Microsoft Word 2013 for Windows
*   Microsoft Word for Mac (at least up to version 15.33)

### PAC 3 error message

> “Figure” element on a single page with no bounding box

### Failure Condition of the Matterhorn Protocol

Not part of the Matterhorn protocol.

## Manual approach in Acrobat

1.  Copy the alternate text of the affected image (navigation pane “Tags” → right click on the `<Figure>` → Properties → Tag)
2.  Delete the `<Figure>` tag
3.  Create a new `<Figure>` tag with the “Reading Order” tool
4.  Paste the alternate text you copied in step 1 within the new `<Figure>` tag (navigation pane “Tags” → right click on the `<Figure>` tag → Properties → Tag)