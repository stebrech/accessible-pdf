---
ID: 218
post_title: <em>Getaggte</em> Bilder in Kopf- und Fusszeile
author: Stefan Brechbühl
post_excerpt: 'Sämtliche Inhalte in Kopf- und Fusszeile werden als Artefakt behandelt und nicht getaggt. Bilder mit inhaltlichen Wert dürfen daher nicht darin platziert werden. In Word 2013 werden bei einem <em>.docx-Dokument</em> fälschlicherweise Bilder getaggt, wenn sie mit der Layoutoption <em>„Hinter den Text“</em> platziert wurden.'
layout: tutorials
permalink: >
  http://accessible-pdf.info/de/tutorials/getaggte-bilder-in-kopf-und-fusszeile/
published: true
post_date: 2018-01-12 16:21:50
tags:
  - manuelle Prüfung
  - Microsoft Word
categories:
  - 13. Grafiken
---
## Problembeschreibung

Sämtliche Inhalte in Kopf- und Fusszeile werden als Artefakt behandelt und nicht getaggt. Bilder mit inhaltlichen Wert dürfen daher nicht darin platziert werden. In Word 2013 werden bei einem *.docx-Dokument* fälschlicherweise Bilder getaggt, wenn sie mit der Layoutoption *„Hinter den Text“* platziert wurden.

Problem festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows

### PAC 2 Fehlermeldung

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkt/e Matterhorn Protokoll

> **01-001** Artefakte sind als realer Inhalt getaggt. (→ [manuelle Prüfung][1])

## Manueller Lösungsweg in Acrobat

1.  Mit dem TouchUp-Leserichtung-Werkzeug kann ein solches Bild ausgewählt werden
2.  Der Button *„Hintergrund“* zeichnet das Bild in der Kopf- oder Fusszeile als Artifakt aus
3.  Diesen Schritt für jedes betroffene Bild wiederholen

## Manueller Lösungsweg in Word 2013

Da das Problem nur mit der Layoutoption *„Hinter den Text“* besteht, führt das Wechseln zu einer anderen Layoutoption zum Ziel.

 [1]: https://accessible-pdf.info/de/glossar/#manuelle-pruefung