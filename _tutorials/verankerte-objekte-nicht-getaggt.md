---
ID: 58036
post_title: 'Verankerte Objekte nicht <em>getaggt</em>'
author: Stefan Brechbühl
post_excerpt: >
  In InDesign CC Version 13.0 bestehen
  erhebliche Probleme beim Taggen von
  verankerten Objekten und der Nutzung des
  „Artikel“ Bedienfelds wie es in
  „Logische Lesereihenfolge in InDesign
  festlegen“ beschrieben ist.
layout: tutorials
permalink: >
  https://accessible-pdf.info/de/tutorials/verankerte-objekte-nicht-getaggt/
published: true
post_date: 2019-05-21 15:48:21
tags:
  - Automatische Prüfung
  - InDesign
  - Manuelle Prüfung
categories:
  - 01. Getaggter realer Inhalt
  - 09. Geeignete Tags
---
## Issue description

In InDesign CC Version 13.0 bestehen erhebliche Probleme beim *Taggen* von verankerten Objekten und der Nutzung des „Artikel“ Bedienfelds wie es in [„Logische Lesereihenfolge in InDesign festlegen“](https://accessible-pdf.info/de/basics/logische-lesereihenfolge-in-indesign-festlegen/) beschrieben ist. 

- Verankerte Grafiken werden als Artifact gekennzeichnet
- Verankerte Formularfelder werden nicht innerhalb eines `<Form>` *getaggt*
- Verankerte Textrahmen sind nicht in der logischen Lesereihenfolge

Problem festgestellt bei der PDF-Konvertierung aus:

- InDesign CC 2018 **(13.0)**

### PAC 3 Fehlermeldung

Keine Warnung oder Fehlermeldung zu den als Artifact gekennzeichneten Grafiken!

> „Widget“-Anmerkung nicht innerhalb eines „Form“-Strukturelements

### Prüfpunkte des Matterhorn Protokolls
 
> **01-002** Realer Inhalt ist als Artefakt gekennzeichnet. (→ [manuelle Prüfung](https://accessible-pdf.info/de/glossar/#manuelle-pruefung))
> 
> **01-005** Inhalt ist weder als Artefakt gekennzeichnet noch als realer Inhalt getaggt. (→ [automatische Prüfung](https://accessible-pdf.info/de/glossar/#automatische-pruefung))
> 
> **09-001** Die Anordnung der Tags entspricht nicht der logischen Lesereihenfolge. (→ [manuelle Prüfung](https://accessible-pdf.info/de/glossar/#manuelle-pruefung))

## Automatischer Lösungsweg in InDesign

Das Problem kann umgangen werden indem ein Update installiert wird. In Version 13.1 (CC 2018) wurden die Probleme gelöst. Ausschnitt aus den offiziellen Release Notes:

**Key issues resolved**

- Tag for anchored text frame is missing.
- Anchored images are not exported when exported using the Articles panel.
- Next anchored figure gets tagged instead of the actual anchored figure with effects applied.

## Manueller Lösungsweg in InDesign

Sofern nicht auf eine andere InDesign Version ausgewichen werden kann, ist der einzige manuelle Lösungsweg Objekte nicht zu verankern. Ob dies realistisch und sinnvoll ist, muss im konkreten Fall entschieden werden.