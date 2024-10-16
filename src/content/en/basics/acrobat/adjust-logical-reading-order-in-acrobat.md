---
title: Adjust logical reading order in Acrobat
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
description: PDF tags are not only needed to give content a semantic meaning, but also to determine the logical reading order. In Acrobat, the order of the tags within the tag tree can be modified.
order: 3
---

PDF tags are not only needed to give content a semantic meaning, but also to determine the logical reading order. In Acrobat, the order of the tags within the tag tree can be modified.

<p class="note">
  What does <Link to="/glossary/#logical-reading-order">logical reading order</Link> mean? [Find
  out](glossary/#logical-reading-order) more in the glossary.
</p>

<p class="note">
  Software hint: In order to work with the tags, 
  <a href="https://acrobat.adobe.com/uk/en/acrobat.html">Adobe Acrobat</a> is required. With the
  free <a href="https://get.adobe.com/reader/">Adobe Acrobat Reader</a>, tags can neither be checked
  nor changed.
</p>

## Move a tag in the tag tree

1. In the navigation pane “Tags”, click on the tag which is in the wrong position and drag it to the right position.
2. While holding down, a black line is displayed and marks where the tag is moved when you release it.
   - If the small arrow of the line is on the far left, the tag will be moved below and on the same level as the tag displayed above.
   - If the small arrow of the line is further to the right, the tag will be moved within the tag displayed above.

<p class="note">
The navigation pane “Tags” can be opened by clicking on the icon with the name tag.
{% image "src/assets/img/tag-icon.png", "Tag Icon in Acrobat" %}
If this is not yet displayed in the left pane, it can be added with a right click or under “Display” → “Show/Hide” → “Navigation pane” and the navigation pane is displayed.

</p>

## Navigating within the tag tree

For general tips on how to work with the tag tree, see [“General working with PDF tags in Acrobat”](/basics/acrobat/general-working-with-pdf-tags-in-acrobat/).

## Testing outside of Acrobat

By checking the tag tree in Acrobat, the logical reading order can be verified. Since this can be confusing and tedious, another tool should be used. The article [“Check semantics and logical reading order”](/basics/general/check-semantics-and-logical-reading-order/) shows how this [manual check](/glossary/#manual-testing) can be done in a better way.
