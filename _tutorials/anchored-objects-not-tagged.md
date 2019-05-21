---
ID: 58035
post_title: Anchored objects not tagged
author: Stefan Brechbühl
post_excerpt: >
  In InDesign CC version 13.0, there are
  serious problems with tagging anchored
  objects and the use of the “Article”
  panel as described in “Defining
  logical reading order in InDesign”.
layout: tutorials
permalink: >
  https://accessible-pdf.info/en/tutorials/anchored-objects-not-tagged/
published: true
post_date: 2019-05-21 15:48:21
tags:
  - Adobe InDesign
  - Automatic testing
  - Manual testing
categories:
  - 01. Real content tagged
  - 09. Appropriate Tags
---
In InDesign CC version 13.0, there are serious problems with tagging anchored objects and the use of the “Article” panel as described in [“Defining logical reading order in InDesign”](https://accessible-pdf.info/en/basics/defining-logical-reading-order-in-indesign/).

- Anchored images are marked as Artifact
- Anchored form fields are not within a `<Form>` tag
- Anchored text frames appear not in the logical reading order

Issue detected in PDFs made from:

- InDesign CC 2018 **(13.0)**

### PAC 3 warning/error

There is no warning or error for the issue with the images marked as Artifact!

> “Widget” annotation not nested inside a “Form” structure element

### Failure Condition of the Matterhorn Protocol

> **01-002** Real content is marked as artifact. (→ [manual testing](https://accessible-pdf.info/en/glossary/#manual-testing))
> 
> **01-005** Content is neither marked as Artifact nor tagged as real content. (→ [automatic testing](https://accessible-pdf.info/en/glossary/#automatic-testing))
> 
> **09-001** Tags are not in logical reading order. (→ [manual testing](https://accessible-pdf.info/en/glossary/#manual-testing))

## Automatic approach in InDesign

You can avoid these problems by installing an update. In version 13.1 (CC 2018) the problems were solved. Excerpt from the official release notes:

**Key issues resolved**

- Tag for anchored text frame is missing.
- Anchored images are not exported when exported using the Articles panel.
- Next anchored figure gets tagged instead of the actual anchored figure with effects applied.

## Manual approach in InDesign

If it’s not possible to switch to another InDesign version, the only manual solution is not to anchor objects. Whether this is realistic and reasonable must be decided on a case-by-case basis.