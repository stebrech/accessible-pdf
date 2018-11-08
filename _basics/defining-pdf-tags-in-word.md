---
ID: 3048
post_title: Defining PDF tags in Word
author: Stefan Brechbühl
post_excerpt: >
  One of the key structure elements are
  nested multi-level headings. Such
  structuring work can be achieved by
  consistently using paragraph styles in
  Word.
layout: basics
permalink: >
  https://accessible-pdf.info/en/basics/defining-pdf-tags-in-word/
published: true
post_date: 2018-06-21 16:32:30
tags:
  - Microsoft Word
categories: [ ]
---
One of the key structure elements are nested multi-level headings, see also [“Structure with the help of multi-level headings”][1]. Such structuring work can be achieved by consistently using paragraph styles in Word. If used correctly, the headings will be exported to the PDF with the appropriate tag.

Word already provides a large styles catalog, including “Heading 1“ to “Heading 9”. Currently, in PDF there are only `<H1>` to `<H6>` numbered heading tags available. Therefore, the paragraph styles “Heading 7” to “Heading 9” are mapped with a general paragraph tag (`<P>`).

If you want you can use your own paragraph styles and give them the appropriate “Outline Level”. Let’s have a look at this option.

1.  Open the styles pane. Windows users need to click on a small icon on the bottom right of the Quick Style Gallery.
2.  Hover over the style you want to change and click on the appearing dropdown menu.
3.  Click on modify style.
4.  Go to the paragraph settings with the help of the dropdown menu on the bottom left.
5.  The second general option is called the outline level. This level will be used to generate the PDF heading tag: 
    *   Body Text = `<P>`
    *   Level 1 = `<H1>`
    *   Level 2 = `<H2>`
    *   Level 3 = `<H3>`
    *   and so on

<iframe width="750" height="468" src="https://www.youtube-nocookie.com/embed/ahD5WYjfuLE?controls=0&hl=en" title="YouTube video tutorial: Defining PDF tags in Word" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
## Lists

Lists are great to structure multiple informations in a clear and brief way. However, you should use the correct list tools.

Depend on your configuration, Word can automatically convert a hyphen sign followed by a space into a correct list. However, you should format your list by conscious.

You can do that with the help of the following buttons:

![List tools in Word.][2]

1.  The first button creates an unordered list,
2.  the second an ordered list and
3.  the third gives you the ability to use a multi level list. Besides predefined styles you can create your own list style by clicking on “New Multilevel list”

## Tables

When data is arranged both horizontally and vertically, it belongs inside a table. Authors sometimes create a false table with the help of tabulators. This is wrong because of the semantics and the logical reading order.

For adding a table, go to the menu item “Insert” and click on “Table”. The appearing pattern can be used to choose how many columns and rows the table should have.

![Add a table in Word. Screenshot][3]

If your cursor is placed somewhere in the table, you’ll see two additional menu tabs. There you have the possibilities to configure your table.

The most important table settings for accessibility are the options “Header Row”, “First Column” and “Last Column”. With the help of these options you’re creating table header cells.

### Layout grid

A table shouldn’t be misused as a layout grid as well. If you need multiple columns, there is an option called “Columns” within the “Layout” menu item. With the help of a column break (“Layout” → “Breaks” → “Column”) you switch to another column. With a section break (“Layout” → “Breaks” → “Continuous”) you can switch to another column layout.

## Export settings

In order to create the desired tags during PDF export, the following must be observed:

### Word for Windows

1.  Select “File” “Export“ → “Create PDF/XPS” 
2.  Click on “Options”
3.  Activate the option “Document structure tags for accessibility” if it’s not already activated

### Word for Mac

1.  Select “File” → “Save As”
2.  Select the option “PDF” in the drop-down “File format”
3.  Activate the option “Optimal for electronic distribution and accessibility”

 [1]: https://accessible-pdf.info/en/basics/structure-with-the-help-of-multi-level-headings/
 [2]: https://accessible-pdf.info/wp/wp-content/uploads/word-list.png
 [3]: https://accessible-pdf.info/wp/wp-content/uploads/word_table.png