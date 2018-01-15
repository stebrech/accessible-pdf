---
ID: 176
post_title: >
  Document ist nicht Tag auf oberster
  Ebene
author: Stefan Brechbühl
post_excerpt: 'Ein aus Word konvertiertes PDF enthält als oberster Container das &lt;Part&gt; Element. Für die oberste Strukturebene sollte jedoch das semantisch geeignetere &lt;Document&gt; Tag verwendet werden.'
layout: tutorials
permalink: >
  http://accessible-pdf.info/de/tutorials/document-ist-nicht-tag-auf-oberster-ebene/
published: true
post_date: 2018-01-05 16:24:27
---
## Problembeschreibung

Ein aus Word konvertiertes PDF enthält als oberster Container das `<Part>` Element. Für die oberste Strukturebene sollte jedoch das semantisch geeignetere `<Document>` Tag verwendet werden.

Problem wurde festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows

### PAC 2 Warnung

> Part structure element used as root element

### Prüfpunkt/e Matterhorn Protokoll

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [automatische Prüfung][1])

## Manueller Lösungsweg 1 in Acrobat

1.  Das betroffene Tag im Tagbaum einmal anklicken um es auszuwählen.
2.  Mit der Maus erneut auf das ausgewählte Tag klicken um es umzubenennen.
3.  Den Tag `<Part>` in `<Document>` umbenennen.

![Animation zeigt die drei Schritte des manuellen Lösungswegs 1 in Acrobat][2]

## Manueller Lösungsweg 2 in Acrobat

1.  Rechtsklick mit der Maus auf das betroffene Tag im Tagbaum.
2.  Im Menü die Eigenschaften auswählen.
3.  Im Eigenschaften-Fenster, im Register Tag, kann der Typ auf *„Dokument“* (übersetzte Schreibweisung) geändert werden.

![Animation zeigt die drei Schritte des manuellen Lösungswegs 2 in Acrobat][3]

 [1]: https://accessible-pdf.info/de/glossar/#automatische-pruefung
 [2]: https://accessible-pdf.info/content/uploads/2018/01/acrobat_rename_tag.gif
 [3]: https://accessible-pdf.info/content/uploads/2018/01/acrobat_rename_tag2_de.gif