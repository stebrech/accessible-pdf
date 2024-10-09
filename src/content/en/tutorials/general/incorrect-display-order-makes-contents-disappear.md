---
title: Incorrect display order makes contents disappear
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-01-09
category: –
description: When manually tagging or marking artifacts within Acrobat, content may suddenly become invisible. It seems that something has been deleted. In reality, however, there has been a movement in the display order. The corresponding content was not deleted, but is hidden behind another object.
---

When manually tagging or marking artifacts within Acrobat, content may suddenly become invisible. It seems that something has been deleted. In reality, however, there has been a movement in the display order. The corresponding content was not deleted, but is hidden behind another object.

## PAC 3 warning/error

There is no warning or error for this visual issue.

## Failure Conditions of the Matterhorn Protocol

It’s not a PDF/UA error, therefore no checkpoint applies.

---

## Manual approach in Acrobat

In the “Contents” navigation pane, the element that is at the top is at the lowest level. The order of this listing and the display level is therefore reversed.

In order to make contents visible again that are hidden behind another object, the entry containing the invisible contents must be moved further down. Of course, the solution also works the other way around by moving the object that hides content further up.
