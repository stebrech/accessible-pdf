---
ID: 401
post_title: Tagged table lines
author: Stefan Brechbühl
post_excerpt: 'When exporting a table from Word 2013, the lines of a table are set within &lt;Span&gt; tags. &lt;Span&gt; tags are not allowed inside a &lt;TR&gt; (table row) on the same level as the &lt;TD&gt; tags (table cell). In addition, table lines must be marked as artifacts and must not be tagged.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/tagged-table-lines/
published: true
post_date: 2018-04-23 15:25:28
tags:
  - automatic testing
  - manual testing
  - Microsoft Word
categories:
  - 01. Real content tagged
---
## Issue

When exporting a table from Word 2013, the lines of a table are set within `<Span>` tags. `<Span>` tags are not allowed inside a `<TR>` (table row) on the same level as the `<TD>` tags (table cell). In addition, table lines must be marked as artifacts and must not be tagged.

Issue detected in PDF made from:

*   Microsoft Word 2013 for Windows

### PAC 3 error message

> Invalid use of a “Span” structure element

### Failure Conditions of the Matterhorn Protocol

> **01-001** Artifact is tagged as real content. (→ [manual testing][1])
> 
> **09-004** A table-related structure element is used in a way that does not conform to the syntax defined in ISO 32000-1, Table 337. (→ [automatic testing][2])

## Manual approach in Acrobat

1.  The path element must be marked as Artifact. Right-click on the path element inside the navigation pane “Tags” and choose “Change Tag to Artifact…”.
2.  Delete the empty `<Span>` tag afterwards.

See also [“Unimportant and decorative objects as artifact”][3].

 [1]: https://accessible-pdf.info/en/glossary/#manual-testing
 [2]: https://accessible-pdf.info/en/glossary/#automatic-testing
 [3]: https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/