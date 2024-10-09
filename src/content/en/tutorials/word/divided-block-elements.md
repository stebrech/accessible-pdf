---
title: Divided block elements
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Real content tagged
description: Word takes page breaks into account when creating a tagged PDF. It splits blocks that span two or more pages. This may be acceptable for simple paragraphs, but if headings, lists or tables are separated, for example, semantics suffers.
---

Word takes page breaks into account when creating a tagged PDF. It splits blocks that span two or more pages. This may be acceptable for simple paragraphs, but if headings, lists or tables are separated, for example, semantics suffers.

## Issue detected in PDFs made from:

- Microsoft Word (all versions)

## PAC 3 warning/error

There is no warning or error for this issue.

## Failure Conditions of the Matterhorn Protocol

No clear failure condition which applies to this error!

---

## Automatic approach with axesPDF for Word

By exporting the PDF with the plugin [axesPDF for Word](https://www.axes4.com/axespdf-for-word-overview.html) this error can be prevented. The tags are generated based on the used paragraph styles and are not interrupted by a page or column break.

## Manual approach in Word

Paragraph style settings can be used to prevent a block from being separated. The options

- Keep lines together
- Page break before

hold a block together and start only on the next page or in the next column.

![Screenshot from Word with paragraph settings open and the “Line and Page Breaks” tab active. The two options “Keep lines together” and “Page break before” are marked.](src/assets/img/word-paragraph-page-break.png)

<p class="warning">
  This manual approach can only be used situationally. Depending on the layout or large, cross-page
  block elements, this method does not help.
</p>

## Manual approach in Word

A manual page break can be used to prevent the separation of a block. One of the available breaks will be placed in front of the block that would be separated.

Possible breaks that can prevent a block from being separated:

- Page
- Column
- Next Page
- Even Page
- Odd Page

![Screenshot of Word with active “Layout” register and expanded “Breaks” command. The possible wrapping types are marked.](src/assets/img/word-breaks.png)

<p class="warning">
  This manual approach can only be used situationally. Depending on the layout or large, cross-page
  block elements, this method does not help.
</p>

## Manual approach in Acrobat

<p class="warning">
  The strict post-processing of this issue in Acrobat is often disproportionate. If possible, the
  solutions described above are always to be preferred. Critical locations in the PDF and the tag
  tree must be found and corrected manually.
</p>

If block elements are divided, the tag is repeated at the top level after the break. As an example of a list, several `<L>` tags exist. The following screenshots from Acrobat show how a list item itself is separated by a break.

![Screenshot in Acrobat: First page with three visible list items. The navigation pane “Tags” is open as well. Markings show which tags are assigned to which list items.](src/assets/img/acrobat-liste-geteilt-1.png)

![Screenshot in Acrobat: Second page with three visible list items, the first of which is the continuation of the last of the first page. The navigation pane “Tags” is open as well. Markings show which tags are assigned to which list items.](src/assets/img/acrobat-liste-geteilt-2.png)

1. First, the contents of `<LBody>` of the first `<LI>` on the second page (3-2) must be moved to `<LBody>` of the last `<LI>` of the first page (3-1). The correct order must be maintained.
2. Then the two remaining list elements `<LI>` (4 and 5) must be moved within the `<L>` tag of the first page.
3. Finally the empty tags of the second page can be deleted.

Analogously to this example, other block elements can also be manually reassembled.

### Split tables

In a Word table, you may define that the first line repeats on each page. The cursor must be in the first line and the table option “Repeat as header row at the top of each page” must be selected.

![Table option “Repeat as header row at the top of each page”. Screenshot from Word.](src/assets/img/word-table-repeat-header.png)

These repetitions are also tagged as header cells. The effort, which results from combining such single tables, is questionable. If the tables are understood individually, they can be left as such.

It’s rather better to ensure that the tables are not separated within one cell. This can be achieved by **deactivating** the table option “Allow row to be broken across pages”.

![Marked table option “Allow row to be broken across pages”. Screenshot from Word.](src/assets/img/word-table-allow-broken-row.png)
