---
title: Tagged table lines
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-21
category: 01. Real content tagged
description: When exporting a table from Word 2013, the lines of a table are set within <Span> tags. <Span> tags are not allowed inside a <TR> (table row) on the same level as the <TD> tags (table cell). In addition, table lines must be marked as artifacts and must not be tagged.
---

When exporting a table from Word 2013, the lines of a table are set within `<Span>` tags. `<Span>` tags are not allowed inside a `<TR>` (table row) on the same level as the `<TD>` tags (table cell). In addition, table lines must be marked as artifacts and must not be tagged.

## Issue detected in PDFs made from:

- Microsoft Word 2013 for Windows

## PAC 3 error message

> Invalid use of a “Span” structure element

## Failure Conditions of the Matterhorn Protocol

> **01-001** Artifact is tagged as real content. (→ [manual testing](/glossary/#manual-testing))
>
> **09-004** A table-related structure element is used in a way that does not conform to the syntax defined in ISO 32000-1, Table 337. (→ [automatic testing](/glossary/#automatic-testing))

---

## Manual approach in Acrobat

1. The path element must be marked as Artifact. Right-click on the path element inside the navigation pane “Tags” and choose “Change Tag to Artifact…”.
2. Delete the empty `<Span>` tag afterwards.

See also “[Create and check artifacts in Acrobat](/basics/acrobat/create-and-check-artifacts-in-acrobat/)”.
