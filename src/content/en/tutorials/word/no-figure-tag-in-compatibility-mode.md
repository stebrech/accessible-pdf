---
title: No Figure tag in compatibility mode
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 13. Graphics
description: An image is placed with the “In Line with Text” layout option into Word in “Compatibility Mode” (.doc file). After exporting as PDF the image won't be within a <Figure> tag as expected, but within an , to which the role  is assigned.
---

An image is placed with the “In Line with Text” layout option into Word in “Compatibility Mode” (`.doc` file). After exporting as PDF the image won't be within a `<Figure>` tag as expected, but within an `<InlineShape>`, to which the role `<Sect>` is assigned.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows (in Compatibility Mode)

## PAC 3 warning

> Possibly inappropriate use of a “Sect” structure element

## Failure Condition of the Matterhorn Protocol

> **13-001** Graphics objects other than text objects and artifacts are not tagged with a Figure tag. (→ [manual testing](/glossary/#manual-testing))

---

## Automatic approach in Word 2013

Since the problem only exists in compatibility mode (`.doc` files), the document can be converted to the newer `.docx` file format. The “Convert” command is located in the menu “File” → “Info”.

Attention: The conversion can cause (minor) layout changes!

## Manual approach in Acrobat

1. The “Reading order” tool can be used to select the image and convert it to a figure.
2. `<InlineShape>` is going to be converted to `<Figure>`.
3. The alternative text is copied automatically.
