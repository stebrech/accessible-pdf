---
title: Heading tags instead of TOCI within TOC
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Real content tagged
description: A table of contents is created with the tags <TOC> and <TOCI>. <TOC> is the container and <TOCI> is used for each entry. In this error scenario, all or some of the <TOC> entries are tagged with a headline tag, e.g. <H1>, instead of <TOCI>.
---

A table of contents is created with the tags `<TOC>` and `<TOCI>`. `<TOC>` is the container and `<TOCI>` is used for each entry. In this error scenario, all or some of the `<TOC>` entries are tagged with a headline tag, e.g. `<H1>`, instead of `<TOCI>`.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows

## PAC 3 warning/error

There is no warning or error for this issue.

## Failure Condition of the Matterhorn Protocol

> **01-006** The structure type and attributes of a structure element are not semantically appropriate for the structure element. All of the existing structure types must be taken into account. (→ [manual testing](/glossary/#manual-testing))

---

## Manual approach in Word

For the directory entries Word uses the paragraph styles

- TOC 1
- TOC 2
- …

Within the paragraph settings of each paragraph style you can define the outline level. If the styles above have not “Body Text” defined for the outline level, the heading tags are going to be applied. So, you need to change them to the “Body Text” option.
