---
title: Figure ohne Begrenzungsrahmen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 13. Grafiken
description: In PDFs, welche aus Word exportiert werden, fehlen bei allen vorhandenen Bildern die Bounding Box Attribute, egal mit welcher Layoutoption sie platziert wurden.
---

In PDFs, welche aus Word exportiert werden, fehlen bei allen vorhandenen Bildern die _Bounding Box_ Attribute, egal mit welcher Layoutoption sie platziert wurden.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows
- Microsoft Word für Mac (mind. bis Version 15.33)

## PAC 3 Fehlermeldung

> "Figure"-Strukturelement ohne Begrenzungsrahmen

## Prüfpunkt des Matterhorn Protokolls

Ist nicht Bestandteil des Matterhorn Protokolls.

---

## Manueller Lösungsweg in Acrobat

1. Kopiere den Alternativtext des betroffenen Bildes (Navigationsfenster „Tags“ → Rechtsklick auf `<Figure>` → Eigenschaften → _Tag_)
2. `<Figure>` _Tag_ löschen
3. `<Figure>` _Tag_ mit dem „Leserichtung“ Werkzeug neu anlegen
4. Prüfe die Position des neuen `<Figure>` _Tag_ im _Tagbaum_ (Leserichtung)
5. Füge den Alternativtext in neuem `<Figure>` ein (Navigationsfenster „Tags“ → Rechtsklick auf betroffenes `<Figure>` → Eigenschaften → _Tag_)
