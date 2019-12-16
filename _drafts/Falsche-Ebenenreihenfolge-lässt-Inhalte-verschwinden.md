---
ID: 58375
post_title: >
  Falsche Ebenenreihenfolge lässt Inhalte
  verschwinden
author: Stefan Brechbühl
post_excerpt: ""
layout: tutorials
permalink: 'https://accessible-pdf.info/?post_type=tutorials&p=58375'
published: false
tags: [ ]
categories: [ ]
---
## Problembeschreibung

Im Zusammenhang mit dem manuellen Kennzeichnen von *Tags* und Artefakten innerhalb von Acrobat kann es passieren, dass Inhalte plötzlich nicht mehr sichtbar sind. Es scheint als wäre etwas gelöscht worden. In Wahrheit gab es aber eine Verschiebung der Ebenen wo sich die Elemente befinden. Die entsprechenden Inhalte wurde also nicht gelöscht sondern verstecken sich hinter einem anderen Objekt, beispielsweise einer farbigen Fläche.

### PAC 3 Fehlermeldung

Keine Warnung oder Fehlermeldung bei diesem visuellen Fehler.

### Prüfpunkte des Matterhorn Protokolls

Ist kein PDF/UA-Fehler, daher trifft auch kein Prüfpunkt zu.

## Manueller Lösungsweg in Acrobat

Im Navigationsfenster „Inhalt“ liegt das Element, das sich an oberster Stelle befindet, auf der untersten Ebene. Die Reihenfolge dieser Auflistung und die Darstellungsebene ist daher umgekehrt.

Um den Text, der sich hinter die Fläche versteckt hat, wieder sichtbar zu machen, muss einfach die Fläche, die als Artefakt gekennzeichnet wurde, weiter nach oben verschoben werden.