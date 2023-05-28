---
title: Getaggte Bilder in Kopf- und Fusszeile
layout: post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Getaggter realer Inhalt
description: Sämtliche Inhalte in Kopf- und Fusszeile eines Word-Dokuments werden als Artefakt behandelt und nicht *getaggt*. Bilder mit inhaltlichen Wert dürfen daher nicht darin platziert werden. Bilder in der Kopf- oder Fusszeile einer .docx-Datei (Word 2013 Dokument ohne Kompatibilitätsmodus) werden fälschlicherweise getaggt, wenn sie mit der Layoutoption „Hinter den Text“ platziert wurden.
---

Sämtliche Inhalte in Kopf- und Fusszeile eines Word-Dokuments werden als Artefakt behandelt und nicht _getaggt_. Bilder mit inhaltlichen Wert dürfen daher nicht darin platziert werden. Bilder in der Kopf- oder Fusszeile einer `.docx`-Datei (Word 2013 Dokument ohne Kompatibilitätsmodus) werden **fälschlicherweise _getaggt_**, wenn sie mit der **Layoutoption „Hinter den Text“** platziert wurden.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows

## PAC 3 Warnung/Fehler

Keine Warnung oder Fehlermeldung zu diesem Problem!

## Prüfpunkt des Matterhorn Protokolls

> **01-001** Artefakte sind als realer Inhalt getaggt. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))

---

## Manueller Lösungsweg in Word 2013

Da das Problem nur mit der Layoutoption „Hinter den Text“ besteht, führt das Wechseln zu einer anderen Layoutoption zum Ziel.

## Manueller Lösungsweg in Acrobat

1. Mit dem TouchUp-Leserichtung-Werkzeug kann ein solches Bild ausgewählt werden
2. Der Button „Hintergrund“ zeichnet das Bild in der Kopf- oder Fusszeile als Artefakt aus
3. Diesen Schritt für jedes betroffene Bild wiederholen
