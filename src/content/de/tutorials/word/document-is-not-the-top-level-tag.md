---
title: Document ist nicht Tag auf oberster Ebene
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Getaggter realer Inhalt
description: Ein aus Word konvertiertes PDF enthält als oberster Container das <Part> Element. Für die oberste Strukturebene sollte jedoch das semantisch geeignetere <Document> Tag verwendet werden.
---

Ein aus Word konvertiertes PDF enthält als oberster Container das `<Part>` Element. Für die oberste Strukturebene sollte jedoch das semantisch geeignetere `<Document>` Tag verwendet werden.

## Problem wurde festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows

## PAC 3 Warnung

> Strukturelement „Part“ als Basiselement verwendet

## Prüfpunkt des Matterhorn Protokolls

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))

---

## Manueller Lösungsweg in Acrobat

Der oberste `<Part>` _Tag_ muss in den `<Document>` _Tag_ geändert werden, siehe dazu [„PDF-Tags in Acrobat erstellen und ändern“](/de/basics/acrobat/create-and-modify-pdf-tags-in-acrobat/).
