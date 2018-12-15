---
ID: 262
post_title: Glossary
author: Stefan Brechbühl
post_excerpt: >
  The glossary explains terms, which are
  important if you work with accessible
  PDF.
layout: page
permalink: https://accessible-pdf.info/en/glossary/
published: true
post_date: 2018-01-25 16:33:11
tags: [ ]
categories: [ ]
---
The glossary explains terms, which are important if you work with accessible PDF.

<h2 id="accessible">accessible PDF</h2>

Through accessibility no people with disabilities are going to be excluded. This means that electronic documents need to meet technical conditions so that everyone can use them independently.

A PDF is accessible if it's compatible with the <a href="#pdfua">PDF/UA</a> standard and follows the <a href="https://www.w3.org/WAI/intro/wcag">WCAG</a> guidelines.

The most important basics are achieved if

<ul>
<li>the document contains semantic PDF tags, which generate the logical document structure and reading order;</li>
<li>objects that are not relevant are marked as artifact (e.g. decorative elements, repeating header and footer);</li>
<li>basically all text of the document is available as text and not as an image (OCR scanning);</li>
<li>alternative texts are used to describe non text elements (images and graphics);</li>
<li>no low or bad color contrasts are used.</li>
</ul>

<h2 id="alt-text">alt text</h2>

An alt text (short for alternative text) describes a non-text element, like an image / a graphic. The invisible text can be read and displayed by software, especially <a href="#assistive-technology">AT</a>.

The alt text should be as short and concise as possible and describe what is visible on the picture. It should not contain any additional information that would not be visually recognised, e.g. the name of the photographer or names of visible persons and things that would not be clearly recognised by the context. This is the big difference to a visible caption / a picture description, which can transmit additional information.

Not every picture/graphic needs an alt text. WAI (Web Accessibility Initiative) offers a valuable decision support with “<a href="https://www.w3.org/WAI/tutorials/images/decision-tree/">An alt Decision Tree</a>” and the <a href="https://www.w3.org/WAI/tutorials/images/">Web Accessibility Tutorials</a>. The main difference between HTML and PDF is the handling of decorative images (e.g. background images, lines and other decorative shapes). In PDF those are marked as artifacts, see also “<a href="https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/">Unimportant and decorative objects as artifact</a>”. While decorative images do not need any alt text, functional images should explain the function / the goal and not its image content. This includes linked images in particular.

<h2 id="alternative-text">alternative text</h2>

see <a href="#alt-text">alt text</a>

<h2 id="assistive-technology">assistive technology</h2>

AT (abbr. for assistive technology) is the main term for tools people with disabilities use to read and understand content.

There are the following software and hardware for example:

<ul>
<li><a href="https://en.wikipedia.org/wiki/Screen_reader">Screen reader</a></li>
<li><a href="https://en.wikipedia.org/wiki/Refreshable_braille_display">Refreshable braille display</a></li>
<li>Screen magnifier</li>
<li>Voice recognition</li>
<li>Special keyboards and mice</li>
<li>Eye tracking, mouth stick</li>
<li>…</li>
</ul>

<h2 id="at">AT</h2>

AT is the abbreviation of <a href="#assistive-technology">assistive Technology</a>

<h2 id="automatic-testing">automatic testing</h2>

As the <a href="#matterhorn">Matterhorn Protocol</a> says there are 87 failure conditions which can be checked through software. <a href="#pac">PAC</a> for instance can find such kind of errors.

<h2 id="logical-reading-order">logical reading order</h2>

The logical reading order stands for the correct order in which individual parts of the content should be read so that the document is understood correctly. A good practical example is a multi-column layout in which line by line within a column must be read and not over the entire page.

Assistive technology (<a href="#assistive-technology">AT</a>) requires PDF <a href="#tags">tags</a> not only to recognize the meaning of the contents, but also to derive the logical reading order. Unfortunately, not all AT use the order of the tags but take them from the visual order of the contents, which is displayed in Acrobat in the navigation pane “Order”. Adapting this visual order to the logical reading order can be very time-consuming and is not a requirement of <a href="#pdfua">PDF/UA</a>.

