---
title: Liste ist nicht als Liste getaggt
layout: layouts/post.njk
author: Stefan Brechbühl
date: 2019-12-09
category: 01. Getaggter realer Inhalt, 16. Listen
description: Wenn undefinierte oder nummerierte Listen verwendet werden, sollen diese auch als Liste getaggt werden. Die Listen-Tags werden beim Export aus Microsoft Word oder Adobe InDesign automatisch vergeben, sofern die Listen korrekt erstellt wurden.
---

Wenn undefinierte oder nummerierte Listen verwendet werden, sollen diese auch als Liste _getaggt_ werden. Die Listen-_Tags_ werden beim Export aus Microsoft Word oder Adobe InDesign automatisch vergeben, sofern die Listen korrekt erstellt wurden.

Für Menschen, die auf [AT](/de/glossary/#assistive-technologie) angewiesen sind, helfen korrekt _getaggte_ Listen dem Verständnis und verbessern die Navigationsmöglichkeiten.

## PAC 3 Warnung/Fehler

Keine Warnung oder Fehlermeldung zu diesem Problem!

## Prüfpunkte des Matterhorn Protokolls

> **01-006** Der Strukturtyp und Attribute eines Strukturelementes sind nicht semantisch geeignet für das Strukturelement. Alle Strukturelemente müssen in Betracht gezogen werden. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))
>
> **16-003** Inhalt ist eine Liste, die jedoch nicht als Liste getaggt ist. (→ [manuelle Prüfung](/de/glossary/#manuelle-prüfung))

---

## Manueller Lösungsweg in Word

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Microsoft Word](src/assets/img/word_list_icons.png)

Damit die Formatierungen der Listen über das ganze Dokument einheitlich sind, wird das Erstellen einer Listenformatvorlage empfohlen.

## Manueller Lösungsweg in InDesign

Die betroffenen Stellen können mit der Listenfunktion umformatiert werden.

![Listen-Schaltflächen in Adobe InDesign](src/assets/img/indesign_list_icons.png)

Damit die Formatierungen der Listen über das ganze Dokument einheitlich sind, wird das Erstellen einer separaten Absatzformatvorlage empfohlen.

## Manueller Lösungsweg in Acrobat

Das manuelle _Nachtaggen_ von Listen ist sehr zeitaufwändig und fehleranfällig. Es wird empfohlen eine der oben stehenden Lösungswege vorzuziehen.

Die benötigten _Tags_ sind `<L>`, `<LI>`, `<Lbl>` und `<LBody>`. Die einzelnen _Tags_ werden in [„Übersicht der _PDF-Tags_“](/de/basics/general/overview-of-the-pdf-tags/) beschrieben.
