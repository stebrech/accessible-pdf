---
title: Overview of the PDF tags
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-07
description: This overview shows the most important tags from the PDF 1.7 standard. The reference helps you to choose the correct and semantic tags.
order: 3
---

This overview shows the most important tags from the PDF 1.7 standard. The reference helps you to choose the correct and semantic tags.

The tags listed below correspond to the [ISO standard PDF 1.7](https://opensource.adobe.com/dc-acrobat-sdk-docs/pdfstandards/PDF32000_2008.pdf). In 2018 the newer standard PDF 2.0 has been published. In this standard, some of the tags described here have been removed and new ones have been added. Since the standard is not yet widely used and a revision of the PDF/UA standard is still open, this overview still corresponds to PDF 1.7.

Not included in the overview are the PDF tags

- `NonStruct` (Grouping element)
- `Private` (Grouping element)
- `H` (Block-level structure element)
- `BibEntry` (Inline-level structure element)
- `Ruby`, `RB`, `RT`, `RP`, `Warichu`, `WT`, `WP` (Inline-level structure element)

because they are not recommended or not relevant for use.

It is obvious that grouping elements basically contain block elements and block elements basically contain inline elements. The standard does not always clearly specify which constellations are possible. The illustrative elements can function as block or inline elements.

<p class="note">
  Practical examples and further informations can be found in the document 
  <a href="https://www.pdfa.org/resource/tagged-pdf-best-practice-guide-syntax/">
    “Tagged PDF Best Practice Guide: Syntax”
  </a> 
  of the PDF Association.
</p>

## Grouping elements

<div class="pdfTags tableResponsive">

| PDF tag      | Semantic meaning                                                                                                                                                                                                                                                                              | Possible and semantically meaningful parent elements                 | Possible and semantically meaningful child elements                                                                              |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `Document`   | Represents a complete document                                                                                                                                                                                                                                                                | –                                                                    | [Grouping elements](#grouping-elements), [Block-level structure elements](#block-level-structure-elements)                       |
| `Part`       | Division of a larger document into smaller, associated parts                                                                                                                                                                                                                                  | `Document`                                                           | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-level structure elements](#block-level-structure-elements) |
| `Art`        | Parts of content which together are conclusive, i.e. an article or part of a document                                                                                                                                                                                                         | `Document`, `Part`, `Sect`, `Div`, `BlockQuote`                      | `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-level structure elements](#block-level-structure-elements)        |
| `Sect`       | Grouped related content parts, for example several paragraphs, which can be combined into a group                                                                                                                                                                                             | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`               | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-level structure elements](#block-level-structure-elements) |
| `Div`        | Generic group element without semantic meaning                                                                                                                                                                                                                                                | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`               | `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOC`, `Index`, [Block-level structure elements](#block-level-structure-elements) |
| `BlockQuote` | One or more paragraphs that originate from another author, in other words, that have been quoted                                                                                                                                                                                              | `Document`, `Part`, `Art`, `Sect`, `Div`                             | `Art`, `Sect`, `Div`, `Caption`, [Block-level structure elements](#block-level-structure-elements)                               |
| `Caption`    | A caption to describe for example a picture or a table                                                                                                                                                                                                                                        | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Table`, `L` | `Sect`, `Div`, `BlockQuote`, [Block-level structure elements](#block-level-structure-elements)                                   |
| `TOC`        | Container for table of contents entries. Can be used either as a flat hierarchy (all contained `TOCI` on one level) or as a complex hierarchy (`TOC` within a `TOCI` as a subgroup). Can be contained multiple times in a document, since it can also be used for image or table directories. | `Document`, `Part`, `Art`, `Sect`, `Div`                             | `TOCI`                                                                                                                           |
| `TOCI`       | Entry within a table of contents (`TOC`).                                                                                                                                                                                                                                                     | `TOC`                                                                | `TOC`, `P`, `Lbl`, `Reference`                                                                                                   |
| `Index`      | Container for a subject index                                                                                                                                                                                                                                                                 | `Document`, `Part`, `Art`, `Sect`, `Div`                             | `L`                                                                                                                              |

</div>

## Block-level structure elements

### Paragraph elements

<div class="pdfTags tableResponsive">

| PDF tag                            | Semantic meaning                       | Possible and semantically meaningful parent elements                      | Possible and semantically meaningful child elements                 |
| :--------------------------------- | :------------------------------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------ |
| `P`                                | Ordinary paragraph                     | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Caption`, `TOCI` | [Inline-level structure elements](#inline-level-structure-elements) |
| `H1`, `H2`, `H3`, `H4`, `H5`, `H6` | Hierarchical headings on levels 1 to 6 | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`                    | [Inline-level structure elements](#inline-level-structure-elements) |

</div>

### List elements

<div class="pdfTags tableResponsive">

| PDF tag | Semantic meaning                                                                                                                                                                                                    | Possible and semantically meaningful parent elements            | Possible and semantically meaningful child elements                 |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------- | :------------------------------------------------------------------ |
| `L`     | List container; groups together all list elements that belong together                                                                                                                                              | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `Index` | `LI`, `Caption`                                                     |
| `LI`    | Container of a list entry; can contain an `L` to create multi-level lists                                                                                                                                           | `L`                                                             | `Lbl`, `LBody`, `L`                                                 |
| `Lbl`   | Comes from the term “label” and represents the numbering or bullet character within a list. _It’s not actually a block-level structure element and can also be used in other elements such as `TOCI` or `Caption`._ | `LI`                                                            | –                                                                   |
| `LBody` | Contains the contents of a list entry                                                                                                                                                                               | `LI`                                                            | [Inline-level structure elements](#inline-level-structure-elements) |

</div>

### Table elements

<div class="pdfTags tableResponsive">

| PDF tag | Semantic meaning                                                                                 | Possible and semantically meaningful parent elements   | Possible and semantically meaningful child elements                 |
| :------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------- | :------------------------------------------------------------------ |
| `Table` | Table container; combines all related table elements                                             | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote` | `TR`, `Caption`, `THead`, `TBody`, `TFoot`                          |
| `TR`    | Groups a table row                                                                               | `Table`, `THead`, `TBody`, `TFoot`                     | `TH`, `TD`                                                          |
| `TH`    | Table heading cell; describes the meaning either at horizontal (line) or vertical (column) level | `TR`                                                   | [Inline-level structure elements](#inline-level-structure-elements) |
| `TD`    | Ordinary table data cells                                                                        | `TR`                                                   | [Inline-level structure elements](#inline-level-structure-elements) |
| `THead` | A group of table rows (`TR`) to mark them as table header; can be used optionally                | `Table`                                                | `TR`                                                                |
| `TBody` | A group of table rows (`TR`) to mark them as table content; can be used optionally               | `Table`                                                | `TR`                                                                |
| `TFoot` | A group of table rows (`TR`) to mark them as table footer; can be used optionally                | `Table`                                                | `TR`                                                                |

</div>

## Inline-level structure elements

<div class="pdfTags tableResponsive">

| PDF tag     | Semantic meaning                                                                                                                                                   | Possible and semantically meaningful parent elements | Possible and semantically meaningful child elements |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- | :-------------------------------------------------- |
| `Span`      | Generic container without semantic meaning; is used, among other things, for visual markups, language changes or for adding ActualText (e.g. for ignoring hyphens) | `P`, `H1`–`H6`, `LBody`, `TD`, `Quote`, `Note`       | –                                                   |
| `Quote`     | Used like `BlockQuote` for quoted content; however, `Quote` is used at line level                                                                                  | `P`, `H1`–`H6`, `LBody`, `TD`                        | `Span`                                              |
| `Note`      | Footnote or endnote text (not the reference character in the body text). The footer/end-note character within `Note` and `Reference` will be placed in a `Lbl`.    | `P`, `H1`–`H6`, `LBody`, `TD`                        | `Lbl`, `P`, `Span`                                  |
| `Reference` | Refers to another place in the document, e.g. footnote or directory entry                                                                                          | `P`, `H1`–`H6`, `LBody`, `TD`                        | `Lbl`                                               |
| `Code`      | Marking of programming language                                                                                                                                    | `P`, `H1`–`H6`, `LBody`, `TD`                        | –                                                   |
| `Link`      | Link to a web page or to a place within the document                                                                                                               | `P`, `H1`–`H6`, `LBody`, `TD`                        | –                                                   |
| `Annot`     | Annotations that are not a link or a widget (form field), like comments and videos.                                                                                | `P`, `H1`–`H6`, `LBody`, `TD`                        | –                                                   |

</div>

## Illustration elements

<div class="pdfTags tableResponsive">

| PDF tag   | Semantic meaning     | Possible and semantically meaningful parent elements                                  | Possible and semantically meaningful child elements |
| :-------- | :------------------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------- |
| `Figure`  | Photo or graphic     | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `P`, `LBody`, `TD`            | –                                                   |
| `Formula` | Mathematical formula | `Document`, `Part`, `Art`, `Sect`, `Div`, `BlockQuote`, `P`, `H1`–`H6`, `LBody`, `TD` | –                                                   |
| `Form`    | Form element         | `Document`, `Part`, `Art`, `Sect`, `Div`, `P`, `TD`                                   | –                                                   |

</div>
