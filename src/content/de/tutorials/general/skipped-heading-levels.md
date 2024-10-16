---
title: Übersprungene Überschriftsebenen
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 14. Überschriften
description: Ein Dokument wird mithilfe von Überschriften mit unterschiedlicher Hierarchiestufe gegliedert. Damit die Struktur mittels Überschriften stets nachvollzogen werden kann, dürfen die Überschriftsebenen nicht übersprungen werden.
---

Ein Dokument wird mithilfe von Überschriften mit unterschiedlicher Hierarchiestufe gegliedert, siehe dazu [„Strukturieren mithilfe von hierarchischen Überschriften“](/de/basics/general/structure-with-the-help-of-multi-level-headings/). Damit die Struktur mittels Überschriften stets nachvollzogen werden kann, dürfen die Überschriftsebenen nicht übersprungen werden.

Nach einer `<H1>` darf demnach nicht direkt eine `<H3>` folgen. Jedoch kann nach einer `<H3>` wieder eine `<H1>` folgen, da beispielsweise ein neues Kapitel beginnt.

## PAC 3 Fehlermeldung

> Überschrift überspringt eine oder mehrere Ebenen

## Prüfpunkt des Matterhorn Protokolls

> **14-003** Bei nummerierten Überschriften-Tags in absteigender Folge wird eine Ebene übersprungen. (→ [automatische Prüfung](/de/glossary/#automatische-prüfung))

---

## Manueller Lösungsweg in Word

Die Überschriftsebenen können mithilfe der Formatvorlagen bestimmt werden, siehe [„PDF-_Tags_ in Word festlegen“](/de/basics/word/defining-pdf-tags-in-word/). Beim Auftreten dieses Fehlers müssen die angewendeten Formatvorlagen korrigiert werden.

Ein hilfreiches Werkzeug ist der _Navigationsbereich_. Falls er nicht sichtbar ist, kann dieser im Menü „Ansicht“ aktiviert werden. Darin kann mithilfe der Einrückung festgestellt werden ob eine eine Überschriftsebene übersprungen wurde.

## Manueller Lösungsweg in InDesign

Die Überschriftsebenen können mithilfe der Absatzformaten bestimmt werden, siehe [„PDF-_Tags_ in InDesign festlegen“](/de/basics/indesign/defining-pdf-tags-in-indesign/). Beim Auftreten dieses Fehlers müssen die angewendeten Formatvorlagen korrigiert werden und eventuell die bestehenden Absatzformate überdenkt werden.

Ein hilfreiches Werkzeug ist die Funktion „Export-Tags farblich hervorheben“ des InDesign Plugins [MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag). Mithilfe unterschiedlicher oranger Markierungen werden die Überschriften-_Exporttags_ kenntlich gemacht.

## Manueller Lösungsweg in Acrobat

Der meist aufwendigere und fehleranfälligere Weg ist die Korrekturen im PDF, also im Navigationsfenster „Tags“ von Acrobat vorzunehmen. Siehe dazu auch [PDF-_Tags_ in Acrobat erstellen und ändern](/de/basics/acrobat/create-and-modify-pdf-tags-in-acrobat/).

Falls im Quelldokument Änderungen gemacht werden müssen, wiederholt sich diese Arbeit. Die oben stehenden Lösungswege werden daher als erste Wahl empfohlen.
