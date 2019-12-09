---
ID: 57982
post_title: Adjust logical reading order in Acrobat
author: Stefan Brechbühl
post_excerpt: >
  PDF tags are not only needed to give
  content a semantic meaning, but also to
  determine the logical reading order. In
  Acrobat, the order of the tags within
  the tag tree can be modified.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/adjust-logical-reading-order-in-acrobat/
published: true
post_date: 2019-02-12 20:21:36
---
PDF tags are not only needed to give content a semantic meaning, but also to determine the logical reading order. In Acrobat, the order of the tags within the tag tree can be modified.

<aside class="note-block" markdown="1">
What does [logical reading order](https://accessible-pdf.info/en/glossary/#logical-reading-order) mean? Find out more in the glossary.
</aside>

<aside class="note-block" markdown="1">
Software hint: In order to work with the tags, [Adobe Acrobat](https://acrobat.adobe.com/uk/en/acrobat.html) is required. With the free [Adobe Acrobat Reader](https://get.adobe.com/reader/), tags can neither be checked nor changed.
</aside>

## Move a tag in the tag tree {#move}

1. In the navigation pane “Tags”, click on the tag which is in the wrong position and drag it to the right position.
2. While holding down, a black line is displayed and marks where the tag is moved when you release it. 
	- If the small arrow of the line is on the far left, the tag will be moved below and on the same level as the tag displayed above.
	- If the small arrow of the line is further to the right, the tag will be moved within the tag displayed above.

<aside class="note-block" markdown="1">
The navigation pane “Tags” can be opened by clicking on the icon with the name tag.

![Tag icon in Acrobat](https://accessible-pdf.info/content/uploads/tag-icon.png)

If this is not yet displayed in the left pane, it can be added with a right click or under “Display” → “Show/Hide” → “Navigation pane” and the navigation pane is displayed.
</aside>

## Navigating within the tag tree

For general tips on how to work with the tag tree, see [“General working with PDF tags in Acrobat”](https://accessible-pdf.info/en/basics/general-working-with-pdf-tags-in-acrobat/).

## Testing outside of Acrobat
 
By checking the tag tree in Acrobat, the logical reading order can be verified. Since this can be confusing and tedious, another tool should be used. The article [“Check semantics and logical reading order”](https://accessible-pdf.info/en/basics/check-semantics-and-logical-reading-order/) shows how this [manual check](https://accessible-pdf.info/en/glossary/#manual-testing) can be done in a better way.