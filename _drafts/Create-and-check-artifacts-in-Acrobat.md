---
ID: 58379
post_title: Create and check artifacts in Acrobat
author: Stefan Brechbühl
post_excerpt: ""
layout: basics
permalink: 'https://accessible-pdf.info/?post_type=basics&p=58379'
published: false
tags: [ ]
categories: [ ]
---
Users who need to use [AT](https://accessible-pdf.info/en/glossary/#assistive-technology) are not only dependent on semantically correct tags. It’s also important to exclude decorative and irrelevant objects from the output. You can achieve this by marking such elements as artefacts.

Unimportant objects are informations that are useful for the printed, but not so much for the digital output. This could be:

- page numbering
- repeating information in headers and footers

Further unimportant and decorative objects are:

- background images
- other decorative images which doesn’t add information to the content
- various kinds of strokes 
	- for decoration
	- for separating columns 
	- table lines 

The most efficient way is to determine the artifacts already in the creation program and to include them in the PDF export. The following instructions are available for this purpose:

- [Defining Artifacts in InDesign](https://accessible-pdf.info/en/basics/defining-artifacts-in-indesign/)
- [Defining Artifacts in Word](https://accessible-pdf.info/en/basics/defining-artifacts-in-word/)

In Acrobat, artifacts can be defined either in the [tag tree](#tagTree) or with [Reading Order tool](#readingOrder). The contents marked as artifacts can be checked for each page in the navigation pane [“Contents”](#contents).

<aside class="note-block" markdown="1">
Note: The free [Adobe Acrobat Reader](https://get.adobe.com/reader/) does not allow you to make any adjustments to the tag structure neither to edit the artifacts. You’ll need [Adobe Acrobat](https://acrobat.adobe.com/uk/en/acrobat.html) to do that.
</aside>

## Create artifact in navigation pane “Tags” {#tagTree}

<aside class="note-block" markdown="1">
For this tutorial, the initial situation is a completely tagged document.
</aside>

1. Open the navigation pane “Tags” 
2. Find the decorative content within the tags, see also “[Find tagged text in the tag tree](https://accessible-pdf.info/en/basics/general-working-with-pdf-tags-in-acrobat/#findtag)” within “[General working with PDF tags in Acrobat](https://accessible-pdf.info/en/basics/general-working-with-pdf-tags-in-acrobat/)”.
3. Right-click on the content (with the small box icon) and select “Change Tag to Artifact”. ![Context menu with selected option “Change tag to Artifact”. Screenshot from Acrobat.](https://accessible-pdf.info/content/uploads/acrobat-change-tag-to-artifact.png)
3. The opening dialog allows you to describe the type of artifact and its page position in more detail. Seitenzahlen ![In the Artifact options you can choose between the types “Page”, “Pagination” and “Layout”. In addition, there are four option fields for the positions: Left, Top, Right and Bottom. Screenshot from Acrobat.](https://accessible-pdf.info/content/uploads/acrobat-artifcat-options.png)
4. If this artifact was placed alone within a tag, the empty tag should be deleted.

<aside class="note-block" markdown="1">
The navigation pane “Tags” can be opened by clicking on the icon with the name tag.
![Tag icon in Acrobat](https://accessible-pdf.info/content/uploads/tag-icon.png)
If it is not yet listed in the left bar, it can be added with a right click or under “Display” → “Show/Hide” → “Navigation Pane” and the Navigation Pane will be displayed.
</aside>

## Create artifact with “Reading Order” tool {#readingOrder}

With the “Reading Order” tool it goes faster. On the other hand, you can work less precisely and cannot see exactly where what is happening.

1. Select the “Reading Order” tool. If you don’t have it in your “Quick Tools”, you can find it within the Accessibility tools group.
2. Your mouse will change and a new window will open.
3. Select the area you want to mark as artifact. You can do this by clicking in the upper left corner or by clicking and holding the mouse and dragging a selection square.
4. Finally click on the button “Background/Artifact” in the window.

![How is an artifact created using the “Reading Order” tool? Gif animation.](https://accessible-pdf.info/content/uploads/acrobat_artifact2_en.gif)

## Check artifacts in navigation pane “Content” {#content}

If already tagged items are marked as artifacts, they disappear in the tag tree. However, artifacts are still present in the “Content” navigation pane. They can be recognized by the marking: “Container <Artifact> …”.

![The navigation pane “Content” with a highlighted artifact container. Screenshot in Acrobat.](https://accessible-pdf.info/content/uploads/acrobat-artifact.png)

<p class="warning-block" markdown="1">
In the “Contents” navigation pane, the element that is at the top is at the lowest position. The order of this listing and the display order is therefore reversed. In this context, the following problem may occur: „[Incorrect display order makes contents disappear](https://accessible-pdf.info/en/incorrect-display-order-makes-contents-disappear)“
</p>