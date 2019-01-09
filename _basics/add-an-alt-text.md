---
ID: 43759
post_title: Add an alt text
author: Stefan Brechbühl
post_excerpt: >
  An alt text (short for alternative text)
  describes a non-text element, like an
  image or a graphic. The invisible text
  can be read and displayed by software,
  especially AT. In this post we’re
  looking how to add such alt texts in
  Microsoft Word, Adobe InDesign and Adobe
  Acrobat.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/add-an-alt-text/
published: true
post_date: 2018-10-18 05:29:42
tags:
  - Adobe InDesign
  - Microsoft Word
categories: [ ]
---
An alt text (short for alternative text) describes a non-text element, like an image or a graphic. The invisible text can be read and displayed by software, especially [AT][1]. In the glossary you can learn more about the meaning of an [alt text][2] and what it should look like.

In this post we’re looking how to add such alt texts in [Microsoft Word][3], [Adobe InDesign][4] and [Adobe Acrobat][5].

## Add an alt text in Microsoft Word {#word}

The possible ways to add an alt text in Word depend on which version you’re using and whether you are in compatibility mode (if you are working with the old .doc format). No matter which version you have, right clicking on the image will always get you there.

1.  Right click on the image.
2.  Choose “Format Picture” or, if available, a direct command “Edit Alt Text”.
3.  The last step can now look like this:
    
    1.  If a new area “Format Picture” opens on the right, click on the third tab “Layout & Properties” and write your alt text in “Alt text” → “Description”.
    2.  Another possible variation is that a window “Format Picture” opens, in which you have to change to the tab “Alt Text”.
    3.  A further possibility is the opening of a window in which the alt text can be entered directly.

The alternative texts are now delivered with the PDF export and do not have to be added again in Acrobat.

The alt text is added to a `<Figure>` tag. Therefore the points in [“Defining PDF tags in Word”][6] must be observed.

## Add an alt text in Adobe InDesign {#indesign}

1.  Click on the image.
2.  Select “Object” → “Object Export Options”.
3.  The “Alternative text” tab is displayed.
4.  Select the option “Custom” in the dropdown “Alt Text Source” if you have not already stored the alt text in an XML structure or in metadata of the image.

Note: If multiple images need to be edited, you can leave the “Object Export Options” window open and click from one to another image. The contents of the “Object Export Options” window will change depending on which image is clicked.

The alt text is added to a `<Figure>` tag. Therefore the points in [“Defining PDF tags in InDesign”][7] must be observed.

## Add an alt text in Adobe InDesign with MadeToTag

Using the [MadeToTag][8] plugin, you can view all the images in one window and give them an alt text. Click on “Show overview” in task 3 called “Alternative text”.

In addition, an overview of all metadata and alt texts can be generated in a new InDesign document.

## Add an alt text in Adobe Acrobat {#acrobat}

As it is generally the case for tagging documents, the process of adding alt texts is better done in the source document. The reason for this is that all work in Acrobat must be repeated when the PDF is created again.

The following solutions assume that the images have already been tagged. If you need more information about this, have a look at the following articles:

*   [Defining PDF tags in Word][6]
*   [Defining PDF tags in InDesign][7]
*   [Create and modify PDF tags in Acrobat][9]

### Solution 1

1.  Open the navigation pane “Tags”.
2.  Navigate to the affected `<Figure>` tag.
3.  Right click on this tag and select “Properties”.
4.  Add the alt text in the tab “Tag” and the column “Alternate text”.

### Solution 2

1.  Click on “Reading Order” within the “Accessibility” tools.
2.  A new window “Reading Order” opens and the contents are displayed in different grey areas.
3.  Right-click on the grey area in which your image is located.
4.  Select “Edit Alternate Text” and write your alt text into the newly opened “Alternate Text” window.

 [1]: https://accessible-pdf.info/en/glossary/#assistive-technology
 [2]: https://accessible-pdf.info/en/glossary/#alt-text
 [3]: #word
 [4]: #indesign
 [5]: #acrobat
 [6]: https://accessible-pdf.info/en/basics/defining-pdf-tags-in-word/
 [7]: https://accessible-pdf.info/en/basics/defining-pdf-tags-in-indesign/
 [8]: https://www.axaio.com/doku.php/en:products:madetotag
 [9]: https://accessible-pdf.info/en/basics/create-and-modify-pdf-tags-in-acrobat/