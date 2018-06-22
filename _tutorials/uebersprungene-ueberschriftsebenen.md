---
ID: 3267
post_title: Übersprungene Überschriftsebenen
author: Stefan Brechbühl
post_excerpt: ""
layout: tutorials
permalink: >
  https://accessible-pdf.info/tutorials/uebersprungene-ueberschriftsebenen/
published: true
post_date: 2018-06-22 05:47:24
tags:
  - Adobe InDesign
  - automatische Prüfung
  - Microsoft Word
categories:
  - 14. Überschriften
---
## Problembeschreibung

Ein Dokument wird mithilfe von Überschriften mit unterschiedlicher Hierarchiestufe gegliedert, siehe dazu [„Strukturieren mithilfe von hierarchischen Überschriften“][1].

Damit die Struktur mittels Überschriften stets nachvollzogen werden kann, dürfen die Überschriftsebenen nicht übersprungen werden. Nach einer `<H1>` darf demnach nicht direkt eine `<H3>` folgen. Jedoch kann nach einer `<H3>` wieder eine `<H1>` folgen, da beispielsweise ein neues Kapitel beginnt.

### PAC 3 Fehlermeldung

> Überschrift überspringt eine oder mehrere Ebenen

### Prüfpunkt des Matterhorn Protokolls

> **14-003** Bei nummerierten Überschriften-Tags in absteigender Folge wird eine Ebene übersprungen. (→ [automatische Prüfung][2])

## Manueller Lösungsweg in Word

Die Überschriftsebenen können mithilfe der Formatvorlagen bestimmt werden, siehe [„*Tags* in Word festlegen“][3]. Beim Auftreten dieses Fehlers müssen die angewendeten Formatvorlagen korrigiert werden.

Ein hilfreiches Werkzeug ist der *Navigationsbereich*. Falls er nicht sichtbar ist, kann dieser im Menü „Ansicht“ aktiviert werden. Darin kann mithilfe der Einrückung festgestellt werden ob eine eine Überschriftsebene übersprungen wurde.

## Manueller Lösungsweg in InDesign

Die Überschriftsebenen können mithilfe der Absatzformaten bestimmt werden, siehe [„*Tags* in InDesign festlegen“][4]. Beim Auftreten dieses Fehlers müssen die angewendeten Formatvorlagen korrigiert werden und eventuell die bestehenden Absatzformate überdenkt werden.

Ein hilfreiches Werkzeug ist die Funktion „Export-Tags farblich hervorheben“ des InDesign Plugins [MadeToTag][5]. Mithilfe unterschiedlicher oranger Markierungen werden die Überschriften-*Exporttags* kenntlich gemacht.

## Manueller Lösungsweg in Acrobat

Der meist aufwendigere und fehleranfälligere Weg ist die Korrekturen im PDF, also im Navigationsfenster „Tags“ von Acrobat vorzunehmen. Siehe dazu auch [*PDF-Tags* in Acrobat ändern][6].

Falls im Quelldokument Änderungen gemacht werden müssen, wiederholt sich diese Arbeit. Die oben stehenden Lösungswege werden daher als erste Wahl empfohlen.

 [1]: https://accessible-pdf.info/de/basics/strukturieren-mithilfe-von-hierarchischen-ueberschriften/
 [2]: https://accessible-pdf.info/de/glossar/#automatische-pruefung
 [3]: https://accessible-pdf.info/de/basics/tags-in-word-festlegen/
 [4]: https://accessible-pdf.info/de/basics/tags-in-indesign-festlegen/
 [5]: https://www.axaio.com/doku.php/de:products:madetotag
 [6]: https://accessible-pdf.info/de/basics/pdf-tags-in-acrobat-aendern/