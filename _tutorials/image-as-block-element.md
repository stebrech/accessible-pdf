---
ID: 384
post_title: Image as block element
author: Stefan Brechbühl
post_excerpt: 'Images in Word are always be at block level in exported PDFs. The &lt;Figure&gt; tag does not have any additional attributes that identify it as a block element.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/image-as-block-element/
published: true
post_date: 2018-04-19 15:36:04
tags:
  - automatic testing
  - Microsoft Word
categories:
  - 13. Graphics
---
## Issue

Images in Word are always be at block level in exported PDFs. The `<Figure>` tag does not have any additional attributes that identify it as a block element.

Issue detected in PDF made from:

*   Microsoft Word 2013 for Windows
*   Microsoft Word for Mac (at least up to version 15.33)

### PAC 2 warning

> Possibly inappropriate use of a Figure structure element

### Failure Conditions of the Matterhorn Protocol

Not part of the Matterhorn protocol.

## 1st manual approach in Acrobat

The fastest and easiest way is to change the `<Figure>` tag to an inline element.

To do so,

*   move the `<Figure>` tag within the associated paragraph (`<P>` tag), or
*   create a new `<P>` tag and move the `<Figure>` tag inside it.

Please check if the reading order (order of the tags) is still correct afterwards.

## 2nd manual approach in Acrobat

Add the “Placement” attribute to the `<Figure>` tag and force it to be a block element.

1.  Push the button “Edit attribute objects... ” in the properties of the `<Figure>` tag.
2.  Click on the icon on the left of “Attribute objects”.
3.  Select the appearing “Attribute object 1” and click the button “New item”.
4.  Fill in the dialog box as follows: 
    *   Key: Placement
    *   Value: Block
    *   Value type: Name