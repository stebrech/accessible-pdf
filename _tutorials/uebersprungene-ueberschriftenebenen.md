---
post_title: Übersprungene Überschriftsebenen
layout: tutorials
published: true
categories:
  - 14. Überschriften
tags:
  - Adobe Indesign
  - Microsoft Word
  - automatische Prüfung 
---

## Problembeschreibung

Ein Dokument wird mithilfe von Überschriften mit unterschiedlicher Hierarchiestufe gegliedert, siehe dazu [„Strukturieren mithilfe von hierarchischen Überschriften“](https://accessible-pdf.info/de/basics/strukturieren-mithilfe-von-hierarchischen-ueberschriften/). 

Damit die Struktur mittels Überschriften stets nachvollzogen werden kann, dürfen die Überschriftsebenen nicht übersprungen werden. Nach einer `<H1>` darf demnach nicht direkt eine `<H3>` folgen. Jedoch kann nach einer `<H3>` wieder eine `<H1>` folgen, da beispielsweise ein neues Kapitel beginnt.

### PAC 3 Fehlermeldung

> Numbered heading skips one ore more heading levels

### Prüfpunkt des Matterhorn Protokolls

> **14-003** Bei nummerierten Überschriften-Tags in absteigender Folge wird eine Ebene übersprungen. (→ [automatische Prüfung](https://accessible-pdf.info/de/glossar/#automatische-pruefung))

## Manueller Lösungsweg in Word

Die Überschriftsebenen können mithilfe der Formatvorlagen bestimmt werden, siehe [„*Tags* in Word festlegen“](https://accessible-pdf.info/de/basics/tags-in-word-festlegen/). Beim Auftreten dieses Fehlers müssen die angewendeten Formatvorlagen korrigiert werden.

Ein hilfreiches Werkzeug ist der *Navigationsbereich*. Falls er nicht sichtbar ist, kann dieser im Menü „Ansicht“ aktiviert werden. Darin kann mithilfe der Einrückung festgestellt werden ob eine eine Überschriftsebene übersprungen wurde.

## Manueller Lösungsweg in InDesign

Die Überschriftsebenen können mithilfe der Absatzformaten bestimmt werden, siehe [„*Tags* in InDesign festlegen“](https://accessible-pdf.info/de/basics/tags-in-indesign-festlegen/). Beim Auftreten dieses Fehlers müssen die angewendeten Formatvorlagen korrigiert werden und eventuell die bestehenden Absatzformate überdenkt werden.

Ein hilfreiches Werkzeug ist die Funktion „Export-Tags farblich hervorheben“ des InDesign Plugins [MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag). Mithilfe unterschiedlicher oranger Markierungen werden die Überschriften-*Exporttags* kenntlich gemacht.  

## Manueller Lösungsweg in Acrobat

Der meist aufwendigere und fehleranfälligere Weg ist die Korrekturen im PDF, also im Navigationsfenster „Tags“ von Acrobat vorzunehmen. Siehe dazu auch [*PDF-Tags* in Acrobat ändern](https://accessible-pdf.info/de/basics/pdf-tags-in-acrobat-aendern/). 

Falls im Quelldokument Änderungen gemacht werden müssen, wiederholt sich diese Arbeit. Die oben stehenden Lösungswege werden daher als erste Wahl empfohlen.