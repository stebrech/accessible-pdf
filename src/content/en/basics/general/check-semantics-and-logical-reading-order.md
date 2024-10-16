---
title: Check semantics and logical reading order
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-12-07
description: The semantics and the logical reading order can be checked in Adobe Acrobat using the tag tree. However, this might not be very comfortable and clear, which is why further possibilities are shown here.
order: 2
---

The semantics and the [logical reading order](/glossary/#logical-reading-order) can be checked in Adobe Acrobat using the tag tree. However, this might not be very comfortable and clear, which is why further possibilities are shown here.

## PAC

In addition to checking the automatically testable criteria, the [PDF Accessibility Checker, short PAC,](/glossary/#pac) can also be used for the [manual testing](/glossary/#manual-testing) part.

### Screenreader Preview

The semantics can be checked very well using the colored content blocks of the “Screenreader Preview”. In particular, the headings that are important for structuring can be perceived abstractly this way, see also [“Structure with the help of multi-level headings”](/basics/general/structure-with-the-help-of-multi-level-headings/).

![Screenshot: On the left side the PDF is opened in Acrobat. On the right the same PDF is in the screenreader preview of PAC.](src/assets/img/acrobat_and_pac-screenreader-preview.png)

The logical reading order can be checked with the “Screenreader Preview” as well. For this purpose, the relevant PDF can be displayed on a larger screen on one side and the screenreader preview on the other side at the same time. Thus the visual appearance and the tags can be compared directly with each other and it’s easier to determine if something is not logical about the order.

What also can be detected by this type of testing are tagged but irrelevant content, or the opposite, relevant content marked as artifact. See also:

- [Defining artifacts in InDesign](/basics/indesign/defining-artifacts-in-indesign/)
- [Defining artifacts in Word](/basics/word/defining-artifacts-in-word/)
- [Create and check artifacts in Acrobat](/basics/acrobat/create-and-check-artifacts-in-acrobat/)

### Logical Structure

Another tool in PAC is “Logical Structure”. It shows the tag tree as you already know it from Adobe Acrobat. The main difference here is the additional information that is displayed on the right-hand side without any further mouse click.

The tool is perfectly suited to check the logical reading order by displaying the “Page View” tab. If you now navigate in the left structure tree with the arrow keys up and down, you get a visual indication on the right where this part of the content is located.

## pdfGoHTML (Acrobat Plugin)

With the Acrobat Plugin [“pdfGoHTML”](https://www.callassoftware.com/en/products/pdfgohtml) does what the name says – it converts a tagged PDF into a HTML document. You can choose one of several themes. In this case the option “Structure Tags” must be selected to check the correct semantics.

The logical reading order can be checked, as described in PAC’s [Screenreader Preview](#screenreader-preview). On a large screen the PDF on one side and on the other the generated HTML document can be compared with each other.
