---
title: Falsche Anzeigereihenfolge lässt Inhalte verschwinden
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2020-01-08
category: –
description: Im Zusammenhang mit dem manuellen Kennzeichnen von Tags und Artefakten innerhalb von Acrobat kann es passieren, dass Inhalte plötzlich nicht mehr sichtbar sind. Es scheint als wäre etwas gelöscht worden. In Wahrheit gab es aber eine Verschiebung der Anzeigereihenfolge. Die entsprechenden Inhalte wurden also nicht gelöscht, sondern verstecken sich hinter einem anderen Objekt, beispielsweise einer farbigen Fläche.
---

Im Zusammenhang mit dem manuellen Kennzeichnen von _Tags_ und Artefakten innerhalb von Acrobat kann es passieren, dass Inhalte plötzlich nicht mehr sichtbar sind. Es scheint als wäre etwas gelöscht worden. In Wahrheit gab es aber eine Verschiebung der Anzeigereihenfolge. Die entsprechenden Inhalte wurden also nicht gelöscht, sondern verstecken sich hinter einem anderen Objekt, beispielsweise einer farbigen Fläche.

## PAC 3 Fehlermeldung

Keine Warnung oder Fehlermeldung bei diesem visuellen Fehler.

## Prüfpunkte des Matterhorn Protokolls

Ist kein PDF/UA-Fehler, daher trifft auch kein Prüfpunkt zu.

---

## Manueller Lösungsweg in Acrobat

Im Navigationsfenster „Inhalt“ liegt das Element, das sich an oberster Stelle befindet, auf der untersten Ebene. Die Reihenfolge dieser Auflistung und die Darstellungsebene ist daher umgekehrt.

Um Inhalte, die sich hinter einem anderen Objekt (z.B. einer Fläche) verstecken, wieder sichtbar zu machen, muss der Eintrag, welcher die unsichtbaren Inhalten enthält, weiter nach unten verschoben werden. Die Lösung funktioniert natürlich auch umgekehrt indem das Objekt, welches Inhalte verdeckt, weiter nach oben verschoben wird.
