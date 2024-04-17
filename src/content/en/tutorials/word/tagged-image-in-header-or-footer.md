---
title: Tagged image in header or footer
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Real content tagged
description: Everything you put into the header or footer of a Word document, is going to be an Artifact and not tagged. Therefore, images with content value mustn’t be placed in it. Images within the header or footer of a .docx (Word 2013 document without compatibility mode) are incorrectly tagged if they are used with the “Behind Text” layout option.
---

## Issue description

Everything you put into the header or footer of a Word document, is going to be an Artifact and not tagged. Therefore, images with content value mustn’t be placed in it. Images within the header or footer of a `.docx` (Word 2013 document without compatibility mode) are **incorrectly tagged** if they are used with the **“Behind Text” layout option**.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows

## PAC 3 warning/error

There is no warning or error for this issue.

## Failure Condition of the Matterhorn Protocol

> **01-001** Artifact is tagged as real content. (→ [manual testing](/glossary/#manual-testing))

---

## Manual approach in Word 2013

Since this issue only exists with the layout option “Behind Text” you might change this option if possible.

## Manual approach in Acrobat

1. The “Reading Order” tool can be used to select such an image
2. The button “Background/Artifact” changes the image to an Artifact
3. Repeat this step for each header or footer image
