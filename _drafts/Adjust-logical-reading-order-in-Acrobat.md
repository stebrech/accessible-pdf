---
ID: 57982
post_title: Adjust logical reading order in Acrobat
author: Stefan Brechbühl
post_excerpt: ""
layout: basics
permalink: 'https://accessible-pdf.info/?post_type=basics&p=57982'
published: false
tags: [ ]
categories: [ ]
---
PDF tags are not only needed to give content a semantic meaning, but also to determine the logical reading order. Learn more in the glossary what is meant by [“logical reading order”](https://accessible-pdf.info/en/glossary/#logical-reading-order).

<aside class="note-block">Note: The free <a href="https://get.adobe.com/reader/">Adobe Acrobat Reader</a> does not allow you to make any adjustments to the tag structure. You’ll need <a href="https://acrobat.adobe.com/uk/en/acrobat.html">Adobe Acrobat</a> to do that.</aside>

In the “Tags” navigation pane, the so-called tag tree can be used to analyze the logical reading order. If you find a wrong tag or a tag in the wrong order, you can correct directly. If tags are assigned incorrectly, it is recommended to follow the instructions in [“Create and modify PDF tags in Acrobat”](https://accessible-pdf.info/en/basics/create-and-modify-pdf-tags-in-acrobat/).

<aside class="note-block">The navigation pane “Tags” can be opened by clicking on the icon with the name tag.<br><img src="https://accessible-pdf.info/wp/wp-content/uploads/tag-icon.png" alt="Tag icon in Acrobat"><br>If this is not yet displayed in the left pane, it can be added with a right click or under “Display” → “Show/Hide” → “Navigation pane” and the navigation pane is displayed.</aside>

Since checking the logical reading order in Acrobat quickly becomes confusing, another tool should be used for an extensive and more accurate check. In the [glossary](https://accessible-pdf.info/en/glossary/#logical-reading-order) you’ll find a practical example of how the check can be done using the “Screenreader Preview” in PAC.

Even if it’s possible to correct the order of the tags in Acrobat, this should be done in the source document whenever possible. Therefore the following instructions are recommended:

- Adjust logical reading order in Word (not ready yet)
- Adjust logical reading order in InDesign (not ready yet)

‌<aside class="note-block">How to orientate and navigate more quickly in the tag tree is explained in <a href="https://accessible-pdf.info/en/basics/general-working-with-pdf-tags-in-acrobat/">“General working with PDF tags in Acrobat”</a>.</aside>

## Move a tag {#move}

Click on the tag (recognizable by the angle brackets `< >`) which is in the wrong position and drag it to the right position.

While holding down, a black line is displayed and marks where the tag is moved when you release it. 

- If the small arrow of the line is on the far left, the tag will be moved below and on the same level as the tag displayed above.
- If the small arrow of the line is further to the right, the tag will be moved within the tag displayed above.