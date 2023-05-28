---
title: Dokumenttitel ist nicht gesetzt
layout: post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 07. Dictionary
description: In den PDF-Dokumenteigenschaften kann definiert werden ob das Dokument mit dem Dateinamen oder dem Dokumenttitel angezeigt wird. Dieser Name erscheint dann in der Titelleiste von Acrobat (Reader). AT nutzt somit ebenfalls den Dokumenttitel.
---

In den PDF-Dokumenteigenschaften kann definiert werden ob das Dokument mit dem Dateinamen oder dem Dokumenttitel angezeigt wird. Dieser Name erscheint dann in der Titelleiste von Acrobat (Reader). [AT](/de/glossary/#assistive-technologie) nutzt somit ebenfalls den Dokumenttitel.

PDFs, welche aus Microsoft Word und Adobe InDesign hergestellt werden, zeigen den Dateinamen. [PDF/UA](/de/glossary/#pdfua) gibt jedoch vor, dass der Dokumenttitel einzustellen ist. Wenn ein Dokumenttitel gesetzt und angezeigt wird, ist dies in der Regel viel aussagekräftiger als ein Dateiname.

## Problem festgestellt bei der PDF-Konvertierung aus:

- Microsoft Word 2013 für Windows
- Adobe InDesign bis CC 2015 (ab Version CC 2015 steht eine Option im Exportfenster zur Verfügung)

## PAC 3 Fehlermeldung

> „DisplayDocTitle“-Eintrag ist nicht gesetzt

## Prüfpunkte des Matterhorn Protokolls

> **07-001** Das ViewerPreferences-Dictionary des Catalog-Dictionary enthält keinen Schlüssel DisplayDocTitle. (→ [automatische Prüfung](/de/glossary/#automatische-prüfung))
>
> **07-002** Das ViewerPreferences-Dictionary des Catalog-Dictionary enthält einen Schlüssel DisplayDocTitle mit dem Wert false. (→ [automatische Prüfung](/de/glossary/#automatische-prüfung))

---

## Automatischer Lösungsweg in InDesign (ab CC 2015)

Seit Adobe InDesign CC 2015 wird in den PDF-Export-Einstellungen ein neuer Bereich mit dem Namen „Barrierefreiheitsoptionen“ im Register „Erweitert“ angezeigt. Darin kann der anzuzeigende Namen in „Dokumenttitel“ geändert werden.

## Automatischer Lösungsweg in InDesign (MadeToTag)

Mit der Verwendung des Plugins [MadeToTag](https://www.axaio.com/doku.php/de:products:madetotag) wird der Dokumenttitel automatisch definiert.

## Automatischer Lösungsweg in Acrobat DC

1. Das Werkzeug-Register „Druckproduktion“ öffnen und auf „Preflight“ klicken
2. Im Preflight-Fenster die Preflight Korrekturen anzeigen (auf den kleinen Button mit dem Schraubenschlüssel Symbol klicken)
3. Die Korrektur „Dokumenttitel in Dokumentfenster anzeigen“ auswählen und auf den Button „Korrigieren“ klicken

Diese Korrektur ist ausserdem Bestandteil des Preflight-Profils „Strukturprobleme getaggter PDF-Dokumente beheben“.

## Manueller Lösungsweg in Acrobat

1. Das betroffene Dokument in Acrobat öffnen
2. Die Dokumenteigenschaften anzeigen (Datei → Eigenschaften)
3. In das Register „Ansicht beim Öffnen“ wechseln und unter „Einblenden“ den Wert auf „Dokumenttitel“ wechseln
