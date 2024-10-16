---
title: Figure without Bounding Box
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 13. Graphics
description: In PDFs exported from Word, the Bounding Box attributes of all existing images are missing, regardless of the layout option they were placed with.
---

In PDFs exported from Word, the _Bounding Box_ attributes of all existing images are missing, regardless of the layout option they were placed with.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows
- Microsoft Word for Mac (at least up to version 15.33)

## PAC 3 error message

> “Figure” element on a single page with no bounding box

## Failure Condition of the Matterhorn Protocol

Not part of the Matterhorn protocol.

---

## Manual approach in Acrobat

1. Copy the alternate text of the affected image (navigation pane “Tags” → right click on the `<Figure>` → Properties → Tag)
2. Delete the `<Figure>` tag
3. Create a new `<Figure>` tag with the “Reading Order” tool
4. Check the position of the new `<Figure>` tag in the tag tree (reading order)
5. Paste the alternate text you copied in step 1 within the new `<Figure>` tag (navigation pane “Tags” → right click on the `<Figure>` tag → Properties → Tag)
