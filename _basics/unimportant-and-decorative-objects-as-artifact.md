---
ID: 381
post_title: >
  Unimportant and decorative objects as
  artifact
author: Stefan Brechbühl
post_excerpt: >
  Users who need to use AT are not only
  dependent on semantically correct tags.
  It is also important to exclude
  decorative and irrelevant objects from
  the output. You can achieve this by
  marking such elements as artifacts.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/
published: true
post_date: 2018-04-10 16:22:53
tags:
  - Adobe InDesign
  - Microsoft Word
categories: [ ]
---
Users who need to use [AT][1] are not only dependent on semantically correct tags. It’s also important to exclude decorative and irrelevant objects from the output. You can achieve this by marking such elements as artifacts.

Unimportant objects are informations that are useful for the printed, but not so much for the digital output. This could be:

*   page numbering
*   repeating information in headers and footers

Further unimportant and decorative objects are:

*   background images
*   other decorative images which doesn’t add information to the content
*   various kinds of strokes 
    *   for decoration
    *   for separating columns 
    *   table lines 

## Artifacts in Microsoft Word

With Word core features isn’t possible yet to define content which is going to be an artifact in PDF. The plugin [axesPDF for Word][2] does fill this gap.

However, content in the header or footer area is automatically marked as an artifact.

## Artifacts in Adobe InDesign

### Text (within a paragraph)

You can define artifacts using the paragraph style options. The procedure is the same as described in [Define Tags in InDesign][3].

Text placed on the master page will automatically be marked as artifact.

### Objects

Decorative objects can be marked as artifact within “Object” → “Object export options”. Switch to the tab “Tagged PDF” and select “Artefact” for “Apply Tag”.

If you are using the plugin [MadeToTag][4], you don't need to do the step above. All objects outside an article are automatically handled as artifacts.

## Artifacts in Adobe Acrobat

Artifacts can be defined with the navigation pane “Tags” as well as the “Reading Order” tool. To check Which elements are handled as artifacts you can open the navigation pane “Content”.

### Navigation pane “Tags”

1.  Look for the tag with decorative content init. The quickest way is to select the content with the selection tool and click on “Find Tag from Selection” in the options of the navigation pane “Tags”.
2.  Right click on the content (with the little box icon) and choose “Change Tag to Artifact…”.
3.  The opening dialog allows you to specify the type of artifact.
4.  If this artifact was the only element within the tag, the empty tag should be deleted.

![How to create an artifact with the help of the navigation pane “Tags”? Gif animation.][5]

### “Reading Order” tool

With the “Reading Order” tool it’s done faster. In return, you aren’t able to work very precisely and not see exactly what’s happening and where.

1.  Select the “Reading Order” tool. If yet you do not have it in your “Quick Tools”, you will find it inside the "Accessibility" tools.
2.  Your mouse changes and a window opens.
3.  Select the area you want to mark as an artifact. To do this, click in the upper left corner or keep the mouse clicked and drag and select the content.
4.  Now click on the button “Background/Artifact” in the window, which opened before.

![How to create an artifact with the help of the navigation pane “Tags”? Gif animation.][6]

 [1]: https://accessible-pdf.info/en/glossary/#assistive-technology
 [2]: https://www.axes4.com/axespdf-for-word-overview.html
 [3]: https://accessible-pdf.info/en/basics/define-tags-in-indesign/
 [4]: https://www.axaio.com/doku.php/en:products:madetotag
 [5]: https://accessible-pdf.info/wp/wp-content/uploads/acrobat_artifact_en.gif
 [6]: https://accessible-pdf.info/wp/wp-content/uploads/acrobat_artifact2_en.gif