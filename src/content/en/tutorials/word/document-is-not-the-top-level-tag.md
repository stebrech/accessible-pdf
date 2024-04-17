---
title: Document isn’t the top-level tag
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Real content tagged
description: A PDF converted from Word contains the <Part> element as its top container. However, the semantically more suitable <Document> tag should be used as root element.
---

A PDF converted from Word contains the `<Part>` element as its top container. However, the semantically more suitable `<Document>` tag should be used as root element.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows

## PAC 3 warning

> “Part” structure element used as root element

## Failure Condition of the Matterhorn Protocol

> **01-006** The structure type and attributes of a structure element are not semantically appropriate for the structure element. All of the existing structure types must be taken into account. (→ [manual testing](/glossary/#manual-testing))

---

## Manual approach in Acrobat

The topmost `<Part>` tag must be changed into the `<Document>` tag, see [“Create and modify PDF tags in Acrobat”](/basics/acrobat/create-and-modify-pdf-tags-in-acrobat/).
