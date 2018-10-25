---
ID: 217
post_title: '<code>Figure</code> ohne Begrenzungsrahmen'
author: Stefan Brechbühl
post_excerpt: 'In PDFs, welche aus Word exportiert werden, fehlen bei allen vorhandenen Bildern die <em>Bounding Box</em> Attribute, egal mit welcher Layoutoption sie platziert wurden.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/de/tutorials/figure-ohne-begrenzungsrahmen/
published: true
post_date: 2018-01-12 16:21:50
tags:
  - Automatische Prüfung
  - Microsoft Word
categories:
  - 13. Grafiken
---
## Problembeschreibung

In PDFs, welche aus Word exportiert werden, fehlen bei allen vorhandenen Bildern die *Bounding Box* Attribute, egal mit welcher Layoutoption sie platziert wurden.

Problem festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows
*   Microsoft Word für Mac (mind. bis Version 15.33)

### PAC 3 Fehlermeldung

> "Figure"-Strukturelement ohne Begrenzungsrahmen

### Prüfpunkt des Matterhorn Protokolls

Ist nicht Bestandteil des Matterhorn Protokolls.

## Manueller Lösungsweg in Acrobat

1.  Kopiere den Alternativtext des betroffenen Bildes (Navigationsfenster „Tags“ → Rechtsklick auf `<Figure>` → Eigenschaften → *Tag*)
2.  `<Figure>` *Tag* löschen
3.  `<Figure>` *Tag* mit dem „Leserichtung“ Werkzeug neu anlegen
4.  Prüfe die Position des neuen `<Figure>` *Tag* im *Tagbaum* (Leserichtung)
5.  Füge den Alternativtext in neuem `<Figure>` ein (Navigationsfenster „Tags“ → Rechtsklick auf betroffenes `<Figure>` → Eigenschaften → *Tag*)