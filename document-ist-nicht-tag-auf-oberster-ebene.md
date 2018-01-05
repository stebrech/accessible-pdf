---
post_title: <em>Document</em> ist nicht Tag auf oberster Ebene
layout: tutorials
published: true
post_excerpt: "Ein aus Word 2013 konvertiertes PDF enthält als oberster Container das `<Part>` Element. Für die oberste Strukturebene sollte jedoch das semantisch geeignetere `<Document>` Tag verwendet werden."
categories:
  - 01. Getaggter realer Inhalt
tags:
  - Microsoft Word
  - manuelle Prüfung
---

## Problembeschreibung

Ein aus Word konvertiertes PDF enthält als oberster Container das `<Part>` Element. Für die oberste Strukturebene sollte jedoch das semantisch geeignetere `<Document>` Tag verwendet werden.

Problem wurde festgestellt bei der PDF-Konvertierung aus:

* Microsoft Word 2013 für Windows

### PAC 2 Warnung

> Part structure element used as root element

### Prüfpunkt/e Matterhorn Protokoll

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [automatische Prüfung](https://accessible-pdf.info/de/glossar/#automatische-pruefung))

## Manueller Lösungsweg 1 in Acrobat

1. Das betroffene Tag im Tagbaum einmal anklicken um es auszuwählen.
2. Mit der Maus erneut auf das ausgewählte Tag klicken um es umzubenennen.
3. Den Tag `<Part>` in `<Document>` umbenennen.

![Animation zeigt die drei Schritte des manuellen Lösungswegs 1 in Acrobat](https://github.com/pixelstrolch/accessible-pdf/blob/master/assets/xx_acrobat_rename_tag.gif)

## Manueller Lösungsweg 2 in Acrobat

1. Rechtsklick mit der Maus auf das betroffene Tag im Tagbaum.
2. Im Menü die Eigenschaften auswählen.
3. Im Eigenschaften-Fenster, im Register Tag, kann der Typ auf *„Dokument“* (übersetzte Schreibweisung) geändert werden.

![Animation zeigt die drei Schritte des manuellen Lösungswegs 2 in Acrobat](https://github.com/pixelstrolch/accessible-pdf/blob/master/assets/de_acrobat_rename_tag2.gif)