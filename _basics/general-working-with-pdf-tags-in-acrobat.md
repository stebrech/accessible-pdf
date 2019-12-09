---
ID: 57937
post_title: General working with PDF tags in Acrobat
author: Stefan Brechbühl
post_excerpt: >
  Working with the so-called tag tree,
  which is shown in the navigation pane
  “Tags”, can be a bit confusing,
  especially at the beginning. To
  counteract this, some techniques are
  explained in this article.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/general-working-with-pdf-tags-in-acrobat/
published: true
post_date: 2019-01-28 16:59:17
---
Working with the so-called tag tree, which is shown in the navigation pane “Tags”, can be a bit confusing, especially at the beginning. To counteract this, some techniques are explained in this article.

- [Find tagged text in the tag tree](#findtag)
- [Navigate to the contents of the selected tag and highlight it](#findinPDF)
- [Standardized tags and tags with role mapping](#rolemapping)

<aside class="note-block" markdown="1">
Note: The free [Adobe Acrobat Reader](https://get.adobe.com/reader/) does not allow you to make any adjustments to the tag structure. You’ll need [Adobe Acrobat](https://acrobat.adobe.com/uk/en/acrobat.html) to do that.
</aside>

<aside class="note-block" markdown="1">
The navigation pane “Tags” can be opened by clicking on the icon with the name tag.
![Tag icon in Acrobat](https://accessible-pdf.info/content/uploads/tag-icon.png)
If this is not yet displayed in the left pane, it can be added with a right click or under “Display” → “Show/Hide” → “Navigation pane” and the navigation pane is displayed.
</aside>

## Find tagged text in the tag tree {#findtag}

To quickly reach a desired position in the tag tree, use the following steps:

1. The navigation pane “Tags” must be opened.
2. Select the affected text passage with the selection tool.
3. Open the options in the navigation pane “Tags” and select “Find Tag from Selection”.

<aside class="note-block" markdown="1">
The options of the navigation pane “Tags” can be opened at the top left on the small icon with the two list items.
![Menu icon of the tags options in Acrobat](https://accessible-pdf.info/content/uploads/tags-options-icon.png)
</aside>

## Navigate to the contents of the selected tag and highlight it {#findinPDF}

In order to recognize where you are in the PDF when editing the tags, the following setting must be made:

1. Open the navigation pane “Tags”.
2. Open the options in the navigation pane “Tags” and activate “Highlight Content”.

This option displays a blue frame around the affected area. If the active tag is not already in the displayed area, it’s automatically navigating there.

## Standardized tags and tags with role mapping {#rolemapping}

When the navigation pane “Tags” is open, tags can be identified by the angle brackets (`< >`). Obviously, the name of those tags must follow a standard. Otherwise [AT](https://accessible-pdf.info/en/glossary/#at) will not be able to interpret them correctly. The standard that describes the tag names is PDF 1.7 or in the newer standard PDF 2.0. You can look up the tags defined in PDF 1.7 in [“Overview of the PDF tags”](https://accessible-pdf.info/en/basics/overview-of-the-pdf-tags/).

Fortunately, there is another possibility if the authoring software cannot directly assign the standardized tags. This way is called role mapping and means that a non-standardized tag is mapped to a standardized tag. For example, Adobe InDesign almost exclusively delivers non-standardized tags with role mapping in the exported PDF.

<aside class="note-block" markdown="1">
Since Adobe Acrobat DC 2017 there is a new option called “Apply Role Mapping to Tags” in the options of the navigation pane “Tags”. If this option is active, you will see the mapped tags instead of the name as they were actually used.
</aside>

To view all role mapping entries and adjust them if necessary, do the following:

1. Open the navigation pane “Tags”.
2. Open the options in the navigation pane “Tags” and click on “Edit Role Map”.
3. Open the entry “Document Roles” in the newly opened window by clicking on the small triangle on the left.