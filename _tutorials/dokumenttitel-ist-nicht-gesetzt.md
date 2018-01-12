---
post_title: Dokumenttitel ist nicht gesetzt
layout: tutorials
published: true
post_excerpt: "In den PDF-Dokumenteigenschaften kann definiert werden ob das Dokument mit dem Dateinamen oder dem Dokumenttitel angezeigt wird. Dieser erscheint im PDF-Viewer als Name des Dokumentfensters und stehen auch AT zur Verfügung."
categories:
  - 07. Dictionary
tags:
  - Adobe InDesign
  - Microsoft Word
  - automatische Prüfung
---

## Problembeschreibung

In den PDF-Dokumenteigenschaften kann definiert werden ob das Dokument mit dem Dateinamen oder dem Dokumenttitel angezeigt wird. Dieser erscheint im PDF-Viewer als Name des Dokumentfensters und stehen auch [AT](https://accessible-pdf.info/de/glossar/#assistive-technologie) zur Verfügung. 

PDFs, welche aus Microsoft Word und Adobe InDesign hergestellt werden, zeigen den Dateinamen. Nach [PDF/UA](https://accessible-pdf.info/de/glossar/#pdf-ua) ist jedoch der Dokumenttitel einzustellen da dieser aussagekräftiger ist.

Problem festgestellt bei der PDF-Konvertierung aus:

* Microsoft Word 2013 für Windows
* Adobe InDesign bis CC 2015 (ab Version CC 2015 steht eine Option im Exportfenster zur Verfügung)

### PAC 2 Fehlermeldung

> DisplayDocTitle key is not set to true

### Prüfpunkt/e Matterhorn Protokoll

> **07-001** Das ViewerPreferences-Dictionary des Catalog-Dictionary enthält keinen Schlüssel DisplayDocTitle. (→ [automatische Prüfung](https://accessible-pdf.info/de/glossar/#automatische-pruefung))

> **07-002** Das ViewerPreferences-Dictionary des Catalog-Dictionary enthält einen Schlüssel DisplayDocTitle mit dem Wert false. (→ [automatische Prüfung](https://accessible-pdf.info/de/glossar/#automatische-pruefung))

## Manueller Lösungsweg in Acrobat

1. Das betroffene Dokument in Acrobat öffnen
2. Die Dokumenteigenschaften anzeigen (Datei → Eigenschaften)
3. In das Register *„Ansicht beim Öffnen“* wechseln und unter *„Einblenden“* den Wert auf *„Dokumenttitel“* wechseln

## Automatischer Lösungsweg in Acrobat DC

1. Das Werkzeug-Register *„Druckproduktion“* öffnen und auf *„Preflight“* klicken
2. Im Preflight-Fenster die Preflight Korrekturen anzeigen (auf den kleinen Button mit dem Schraubenschlüssel Symbol klicken)
3. Die Korrektur *„Dokumenttitel in Dokumentfenster anzeigen“* auswählen und auf den Button *„Korrigieren“* klicken

Diese Korrektur ist ausserdem Bestandteil des Preflight-Profils *„Strukturprobleme getaggter PDF-Dokumente beheben“*.

## Automatischer Lösungsweg in InDesign (ab CC 2015)

Seit Adobe InDesign CC 2015 wird in den PDF-Export-Einstellungen ein neuer Bereich mit dem Namen *„Barrierefreiheitsoptionen“* im Register *„Erweitert“* angezeigt. Darin kann der anzuzeigende Namen in *Dokumenttitel* geändert werden.

## Automatischer Lösungsweg in InDesign (MadeToTag)

Mit der Verwendung des Plugins MadeToTag wird der Dokumenttitel automatisch definiert.