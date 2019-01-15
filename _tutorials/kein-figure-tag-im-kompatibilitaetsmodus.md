---
ID: 370
post_title: 'Kein <code>Figure</code> <em>Tag</em> im Kompatibilitätsmodus'
author: Stefan Brechbühl
post_excerpt: 'Ein Bild wird in Word im Kompatibilitätsmodus (.doc) eingefügt und mit der Layoutoption „Mit Text in Zeile“ platziert. Nach dem PDF-Export ist das Bild nicht wie erwartet innerhalb eines &lt;Figure&gt;-Tags, sondern innerhalb eines &lt;InlineShape&gt;, welchem die Rolle &lt;Sect&gt; zugeordnet ist.'
layout: tutorials
permalink: >
  https://accessible-pdf.info/de/tutorials/kein-figure-tag-im-kompatibilitaetsmodus/
published: true
post_date: 2018-01-12 16:35:46
tags:
  - Manuelle Prüfung
  - Word
categories:
  - 13. Grafiken
---
## Problembeschreibung

Ein Bild wird in Word im Kompatibilitätsmodus (.doc) eingefügt und mit der Layoutoption „Mit Text in Zeile“ platziert. Nach dem PDF-Export ist das Bild nicht wie erwartet innerhalb eines `<Figure>` *Tag*, sondern innerhalb eines `<InlineShape>`, welchem die Rolle `<Sect>` zugeordnet ist.

Problem festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows (im Kompatibilitätsmodus)

### PAC 3 Warnung

> Mögliche unangebrachte Verwendung des Strukturelements „Sect“

### Prüfpunkt des Matterhorn Protokolls

> **13-001** Grafikobjekte, bei denen es sich weder um Textobjekte noch um Artefakte handelt, sind nicht als Figure getaggt. (→ [manuelle Prüfung][1])

## Automatischer Lösungsweg in Word 2013

Da das Problem nur im `.doc`-Format, respektive im Kompatibilitätsmodus besteht, kann das Dokument in das neuere `.docx`-Format konvertiert werden. Der Befehl „Konvertieren“ befindet sich im Menü „Datei“ im Register „Informationen“.

Achtung: Die Konvertierung kann (geringere) Layoutveränderungen verursachen!

## Manueller Lösungsweg in Acrobat

1.  Mit dem TouchUp-Leserichtung-Werkzeug kann das Bild ausgewählt und in eine Abbildung umgewandelt werden.
2.  Der nicht standardisierte Tag `<InlineShape>` wird so zu einem `<Figure>` umgewandelt.
3.  Der Alternativtext wird automatisch übernommen.

 [1]: https://accessible-pdf.info/de/glossar/#manuelle-pruefung