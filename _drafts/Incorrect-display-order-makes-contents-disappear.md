---
ID: 58389
post_title: >
  Incorrect display order makes contents
  disappear
author: Stefan Brechbühl
post_excerpt: ""
layout: tutorials
permalink: 'https://accessible-pdf.info/?post_type=tutorials&p=58389'
published: false
tags: [ ]
categories: [ ]
---
## Issue description

When manually tagging or marking artifacts within Acrobat, content may suddenly become invisible. It seems that something has been deleted. In reality, however, there has been a movement in the display order. The corresponding content was not deleted, but is hidden behind another object.

### PAC 3 warning/error

There is no warning or error for this visual issue.

### Failure Conditions of the Matterhorn Protocol

It’s not a PDF/UA error, therefore no checkpoint applies.

## Manual approach in Acrobat

In the Contents navigation pane, the element that is at the top is at the lowest level. The order of this listing and the display level is therefore reversed.

In order to make content visible again that is hidden behind another object, the entry containing the invisible content must be moved further down. Of course, the solution also works the other way around by moving the object that hides content further up.