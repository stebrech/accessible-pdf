---
post_title: Incorrect display order makes contents disappear
author: Stefan Brechbühl
layout: tutorials
published: false
tags: [ ]
categories: [ ]
---
## Issue description

In connection with the manual tagging or marking of artifacts within Acrobat, it can happen that content is suddenly no longer visible. It appears that something has been deleted. However, in reality there has been a movement in the display order. The corresponding content was not deleted, but is hidden behind another object, such as a colored area.

### PAC 3 warning/error

There is no warning or error for this visual issue.

### Failure Conditions of the Matterhorn Protocol

It’s not a PDF/UA error, therefore no checkpoint applies.

## Manual approach in Acrobat

In the “Contents“ navigation pane, the element that is at the top is at the lowest level. The order of this listing and the display level is therefore reversed.

In order to make contents visible again that are hidden behind another object (e.g. a surface), the entry containing the invisible contents must be moved further down. Of course, the solution also works the other way around by moving the object that hides content further up.