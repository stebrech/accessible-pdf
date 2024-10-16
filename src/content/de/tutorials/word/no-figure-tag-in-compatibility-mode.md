---
title: Kein Figure Tag im Kompatibilitätsmodus
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 13. Grafiken
description: Ein Bild wird in Word im Kompatibilitätsmodus (.doc) eingefügt und mit der Layoutoption „Mit Text in Zeile“ platziert. Nach dem PDF-Export ist das Bild nicht wie erwartet innerhalb eines <Figure>-Tags, sondern innerhalb eines <InlineShape>, welchem die Rolle <Sect> zugeordnet ist.
---

Ein Bild wird in Word im Kompatibilitätsmodus (.doc) eingefügt und mit der Layoutoption „Mit Text in Zeile“ platziert. Nach dem PDF-Export ist das Bild nicht wie erwartet innerhalb eines `<Figure>`_Tags_, sondern innerhalb eines `<InlineShape>`, welchem die Rolle `<Sect>` zugeordnet ist.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows (im Kompatibilitätsmodus)

## PAC 3 Warnung

> Mögliche unangebrachte Verwendung des Strukturelements „Sect“

## Prüfpunkt des Matterhorn Protokolls

> **13-001** Grafikobjekte, bei denen es sich weder um Textobjekte noch um Artefakte handelt, sind nicht als Figure getaggt. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))

---

## Automatischer Lösungsweg in Word 2013

Da das Problem nur im `.doc`-Format, respektive im Kompatibilitätsmodus besteht, kann das Dokument in das neuere `.docx`-Format konvertiert werden. Der Befehl „Konvertieren“ befindet sich im Menü „Datei“ im Register „Informationen“.

Achtung: Die Konvertierung kann (geringere) Layoutveränderungen verursachen!

## Manueller Lösungsweg in Acrobat

1. Mit dem TouchUp-Leserichtung-Werkzeug kann das Bild ausgewählt und in eine Abbildung umgewandelt werden.
2. Der nicht standardisierte Tag `<InlineShape>` wird so zu einem `<Figure>` umgewandelt.
3. Der Alternativtext wird automatisch übernommen.
