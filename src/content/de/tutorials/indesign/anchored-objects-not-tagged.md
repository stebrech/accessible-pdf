---
title: Verankerte Objekte nicht getaggt
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Getaggter realer Inhalt, 09. Geeignete Tags
description: In InDesign CC Version 13.0 bestehen erhebliche Probleme beim Taggen von verankerten Objekten und der Nutzung des „Artikel“ Bedienfelds wie es in „Logische Lesereihenfolge in InDesign festlegen“ beschrieben ist.
---

In InDesign CC Version 13.0 bestehen erhebliche Probleme beim _Taggen_ von verankerten Objekten und der Nutzung des „Artikel“ Bedienfelds wie es in [„Logische Lesereihenfolge in InDesign festlegen“](/de/basics/indesign/defining-logical-reading-order-in-indesign/) beschrieben ist.

- Verankerte Grafiken werden als Artifact gekennzeichnet
- Verankerte Formularfelder werden nicht innerhalb eines `<Form>` _getaggt_
- Verankerte Textrahmen sind nicht in der logischen Lesereihenfolge

## Problem festgestellt bei der PDF-Konvertierung aus:

- InDesign CC 2018 **(13.0)**

## PAC 3 Fehlermeldung

Keine Warnung oder Fehlermeldung zu den als Artifact gekennzeichneten Grafiken!

> „Widget“-Anmerkung nicht innerhalb eines „Form“-Strukturelements

## Prüfpunkte des Matterhorn Protokolls

> **01-002** Realer Inhalt ist als Artefakt gekennzeichnet. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))
>
> **01-005** Inhalt ist weder als Artefakt gekennzeichnet noch als realer Inhalt getaggt. (→ [automatische Prüfung](/de/glossary/#automatische-prüfung))
>
> **09-001** Die Anordnung der Tags entspricht nicht der logischen Lesereihenfolge. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))

---

## Automatischer Lösungsweg in InDesign

Das Problem kann umgangen werden indem ein Update installiert wird. In Version 13.1 (CC 2018) wurden die Probleme gelöst. Ausschnitt aus den offiziellen Release Notes:

> **Key issues resolved**
>
> - Tag for anchored text frame is missing.
> - Anchored images are not exported when exported using the Articles panel.
> - Next anchored figure gets tagged instead of the actual anchored figure with effects applied.

## Manueller Lösungsweg in InDesign

Sofern nicht auf eine andere InDesign Version ausgewichen werden kann, ist der einzige manuelle Lösungsweg Objekte nicht zu verankern. Ob dies realistisch und sinnvoll ist, muss im konkreten Fall entschieden werden.
