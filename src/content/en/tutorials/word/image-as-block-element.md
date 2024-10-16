---
title: Image as block element
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 13. Graphics
description: Images in Word are always be at block level in exported PDFs. The <Figure> tag does not have any additional attributes that identify it as a block element.
---

Images in Word are always be at block level in exported PDFs. The `<Figure>` tag does not have any additional attributes that identify it as a block element.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows
- Microsoft Word for Mac (at least up to version 15.33)

## PAC 3 warning

> Possibly inappropriate use of a “Figure” structure element

## Failure Condition of the Matterhorn Protocol

Not part of the Matterhorn protocol.

---

## Manual approach in Acrobat

The fastest and easiest way is to change the `<Figure>` tag to an inline element.

To do so,

- move the `<Figure>` tag within the associated paragraph (`<P>` tag), or
- create a new `<P>` tag and move the `<Figure>` tag inside it.

Please check if the reading order (order of the tags) is still correct afterwards.

## Manual approach in Acrobat

Add the “Placement” attribute to the `<Figure>` tag and force it to be a block element.

1. Push the button “Edit attribute objects... ” in the properties of the `<Figure>` tag.
2. Click on the icon on the left of “Attribute objects”.
3. Select the appearing “Attribute object 1” and click the button “New item”.
4. Fill in the dialog box as follows:
   - Key: Placement
   - Value: Block
   - Value type: Name
