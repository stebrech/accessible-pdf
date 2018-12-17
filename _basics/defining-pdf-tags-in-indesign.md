---
ID: 362
post_title: Defining PDF tags in InDesign
author: Stefan Brechbühl
post_excerpt: >
  In InDesign, the heading tags can be
  defined within the paragraph style
  options. Go to “Export Tagging” and
  assign your paragraph style to the
  proper PDF tag.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/defining-pdf-tags-in-indesign/
published: true
post_date: 2018-04-06 19:53:24
tags:
  - Adobe InDesign
categories: [ ]
---
In InDesign you can define heading tags manually through the paragraph style settings. For tables, lists and footnotes you’ll automatically get the appropriate tags if you use the available tools correctly.

<h2>Export tags</h2>

One of the key structure elements are nested multi-level headings, see also <a href="https://accessible-pdf.info/en/basics/structure-with-the-help-of-multi-level-headings/">“Structure with the help of multi-level headings”</a>. For setting the export tag for each paragraph style,

<ol>
<li>right click on the paragraph style you want to change and choose “Edit”; </li>
<li>open the last section called “Export Tagging”;</li>
<li>and choose the appropriate tag in the last dropdown field, labeled as “PDF” → “Tag”.</li>
</ol>

You’re able to assign any heading tag to a paragraph style. There is also the possibility to select “Artifact” if the text has not relevant information, read more about this in <a href="https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/">“Unimportant and decorative objects as artifact”</a>).

<h3>Set all tags at once</h3>

In the flyout menu on the top right of the panel “Paragraph Styles” you’ll find the command “Edit all export tags”. In the opening window you need to change to “PDF”. After that you’re able to adjust the export tags all at once.

<h2>Tables, lists and footnotes</h2>

For creating tables use the menu item “Table” and don’t cheat by just using tabulators. This wouldn’t semantically be correct and causes issues with the <a href="https://accessible-pdf.info/en/glossary/#logical-reading-order">logical reading order</a>. Inside the table options you can choose how many header and footer rows the table should have.

You need to create lists the right way as well. You mustn’t only type a hyphen sign or number to create a list. Within the paragraph style options you’re able to create a correct numbered or unordered lists.

Correct footnotes or endnotes can be added within the menu item “Type”.

<h2>Export</h2>

As soon as your document is ready, there is an important export setting you need to check. The option “Create Tagged PDF” has to be activated. You’ll find it either you choose the format “Adobe PDF (Print)”

<img src="https://accessible-pdf.info/wp/wp-content/uploads/indesign_export-option-print.jpg" alt="Screenshot of export options with the PDF print format." />

or “Adobe PDF (Interactive)”.

<img src="https://accessible-pdf.info/wp/wp-content/uploads/indesign_export-option-interactive.jpg" alt="Screenshot of export options with the PDF interactive format." />

If your document is interactive and includes hyperlinks or form fields you have to choose “Adobe PDF (Interactive)” and check the option “Use Structure for Tab Order” as well.

<h2>Role mapping of tags</h2>

You’ll realise that the document has been tagged by looking into the ”Tags” navigation pane. However, the tags are named by the paragraph style and not by the export tag you chose in InDesign.

So, why the extra work? InDesign has assigned the correct tags with the help of the role mapping. That means each tag with the name of the paragraph style is mapped to <a href="https://accessible-pdf.info/en/basics/overview-of-the-pdf-tags/">a valid PDF tag</a>.

To check or change those rules, open the “Tags” menu and choose “Edit Role Map”.

Since Adobe Acrobat DC 2017 you have a new option in the “Tags” menu called “Apply Role Mapping to Tags”. If this option is active you see the mapped tags instead of the name they are actually called.