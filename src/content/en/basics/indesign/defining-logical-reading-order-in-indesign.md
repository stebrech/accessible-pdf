---
title: Defining logical reading order in InDesign
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-07
description: PDF tags are not only needed to give content a semantic meaning, but also to determine the logical reading order. In InDesign, the order of the tags can be defined so that the logical reading order is already correct for the generated PDF.
order: 2
---

PDF tags are not only needed to give content a semantic meaning, but also to determine the logical reading order. In InDesign, the order of the tags can be defined so that the logical reading order is already correct for the generated PDF.

<p class="note">
  What does <Link to="/glossary/#logical-reading-order">logical reading order</Link> mean? Find out
  more in the glossary.
</p>

## Articles panel

In order to define the logical reading order already in InDesign, the “Articles” panel is required. All relevant content must be packed into an article.

1. Select a text frame (or another object) first.
2. If no articles exist yet, a new article can be created directly with the selected object. Click on the small page symbol in the bottom right corner of the panel. Then you will be asked to give the article a name. The best is to use one descriptive word.
3. If an article already exists, it can be added to an article by clicking on the plus symbol in the bottom right corner of the panel.

<p class="warning">
  Before the document can be exported, the option “Use for reading order in Tagged PDF” must be
  activated in the Articles panel options.
</p>

![Screenshot of panel options with reading order option enabled](src/assets/img/indesign-articles-option.png)

### Later adjustments

If an object has to be moved, this can be done simply by “Drag&Drop”. Click and drag an object to the correct position in the same or another article.

### Threading text

If text frames are linked together, the text flows dynamically from one frame to the next. This is not only practical, but also makes sense from a technical point of view. They are _tagged_ in a common container.

In the “Articles” panel, linked text frames are treated as one object. If you add the first text frame, all threading text are included and follow the defined order.

<p class="note">
  More about <a href="https://helpx.adobe.com/indesign/using/threading-text.html">threading text</a> 
  you can read in Adobe’s online manual.
</p>

### Anchored objects

Images or other objects can also be integrated into an article in order to tag them in the correct order.

In order to place an image at a certain position in the logical order, it usually has to be anchored within a text frame. If this is done, the image can be considered as part of the text frame. It no longer appears separately in the “Articles” panel.

To anchor an object, click on the filled, small square in the frame at the top edge. Keep the mouse button pressed and move the pointer to the desired position within a text frame and release it.

<p class="note">
  More about 
  <a href="https://helpx.adobe.com/indesign/using/anchored-objects.html">anchored objects</a> you
  can read in Adobe’s online manual.
</p>

<p class="note">
  Since images are non-text content, an alternative text must be provided if they are relevant to
  the content. If they are not relevant, they do not belong in an article. For further information,
  see also <Link to="/glossary/#alt-text">alt text</Link> in the glossary or 
  <Link to="/basics/general/add-an-alt-text/">“Add an alt text”</Link>.
</p>

## Form fields and tab order

Form fields are also objects that are best anchored within a text frame as well. When exporting PDF as “Adobe PDF (Interactive)”, the option “Use Structure for Tab Order” can be activated and the tab order is adopted correctly according to the logical reading order.

![Screenshot of export options with the PDF interactive format.](src/assets/img/indesign-export-interactive.png)

## Additional features with MadeToTag

The paid InDesign plugin [MadeToTag](https://www.axaio.com/doku.php/en:products:madetotag) from Axaio can help you work with the “Articles” panel.

In the second task step of the plugin, all contents of an article or all articles can be shown or hidden. This helps to find missing content which has to be added to an article. On the other hand, objects that should not be tagged can be better identified as well.

![Screenshot of the second task within the MadeToTag plugin.](src/assets/img/mtt_article.png)

Similar to what is described in [“Check semantics and logical reading order”](/basics/general/check-semantics-and-logical-reading-order/), the plugin can be used to preview tags and their order within InDesign.
