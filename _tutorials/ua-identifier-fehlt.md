---
ID: 211
post_title: '<em>UA-Identifier</em> fehlt'
author: Stefan Brechbühl
post_excerpt: >
  Damit ein PDF-Dokument als technisch
  barrierefrei gilt, muss die
  Metainformation vorhanden sein, welche
  das Dokument als PDF/UA kompatibel
  kennzeichnet.
layout: tutorials
permalink: >
  http://accessible-pdf.info/de/tutorials/ua-identifier-fehlt/
published: true
post_date: 2018-01-11 17:29:45
---
## Problembeschreibung

Damit ein PDF-Dokument als technisch barrierefrei gilt, muss die Metainformation vorhanden sein, welche das Dokument als [PDF/UA][1] kompatibel kennzeichnet.

Problem festgestellt bei der PDF-Konvertierung aus:

*   Microsoft Word 2013 für Windows
*   Adobe InDesign alle Versionen

### PAC 2 Fehlermeldung

> PDF/UA identifier missing

### Prüfpunkt/e Matterhorn Protokoll

> **06-002** Der Metadata-Datenstrom im Catalog-Dictionary enthält keine PDF/UA-Kennzeichnung. (→ [automatische Prüfung][2])

## Manueller Lösungsweg in Acrobat

1.  Die Datei [pdfUA-ID.xmp herunterladen][3]
2.  Das betroffene Dokument in Acrobat öffnen
3.  Die Dokumenteigenschaften anzeigen (Datei → Eigenschaften)
4.  In das Register *„Beschreibung“* wechseln und den Button *„Zusätzliche Metadaten“* klicken
5.  In das Register *„Erweitert“* wechseln und den Button *„Anhängen“* klicken
6.  Die vorgängig heruntergeladene Datei *„pdfUA-ID.xmp“* auswählen und „Öffnen“ klicken

## Automatischer Lösungsweg in Acrobat DC

1.  Das Werkzeug-Register *„Druckproduktion“* öffnen und auf *„Preflight“* klicken
2.  Im Preflight-Fenster die Preflight Korrekturen anzeigen (auf den kleinen Button mit dem Schraubenschlüssel Symbol klicken)
3.  Die Korrektur *„PDF/UA-1-Eintrag setzen“* auswählen und auf den Button *„Korrigieren“* klicken

Diese Korrektur ist ausserdem Bestandteil des Preflight-Profils *„Strukturprobleme getaggter PDF-Dokumente beheben“*.

## Automatischer Lösungsweg in InDesign (MadeToTag)

Mit der Verwendung des Plugins MadeToTag wird die Metadaten-Information automatisch angehängt.

 [1]: https://accessible-pdf.info/de/glossar/#pdf-ua
 [2]: https://accessible-pdf.info/de/glossar/#automatische-pruefung
 [3]: https://taggedpdf.com/xmp/pdfUA-ID.xmp