---
title: Add an alt text in InDesign
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2021-06-08
description: An alt text (short for alternative text) describes a non-text element, such as a photo or graphic. In this tutorial, we’ll look how to add an alt text in InDesign.
order: 3
---

An alt text (short for alternative text) describes a non-text element, such as a photo or graphic. The invisible text can be read and rendered by software, especially [assistive technology (AT)](/glossary/#assistive-technology).

In the glossary you can learn more about what an [alt text](/glossary/#alt-text) is and how it should look like. In this tutorial, we’ll look how to add an alt text in InDesign.

## Add an alt text in InDesign

1. Click on the image.
2. Select “Object” → “Object Export Options”.
3. The “Alternative text” tab is displayed.
4. Select the option “Custom” in the dropdown “Alt Text Source” if you have not already stored the alt text in an XML structure or in metadata of the image.

<p class="note">
  If multiple images need to be edited, you can leave the “Object Export Options” window open and
  click from one to another image. The contents of the “Object Export Options” window will change
  depending on which image is clicked.
</p>

Der Alt-Text wird einem `<Figure>` _Tag_ hinzufügt. Deshalb müssen die Punkte in [„PDF-_Tags_ in InDesign festlegen“](/de/basics/indesign/defining-pdf-tags-in-indesign/) unbedingt beachtet werden.

## Add an alt text in Adobe InDesign with MadeToTag

Using the [MadeToTag plugin](https://www.axaio.com/doku.php/en:products:madetotag), you can view all the images in one window and give them an alt text. Click on “Show overview” in task 3 called “Alternative text”.

In addition, an overview of all metadata and alt texts can be generated in a new InDesign document.

## PDF export

By taking the above measures and using the correct export settings, the alternative texts will be included when exporting as PDF. The export settings are described in ["Defining PDF tags in InDesign"](/basics/indesign/defining-pdf-tags-in-indesign/).

<p class="note">
  Images and graphics are tagged with the <code>&lt;Figure&gt;</code> tag. The alt text defined in
  InDesign is applied to this tag.
</p>