<img src="https://accessible-pdf.info/wp/wp-content/uploads/acrobat-info-tags-order.png" alt="Acrobat info window: The Tags panel displays the logical document structure assistive technologies use to interpret the document. The logical structure defines the reading order and identifies elements such as headings, lists, tables, and other components that assistive technology users rely on for document navigation. To modify the reading order that is used by Adobe Acrobat and Adobe Acrobat Reader’s Read Out Loud text-to-speech tool, please use the Reading Order panel." />

The logical reading order can be checked using the tag tree in Acrobat, the “Screenreader Preview” in <a href="#pac">PAC</a>, the Acrobat plugin <a href="https://www.callassoftware.com/en/products/pdfgohtml">“pdfGoHTML”</a> or an <a href="#assistive-technology">AT</a>.

<h2 id="manual-testing">manual testing</h2>

As the <a href="#matterhorn">Matterhorn Protocol</a> says there are 47 failure conditions which need human inspection. Software like <a href="#pac">PAC</a> can warn for possible semantic issues at most.

<h2 id="matterhorn">Matterhorn Protocol</h2>

The <a href="https://www.pdfa.org/publication/the-matterhorn-protocol-1-02/">Matterhorn Protocol</a> is a document by the <a href="https://www.pdfa.org/">PDF Association</a> and helps software developers and testers to check a PDF for PDF/UA compatibility. It describes 136 failure conditions. 87 of them can be tested by software. 47 of them have to be checked manually by a human. 2 failure conditions cannot be categorized.

<h2 id="order">order</h2>

see <a href="#logical-reading-order">logical reading order</a>

<h2 id="pac">PAC</h2>

<a href="http://access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html">PAC</a> is one of the most comprehensive and free of charge testing tools. It checks PDF documents for its compatibility with the PDF/UA standard. PAC evaluates the failure conditions which can be tested by software. It includes a screenreader preview tool to check the failure conditions which need to be tested manually. The Swiss organization <a href="http://access-for-all.ch/en/">“Access for all”</a> distributes PAC. The software is only available for Windows.

<h2 id="pdfua">PDF/UA</h2>

PDF/UA is the ISO standard 14289-1. The part “UA” stands for universal accessibility. The standard is aimed at production companies of software and <a href="#assistive-technology">assistive technology</a>. To check a document for PDF/UA, you do not need to purchase the ISO documentation. Using the free <a href="#matterhorn">Matterhorn Protocol</a>, a document can be checked for PDF/UA compatibility.

PDF/UA is based on the <a href="#wcag">WCAG</a>, does not contradict those guidelines, but does not cover all regulations of the WCAG.

<h2 id="reading-order">reading order</h2>

see <a href="#logical-reading-order">logical reading order</a>

<h2 id="tagged-pdf">Tagged PDF</h2>

see <a href="#tags">tags</a>

<h2 id="tags">tags</h2>

If your PDF contains tags – also called Tagged PDF – one big and important step of machine readability and thus accessibility has been done. However, the mere existence is not enough. The PDF tags must also reflect the semantics of the document. This means, for example, that a heading is not only visually recognisable as such by a larger font, but also by machine, by a heading tag.

<a href="https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/">PDF/UA</a> specifies that all elements of a document must either be tagged or marked as artifacts. You can find more about artifacts in “<a href="https://accessible-pdf.info/en/basics/unimportant-and-decorative-objects-as-artifact/">Unimportant and decorative objects as artifact</a>”.

The possible PDF tags (according to the PDF 1.7 standard) can be found in the “<a href="https://accessible-pdf.info/de/basics/uebersicht-der-pdf-tags/">Overview of PDF tags</a>”. Some of the available PDF tags are very similar to the HTML tags.

<h2 id="wcag">WCAG</h2>

The <a href="https://www.w3.org/TR/WCAG21/">WCAG</a>, short for Web Content Accessibility Guidelines, are the recommendations/guidelines of the group <a href="https://www.w3.org/WAI/">WAI</a> (short for Web Accessibility Initiative), which in turn is part of the <a href="https://www.w3.org/">W3C</a> (short for World Wide Web Consortium). These guidelines have been translated into several languages, including <a href="https://www.w3.org/Translations/WCAG20-de/">German</a>.

WCAG can be considered the most important, general set of rules when it comes to digital and accessible communication. PDF is also considered a possible technology of web content, which is why WCAG also applies to PDF.

For the technical implementation of accessible PDFs, however, the <a href="#pdfua">PDF/UA</a> standard is required, not the WCAG.

WCAG is referred to in many national and international laws on digital accessibility.