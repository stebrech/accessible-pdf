---
title: List is not tagged as list
layout: post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Real content tagged, 16. Lists
description: If an undefined or ordered list is used it needs to be tagged as list as well. The list tags will be automatically generated while exporting as PDF. However, you have to use the correct list tools in Microsoft Word or Adobe InDesign.
---

If an undefined or ordered list is used it needs to be tagged as list as well. The list tags will be automatically generated while exporting as PDF. However, you have to use the correct list tools in Microsoft Word or Adobe InDesign.

Proper tagged lists are important for people who need to use [AT](/glossary/#assistive-technology). It helps them to understand and navigate lists much better.

## PAC 3 warning/error

There is no warning or error for this issue.

## Failure Conditions of the Matterhorn Protocol

> **01-006** The structure type and attributes of a structure element are not semantically appropriate for the structure element. All of the following structure types must be taken into account. (→ [manual testing](/glossary/#manual-testing))
>
> **16-003** Content is a list but is not tagged as a list. (→ [manual testing](/glossary/#manual-testing))

---

## Manual approach in Word

The concerning text can be reformatted with the available list function.

![List buttons in Microsoft Word](src/assets/img/word_list_icons.png)

For consistent formatting it's recommended to create or use an existing list style.

## Manual approach in InDesign

The concerning text can be reformatted with the available list function.

![List buttons in Adobe InDesign](src/assets/img/indesign_list_icons.png)

For consistent formatting it's recommended to create or use an existing list style.

## Manual approach in Acrobat

Manual tagging of lists are very time consuming and error-prone. It's recommended to use one of the solutions mentioned above.

The required tags are `<L>`, `<LI>`, `<Lbl>` and `<LBody>`. Each tags are described in [“Overview of the PDF tags”](/basics/general/overview-of-the-pdf-tags/).
