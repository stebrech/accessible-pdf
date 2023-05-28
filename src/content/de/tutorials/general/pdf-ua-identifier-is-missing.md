---
title: PDF/UA-Identifier fehlt
layout: post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 06. Metadaten
description: Damit ein PDF-Dokument als technisch barrierefrei gilt, muss die Metainformation vorhanden sein, welche das Dokument als PDF/UA kompatibel kennzeichnet.
---

Damit ein PDF-Dokument als technisch barrierefrei gilt, muss die Metainformation vorhanden sein, welche das Dokument als [PDF/UA](/de/glossary/#pdfua) kompatibel kennzeichnet.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows
- Adobe InDesign alle Versionen

## PAC 3 Fehlermeldung

> Keine PDF/UA-Kennzeichnung

## Prüfpunkt des Matterhorn Protokolls

> **06-002** Der Metadata-Datenstrom im Catalog-Dictionary enthält keine PDF/UA-Kennzeichnung. (→ [automatische Prüfung](/de/glossary/#automatische-prüfung))

---

## Automatischer Lösungsweg in Acrobat DC

1. Das Werkzeug-Register „Druckproduktion“ öffnen und auf „Preflight“ klicken
2. Im Preflight-Fenster die Preflight Korrekturen anzeigen (auf den kleinen Button mit dem Schraubenschlüssel Symbol klicken)
3. Die Korrektur „PDF/UA-1-Eintrag setzen“ auswählen und auf den Button „Korrigieren“ klicken

Diese Korrektur ist ausserdem Bestandteil des Preflight-Profils „Strukturprobleme getaggter PDF-Dokumente beheben“.

## Automatischer Lösungsweg in InDesign (MadeToTag)

Mit der Verwendung des Plugins [MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag) wird die Metadaten-Information automatisch angehängt.

## Manueller Lösungsweg in Acrobat

1. Lade die Datei [pdfUA-ID.xmp](https://taggedpdf.com/xmp/pdfUA-ID.xmp) herunter (Quelle: [taggedpdf.com](https://taggedpdf.com/508-pdf-help-center/pdfua-identifier-missing/))
2. Öffne das betroffene Dokument in Acrobat
3. Zeige die Dokumenteigenschaften an („Datei“ → „Eigenschaften“)
4. Wechsle in das Register „Beschreibung“ und klicke den Button „Zusätzliche Metadaten“
5. Wechsle in das Register „Erweitert“ und klicke den Button „Anhängen“
6. Wähle die heruntergeladene Datei „pdfUA-ID.xmp“ aus und klicke „Öffnen“
