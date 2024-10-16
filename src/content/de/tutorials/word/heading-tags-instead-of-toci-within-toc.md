---
title: Überschriften-Tags anstatt TOCI innerhalb von TOC
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Getaggter realer Inhalt
description: Ein Inhaltsverzeichnis wird mit den Tags <TOC>und <TOCI> erstellt. <TOC> ist dabei der Container und <TOCI> wird für die einzelnen Einträge verwendet. Bei diesem Fehlerszenario werden im PDF einzelne Einträge innerhalb Überschriften-Tags, z.B. <H1>, anstatt <TOCI> strukturiert.
---

Ein Inhaltsverzeichnis wird mit den Tags `<TOC>` und `<TOCI>` erstellt. `<TOC>` ist dabei der Container und `<TOCI>` wird für die einzelnen Einträge verwendet. Bei diesem Fehlerszenario werden im PDF einzelne Einträge innerhalb Überschriften-Tags, z.B. `<H1>`, anstatt `<TOCI>` strukturiert.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows

## PAC 3 Warnung/Fehler

Keine Warnung oder Fehlermeldung zu diesem Problem!

## Prüfpunkt des Matterhorn Protokolls

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))

---

## Manueller Lösungsweg in Word

Word verwendet für die einzelnen Verzeichniseinträge die Formatvorlagen

- Verzeichnis 1
- Verzeichnis 2
- …

Ist in diesen Formatvorlagen die Gliederungsebene (Absatz Einstellungen) nicht als _Textkörper_ definiert, werden die Überschriften-Tags angewendet. Diese müssen also zwingend mit der Option _Textkörper_ definiert sein.
