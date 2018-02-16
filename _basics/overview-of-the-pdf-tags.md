---
ID: 301
post_title: Overview of the PDF tags
author: Stefan Brechbühl
post_excerpt: ""
layout: basics
permalink: >
  https://accessible-pdf.info/de/basics/overview-of-the-pdf-tags/
published: true
post_date: 2018-02-16 16:23:12
tags: [ ]
categories: [ ]
---
This overview shows the most important tags from the PDF 1.7 standard. The reference helps you to choose the correct and semantic tags.

The following tags descriptions are from the [official Adobe support page][1]. Personal notes are in *italic*.

## Container

Container elements are the highest level of element and provide hierarchical grouping for other block-level elements.

| Tag                | Description                                                                                                                                                          |
|:------------------ |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<Document>` | The root element of a document’s tag tree.                                                                                                                           |
| `<Part>`     | A large division of a document; may group smaller units of content together, such as division elements, article elements, or section elements.                       |
| `<Div>`      | (Division) A generic block-level element or group of block-level elements.                                                                                           |
| `<Art>`      | (Article) A self-contained body of text considered to be a single narrative.                                                                                         |
| `<Sect>`     | (Section) A general container element type, comparable to Division (DIV Class=“Sect”) in HTML, which is usually a component of a part element or an article element. |

## Heading and paragraph elements

| Tag                          | Beschreibung                                                                                                                                                                                              |
|:---------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<P>`                  | Generic paragraph                                                                                                                                                                                         |
| `<H1>` to `<H6>` | Headings from level 1 to 6                                                                                                                                                                                |
| `<H>`                  | Heading as the first child of any higher-level division.   
*It's usually easier to structure the document with the help of the `<H1>` to `<H6>` tags. I don't recommend to use `<H>`.* |

## Label and list elements

Label and list elements are block-level elements used for structuring lists.

| Tag             | Description                                                                                                                |
|:--------------- |:-------------------------------------------------------------------------------------------------------------------------- |
| `<L>`     | (List) Any sequence of items of similar meaning or other relevance; immediate child elements should be list item elements. |
| `<LI>`    | (List item) Any one member of a list; may have a label element (optional) and a list body element (required) as a child.   |
| `<LBL>`   | (Label) A bullet, name, or number that identifies and distinguishes an element from others in the same list.               |
| `<LBody>` | (List item body) The descriptive content of a list item.                                                                   |

## Special text elements

Special text elements identify text that isn’t used as a generic paragraph `<P>`.

| Tag                  | Description                                                                                                                                            |
|:-------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<BlockQuote>` | One or more paragraphs of text attributed to someone other than the author of the immediate surrounding text.                                          |
| `<Caption>`    | A brief portion of text that describes a table or a figure.                                                                                            |
| `<Index>`      | A sequence of entries that contain identifying text and reference elements that point out the occurrence of the text in the main body of the document. |
| `<TOC>`        | (Table of contents) An element that contains a structured list of items and labels identifying those items; has its own discrete hierarchy.            |
| `<TOCI>`       | (Table of contents item) An item contained in a list associated with a table of contents element.                                                      |

## Table elements

Table elements are special elements for structuring tables.

| Tag             | Description                                                                                                                                                               |
|:--------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<Table>` | A two-dimensional arrangement of data or text cells that contains table row elements as child elements and may have a caption element as its first or last child element. |
| `<TR>`    | (Table row) One row of headings or data in a table; may contain table header cell elements and table data cell elements.                                                  |
| `<TD>`    | (Table data cell) A table cell that contains nonheader data.                                                                                                              |
| `<TH>`    | (Table header cell) A table cell that contains header text or data describing one or more rows or columns of a table.                                                     |

## Inline-level elements

Inline-level elements identify a span of text that has specific formatting or behavior. They are differentiated from block-level elements. Inline-level elements may be contained in or contain block-level elements.

| Tag                | Description                                                                                                                                                                                                           |
|:------------------ |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<BibEntry>` | (Bibliography entry) A description of where some cited information may be found.                                                                                                                                      |
| `<Quote>`    | An inline portion of text that is attributed to someone other than the author of the text surrounding it; different from a block quote, which is a whole paragraph or multiple paragraphs, as opposed to inline text. |
| `<Span>`     | Any inline segment of text; commonly used to delimit text that is associated with a set of styling properties.                                                                                                        |

## Special inline-level elements

Similar to inline-level elements, special inline-level elements describe an inline portion of text that has special formatting or behavior.

| Tag                 | Description                                                                                                                       |
|:------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
| `<Code>`      | Computer program text embedded within a document.                                                                                 |
| `<Figure>`    | A graphic or graphic representation associated with text.                                                                         |
| `<Form>`      | A PDF form annotation that can be or has been filled out.                                                                         |
| `<Formula>`   | A mathematical formula.                                                                                                           |
| `<Link>`      | A hyperlink that is embedded within a document. The target can be in the same document, in another PDF document, or on a website. |
| `<Note>`      | Explanatory text or documentation, such as a footnote or endnote, that is referred to in the main body of text.                   |
| `<Reference>` | A citation to text or data that is found elsewhere in the document.                                                               |

 [1]: https://helpx.adobe.com/acrobat/using/editing-document-structure-content-tags.html