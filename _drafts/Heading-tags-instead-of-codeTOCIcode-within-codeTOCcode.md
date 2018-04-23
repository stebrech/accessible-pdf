---
ID: 399
post_title: 'Heading tags instead of <code>TOCI</code> within <code>TOC</code>'
author: Stefan Brechbühl
post_excerpt: ""
layout: tutorials
permalink: 'https://accessible-pdf.info/?post_type=tutorials&p=399'
published: false
tags:
  - manual testing
  - Microsoft Word
categories:
  - 01. Real content tagged
---
## Issue

A table of contents is created with the tags `<TOC>` and `<TOCI>`. `<TOC>` is the container and `<TOCI>` is used for each entry. In this error scenario, all or some of the `<TOC>` entries are tagged with a headline tag, e.g. `<H1>`, instead of `<TOCI>`.

Issue detected in exported PDFs from:

*   Microsoft Word 2013 for Windows

### PAC 2 error message

There is no warning or error for this issue.

### Failure Conditions of the Matterhorn Protocol

> **01-006** The structure type and attributes of a structure element are not semantically appropriate for the structure element. All of the existing structure types must be taken into account. (→ [manual testing][1])

## Manually approach in Word

For the directory entries Word uses the paragraph styles

*   TOC 1
*   TOC 2
*   …

Within the paragraph settings of each paragraph style you can define the outline level. If the styles above have not “Body Text” defined for the outline level, the heading tags are going to be applied. So, you need to change them to the “Body Text” option.

 [1]: https://accessible-pdf.info/en/glossary/#manual-testing