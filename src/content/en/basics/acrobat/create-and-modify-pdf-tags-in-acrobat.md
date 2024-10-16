---
title: Create and modify PDF tags in Acrobat
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
description: The complete tagging of a PDF in Acrobat is only recommended if the authoring software does not allow PDF export with tags (Tagged PDF) or if the source document is not available. More below you will learn how to add or adjust single tags in Acrobat.
order: 2
---

The complete tagging of a PDF in Acrobat is only recommended if the authoring software does not allow PDF export with tags (Tagged PDF) or if the source document is not available. For Word and InDesign the following tutorials are recommended:

- [Defining PDF tags in Word](/basics/word/defining-pdf-tags-in-word/)
- [Defining PDF tags in InDesign](/basics/indesign/defining-pdf-tags-in-indesign/)

More below you will learn how to add or adjust single tags in Acrobat.

<p class="note">
  Note: The free <a href="https://get.adobe.com/reader/">Adobe Acrobat Reader</a> does not allow you
  to make any adjustments to the tag structure. You’ll need 
  <a href="https://acrobat.adobe.com/uk/en/acrobat.html">Adobe Acrobat</a> to do that.
</p>

## First Steps (PDF does not contain any tags)

First the document must be marked as “Tagged PDF”.

1. Open the navigation pane “Tags”. If you haven’t used it before, it can be displayed under “View” → “Show/Hide” → “Navigation Panes”.
2. Choose "Create Tags Root" under options (small rectangular icon with two list items).
3. The text “No tags available” has changed to “Tags”.
4. Another click on the icon “Options” now shows the command “Document is Tagged PDF”. Click on this command.
5. The entry “Tagged PDF” says now “Yes” within the “Document properties”.

<iframe
  width="750"
  height="422"
  title="YouTube: First steps to create a Tagged PDF in Adobe Acrobat"
  src="https://www.youtube-nocookie.com/embed/zlG1DKLW9h0"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Semantics

Now you can start tagging. The topmost tag needs to be `<Document>`.

The possible tags that can be used within this `<Document>` tag are listed in [“Overview of PDF tags”](/basics/general/overview-of-the-pdf-tags/).

According to the [Matterhorn Protocol](/glossary/#matterhorn), error condition 01-006, the semantically correct tag must always be used.

## Automatically add tags

In Acrobat, tags can be assigned automatically. The recognition of semantic tags has always been improved in Acrobat. Nevertheless, a computer program will never succeed 100% in recognizing any design logic.

<p class="warning">
  Therefore the automatic tagging requires a manual check and optimization of the tag tree.
</p>

### Solution 1

Same procedure as under [Getting Started](#first-steps-pdf-does-not-contain-any-tags), only at point 2 “Add Tags to Document” is selected instead of “Create Tags Root”.

### Solution 2

Select “Autotag Document” in the “Accessibility” tools.

## Assign single tag manually

The manual procedure is usually required to add single, missing tags to the existing structure.

### Solution 1

1. Add a new tag by opening the options in the navigation pane “Tags” (small rectangular icon with two list items) and select “New tag”.
2. In the displayed window you can select the correct tag and confirm with “OK”.
3. Click on the newly created tag and select the text with the selection tool.
4. Now open the options menu of the “Tags” navigation pane again and select “Create Tag from Selection”.

<iframe
  width="750"
  height="422"
  title="YouTube: Assign single PDF tag in Acrobat – solution 1"
  src="https://www.youtube-nocookie.com/embed/AN-RyLPNNl4"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Solution 2

1. Click on the root element “Tags” in the navigation pane “Tags”.
2. Select the desired text with the selection tool.
3. Open the options menu (small rectangular icon with two list items) of the navigation pane “Tags” and select “Create Tag from Selection”.
4. In the displayed window you can select the correct tag and confirm with “OK”.

<iframe
  width="750"
  height="422"
  title="YouTube: Assign single PDF tag in Acrobat – solution 2"
  src="https://www.youtube-nocookie.com/embed/b0XUfbRnMe0"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Solution 3

Another possibility is to use the “Reading Order” tool. The handling of this tool takes some time to get familiar with as well as not all possible tags are available.

1. Click on “Reading Order” within the “Accessibility” tools.
2. A new window opens and the cursor changes to a cross.
3. Use the new cursor to select the content that needs to be tagged.
4. In the window “Reading Order” you can select the button with the appropriate tag.

<iframe
  width="750"
  height="422"
  title="YouTube: Assign single PDF tag in Acrobat – solution 3"
  src="https://www.youtube-nocookie.com/embed/vBK1jO5xi90"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

## Change tag to another tag

Since the possibilities offered by Word or InDesign are limited, it’s often necessary to adjust the tag structure in Acrobat.

### Solution 1

1. Open the navigation pane “Tags”. If you haven’t used it before, it can be displayed under “View” → “Show/Hide” → “Navigation Panes”.
2. Click once on the tag in the tags pane to select it.
3. Click again on the selected tag to rename it manually. Attention, the tag must be spelled correctly, see “[Overview of the PDF tags](/basics/general/overview-of-the-pdf-tags)”.

<iframe
  width="750"
  height="422"
  title="YouTube: Change a PDF tag in Acrobat – solution 1"
  src="https://www.youtube-nocookie.com/embed/dJUkjDv73JQ"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>

### Solution 2

1. Open the navigation pane “Tags”. If you haven't used it before, it can be displayed under “View” → “Show/Hide” → “Navigation Panes”.
2. Right-click with the mouse on the tag you want to change and select “Properties” from the menu.
3. The desired tag can be selected in the “Tag” tab and the “Type” dropdown field.

<iframe
  width="750"
  height="422"
  title="YouTube: Change a PDF tag in Acrobat – solution 2"
  src="https://www.youtube-nocookie.com/embed/DO5n0QjAHHM"
  frameborder="0"
  allow="encrypted-media"
  allowfullscreen
></iframe>
