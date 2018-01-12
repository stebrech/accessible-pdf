---
post_title: Getaggte Bilder in Kopf- und Fusszeile
layout: tutorials
published: true
post_excerpt: Sämtliche Inhalte in Kopf- und Fusszeile werden als Artefakt behandelt und nicht getaggt. Bilder mit inhaltlichen Wert dürfen daher nicht darin platziert werden. In Word 2013 werden bei einem <em>.docx-Dokument</em> fälschlicherweise Bilder getaggt, wenn sie mit der Layoutoption <em>„Hinter den Text“</em> platziert wurden.
categories:
  - 13. Grafiken
tags:
  - Microsoft Word
  - manuelle Prüfung
---

## Problembeschreibung

Sämtliche Inhalte in Kopf- und Fusszeile werden als Artefakt behandelt und nicht getaggt. Bilder mit inhaltlichen Wert dürfen daher nicht darin platziert werden. In Word 2013 werden bei einem *.docx-Dokument* fälschlicherweise Bilder getaggt, wenn sie mit der Layoutoption *„Hinter den Text“* platziert wurden.

Problem festgestellt bei der PDF-Konvertierung aus:

* Microsoft Word 2013 für Windows

### PAC 2 Fehlermeldung

Keine Warnung oder Fehlermeldung zu diesem Problem!

### Prüfpunkt/e Matterhorn Protokoll

> **01-001** Artefakte sind als realer Inhalt getaggt. (→ [manuelle Prüfung](https://accessible-pdf.info/de/glossar/#manuelle-pruefung))

## Manueller Lösungsweg in Acrobat

1. Mit dem TouchUp-Leserichtung-Werkzeug kann ein solches Bild ausgewählt werden
2. Der Button *„Hintergrund“* zeichnet das Bild in der Kopf- oder Fusszeile als Artifakt aus
3. Diesen Schritt für jedes betroffene Bild wiederholen

## Manueller Lösungsweg in Word 2013

Da das Problem nur mit der Layoutoption *„Hinter den Text“* besteht, führt das Wechseln zu einer anderen Layoutoption zum Ziel.