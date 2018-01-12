---
ID: 217
post_title: 'Bild fehlt <em>Bounding Box</em>'
author: Stefan Brechbühl
post_excerpt: ""
layout: tutorials
permalink: >
  https://accessible-pdf.info/de/tutorials/bild-fehlt-bounding-box/
published: true
post_date: 2018-01-12 16:21:50
tags:
  - automatische Prüfung
  - Microsoft Word
categories:
  - 13. Grafiken
---
## Problembeschreibung

In PDFs, welche aus Word exportiert werden, fehlen bei allen vorhandenen Bildern die Bounding Box Attribute, egal mit welcher Layoutoption sie platziert wurden.

Problem festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows
*   Microsoft Word für Mac (mind. bis Version 15.33)

### PAC 2 Fehlermeldung

> Figure element on a single page with no bounding box

### Prüfpunkt/e Matterhorn Protokoll

Ist nicht Bestandteil des Matterhorn Protokolls.

## Manueller Lösungsweg in Acrobat

1.  Alternativtext des betroffenen Bildes kopieren (Tag-Baum → Rechtsklick auf betroffenes `<Figure>` → Eigenschaften → Tag)
2.  `<Figure>` Tag löschen
3.  `<Figure>` Tag neu mit Touch-Up Werkzeug neu anlegen
4.  Alternativtext in neuem `<Figure>` einfügen (Tag-Baum → Rechtsklick auf betroffenes `<Figure>` → Eigenschaften → Tag)